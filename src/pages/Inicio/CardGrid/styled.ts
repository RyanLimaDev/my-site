import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 5rem;
    padding: 2rem 1rem;
    background-color: ${props => props.theme.surface};
    border: 1px solid ${props => props.theme.outlineVariant};
    border-radius: 10px;

    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition-duration: 0.2s;
    }

`
