import styled from "styled-components"

export const Container = styled.div`
    width: 20rem;
    background-color: ${props => props.theme.surface};
    border: 2px solid ${props => props.theme.outlineVariant};
    border-radius: 10px;
    padding: 1rem 1rem 2rem;
`

export const Thumb = styled.div`
    background-color: ${props => props.theme.onSurface};
    height: 10rem;
    width: 20rem;
    margin-bottom: 0.5rem;
`

export const ProjectData = styled.div`
`;

export const Title = styled.h1`
    font-size: 1.5rem;
    font-weight: 500;
    line-height: 2rem;
    color: ${props => props.theme.onBackground};;
    margin-bottom: 1rem;
    max-width: 20rem;
    white-space: nowrap;
    overflow: hidden; 
    text-overflow: ellipsis; 
`;

export const Description = styled.div`
    color: ${props => props.theme.onBackground};
    line-height: 1.4rem;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical; 
`;
