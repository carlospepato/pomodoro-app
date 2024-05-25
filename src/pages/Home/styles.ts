import styled from "styled-components";

export const HomeContainer = styled.main`
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 3.5rem;
    }
`;

export const BaseButtonStart = styled.button`
    width: 100%;
    height: 64px;
    border: 0;
    border-radius: 6px;
    font-weight: bold;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;

    &:disabled{
        opacity: 0.7;
        cursor: not-allowed;
    }
`;

export const ButtonStop = styled(BaseButtonStart)`
    background: ${props => props.theme["red-500"]};
    color: ${props => props.theme["gray-100"]};

    &:not(:disabled):hover{
        background: ${props => props.theme["red-700"]};
    }
`;

export const ButtonStart = styled(BaseButtonStart)`
    background: ${props => props.theme["green-500"]};
    color: ${props => props.theme["gray-100"]};

    &:not(:disabled):hover{
        background: ${props => props.theme["green-700"]};
    }
`;

