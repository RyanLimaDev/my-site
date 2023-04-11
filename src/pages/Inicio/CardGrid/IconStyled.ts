import styled from "styled-components"

export const Container = styled.div`
    margin-bottom: 1rem;

    & svg{
        font-size: 2.5rem;
        fill: ${props => props.theme.primary};
    }
`