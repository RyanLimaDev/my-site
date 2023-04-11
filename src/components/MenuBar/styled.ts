import styled from "styled-components"

const Container = styled.div`
    min-height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${props => props.theme.surface};
    border-right: 1px solid ${props => props.theme.outlineVariant};
`

const MenuNavigation = styled.div`
    display: flex;
    flex-direction: column;
    position: relative;
    align-items: center;
    padding: 1rem 2rem;
    gap: 1.5rem;

    & .link-menu{
        width: 15vw;
        color: ${props => props.theme.onSurface};
        padding: 1rem 0rem;
        text-align: center;
        text-decoration: none;
        font-size: 1.5rem;
        font-weight: bold;
        border-radius: 5px;
        cursor: pointer;

        &:hover{
            color: ${props => props.theme.onSecondary};
            background-color: ${props => props.theme.secondary};
            border-radius: 5px;
            transition-duration: 0.2s;
        }
    }

    &::before {
        content: '';
        width: 15vw;
        height: 1px;
        background-color: ${props => props.theme.outlineVariant};
        position: absolute;
        top: 0;
    }

`

const Profile = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 2rem;


    & .MenuBar_Avatar{
        background-color: gray;
        border-radius: 50%;
        border: 2px solid ${props => props.theme.outlineVariant} ;
        width: 7rem;
        height: 7rem;
        margin-bottom: 0.5rem;
        overflow: hidden;

    }

    & .avatar-img {
        width: 100%;
        height: 100%;
    }
`

const Username = styled.span`
    font-size: 2rem;
    white-space: nowrap;
    text-align: center;
    color: ${props => props.theme.onSurface};
`

export { Container, MenuNavigation, Profile, Username}