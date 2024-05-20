import { Play } from "phosphor-react";
import { HomeContainer, FormContainer, CountDownContainer, 
        ButtonStart, Separator, InputNameProject, InputMinutesAmount } from "./styles";

export function Home(){
    return(
        <HomeContainer>
            <form action="">
                <FormContainer>
                    <label htmlFor="task">Vou trabalhar em</label>
                    <InputNameProject 
                        type="text" 
                        name="task"
                        id="task"
                        placeholder="Dê um nome para o seu projeto"
                        list="task-suggestions"
                    />

                    <datalist id="task-suggestions">
                        <option value="Projeto 1" />
                        <option value="Projeto 2" />
                        <option value="Projeto 3" />
                    </datalist>

                    <label htmlFor="minutesAmount">durante</label>
                    <InputMinutesAmount 
                        type="number"
                        name="minutesAmount"
                        id="minutesAmount"
                        placeholder="00"
                        step={5}
                        min={5}
                        max={60}
                    />
                    
                    <span>minutos.</span>
                </FormContainer>

                <CountDownContainer>
                    <span>0</span>
                    <span>0</span>
                    <Separator>:</Separator>
                    <span>0</span>
                    <span>0</span>
                </CountDownContainer>

                <ButtonStart type="submit" disabled>
                    <Play size={24}/>
                    Começar
                </ButtonStart>
            </form>
        </HomeContainer>
    )
}