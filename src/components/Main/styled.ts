import styled from "styled-components";

const Container = styled.div`
    display: flex;
    flex-grow: 3;
    position: relative;
`;

const SwitchContainer = styled.div`
    position: absolute;
    right: 0;
    margin-top: 1rem;
    margin-right: 2rem;
`;

export { Container, SwitchContainer };