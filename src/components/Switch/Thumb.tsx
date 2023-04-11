import { ThumbContainer } from "./styled"
import { ThemeDark, ThemeLight } from './../../themes/index'
import { useContext } from 'react'
import ThemeColorContext from '../../context/ThemeColorContext'

const Thumb = () => {
    const {isDarkTheme} = useContext(ThemeColorContext)

    const colorState = isDarkTheme ? ThemeDark.onPrimary : ThemeLight.outline
    

    return(
        <ThumbContainer color={colorState}/>
    )
}

export default Thumb