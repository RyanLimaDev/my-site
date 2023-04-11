import styled from "styled-components"

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-grow: 3;
    padding: 3rem 2rem;
    background-color: ${props => props.theme.background};
    color: ${props => props.theme.onBackground};
    min-height: 84.8vh;
`

const Title = styled.h1`
    font-size: 4rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    padding: 0 0 2rem 0rem;
    color: ${props => props.theme.onBackground}
`;

const Subtitle = styled.h1`
    font-size: 2rem;
    text-align: center;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    font-weight: bold;
    color: ${props => props.theme.onBackground};
    margin: 4rem 0px
`;

const Article = styled.p`
    line-height: 1.5rem;
    font-size: 1rem;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`

const Grid = styled.div`
    display: flex;
    flex-direction: row;
    gap: 2rem;
    flex-wrap: wrap;
    width: 100%;
    justify-content: center;
`

export {Container, Article, Title, Subtitle, Grid}