import styled from "styled-components";
import { Title as TitleModel } from '../Inicio/styled'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3rem 2rem;
    background-color: ${props => props.theme.background};
    color: black;
`;

export const Title = styled(TitleModel)`

`;

export const Gallery = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 2rem 8rem;
    max-width: 70vw;
    margin-left: 4rem;
`;