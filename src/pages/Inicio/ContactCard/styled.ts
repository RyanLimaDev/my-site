import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 1rem;
`

export const Card = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &:hover{
        cursor: pointer;
        transform: scale(1.2);
        transition-duration: 0.2s;
    }
`

export const CardIconContainer = styled.div`
    padding: 1rem;
    border-radius: 50%;
    background-color: ${props => props.theme.surface};

    & svg{
        font-size: 2.5rem;
        fill: ${props => props.theme.primary};
    }
`

export const CardName = styled.h3`
    white-space: nowrap;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.onBackground};
    line-height: 1.2rem;
    margin-bottom: 0.5rem;
`

export const CardText = styled.p`
    white-space: nowrap;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    color: ${props => props.theme.onSurfaceVariant};
    line-height: 1.2rem;
`