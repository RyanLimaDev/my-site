import styled from "styled-components"
import { ThemeDark, ThemeLight } from './../../themes/index'

interface SwitchContainerProps {
    darkThemeState: boolean,
}

export const SwitchContainer = styled.div<SwitchContainerProps>`
    height: 32px;
    width: 52px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: ${props => props.darkThemeState ? 'flex-end' : 'flex-start'};
    border-radius: 20px;
    background-color: ${props => props.color};
    border: ${props => props.darkThemeState ? `2px solid ${props.theme.primary}` : `2px solid ${ThemeLight.outline}`};
    cursor: pointer;
    transition-duration: 0.2s;
`

export const ThumbContainer = styled.div`
    border-radius: 50%;
    background-color: ${props => props.color};
    width: 24px;
    height: 24px;
    margin: 0px 1px;
`
    
