import { FormContainer, InputMinutesAmount, InputNameProject } from "./styles";

export function NewCycleForm() {
    return (
        <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <InputNameProject 
                        type="text" 
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                        disabled={!!activeCycle}
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
                        disabled={!!activeCycle}
                        {...register('minutesAmount', {valueAsNumber: true})}
                    />
                    
                    <span>minutos.</span>
                </FormContainer>
    )
}

