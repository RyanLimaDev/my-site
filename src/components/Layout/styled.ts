import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: collumn;
    background-color: ${props => props.theme.background};
    height: 100%;
    position: relative;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
`;

export { Container }