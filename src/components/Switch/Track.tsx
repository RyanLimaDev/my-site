import { SwitchContainer } from "./styled"
import { ThemeDark, ThemeLight } from './../../themes/index'
import { useContext } from 'react'
import ThemeColorContext from '../../context/ThemeColorContext'

interface Props {
    children?: React.ReactNode
}

const Track = (props: Props) => {
    const {isDarkTheme} = useContext(ThemeColorContext)
    const colorTrack = isDarkTheme ? ThemeDark.primary : ThemeLight.surface

    return(
        <SwitchContainer color={colorTrack} darkThemeState={isDarkTheme} >
            {props.children}
        </SwitchContainer>
    )
}

export default Track