import { useState } from "react"
import { useForm } from "react-hook-form"
import { Play } from "phosphor-react"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { HomeContainer, FormContainer, CountDownContainer, 
        ButtonStart, Separator, InputNameProject, InputMinutesAmount } from "./styles";

const newCycleFormalidationSchema = z.object({
    task: z.string().min(1, {message: 'Informe o nome da tarefa'}),
    minutesAmount: z
        .number()
        .step(5, {message: 'O tempo deve ser um multiplo de 5'})
        .min(5, {message: 'O tempo mínimo é de 5 minutos'})
        .max(60, {message: 'O tempo máximo é de 60 minutos'}),
});

type NewCycleFormData = z.infer<typeof newCycleFormalidationSchema>;

interface Cycle{
    id: string;
    task: string;
    minutesAmount: number;
}

export function Home(){
    const [cycles, setCycles] = useState<Cycle[]>([])
    const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
    const [amountSecondsPassed, setAmountSecondsPassed] = useState(0);

    const { register, handleSubmit, watch, formState: {errors}, reset } = useForm({
        resolver: zodResolver(newCycleFormalidationSchema),
        defaultValues: {
            task: '',
            minutesAmount: 0,
        }
    });

    function handleCreateNewCycle(data: NewCycleFormData){
        const newCycle:Cycle = {
            id: String(new Date().getTime()),
            task: data.task,
            minutesAmount: data.minutesAmount,
        }
        setCycles(state => [...state, newCycle]);
        setActiveCycleId(newCycle.id);
        reset();
    }

    if(JSON.stringify(errors) !== '{}') console.log(errors);

    const activeCycle = cycles.find(cycle => cycle.id === activeCycleId);

    const totalSeconds= activeCycle ? activeCycle.minutesAmount * 60 : 0;
    const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0;

    const minutesAmount = Math.floor(currentSeconds / 60);
    const secondsAmount = currentSeconds % 60;

    const minutes = String(minutesAmount).padStart(2, '0');
    const seconds = String(secondsAmount).padStart(2, '0');



    const task = watch('task');
    const minutesInput = watch('minutesAmount');
    const isSubmitDisabled = !task || !minutesInput;

    return(
        <HomeContainer>
            <form action="" onSubmit={handleSubmit(handleCreateNewCycle)}>
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <InputNameProject 
                        type="text" 
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        {...register('task')}
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <InputMinutesAmount 
                        type="number"
                        id="minutesAmount"
                        placeholder="00"
                        {...register('minutesAmount', {valueAsNumber: true})}
                    />
                    
                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>{minutes[0]}</span>
                    <span>{minutes[1]}</span>
                    <Separator>:</Separator>
                    <span>{seconds[0]}</span>
                    <span>{seconds[1]}</span>
                </CountDownContainer>

                <ButtonStart type="submit" disabled={isSubmitDisabled}>
                    <Play size={24}/>
                    Começar
                </ButtonStart>
            </form>
        </HomeContainer>
    )
}