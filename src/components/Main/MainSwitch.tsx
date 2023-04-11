import Switch from "../Switch";
import { SwitchContainer } from "./styled";
import { useContext } from 'react'
import ThemeColorContext from '../../context/ThemeColorContext'

const MainSwitch = () => {
    const {isDarkTheme, setTheme} = useContext(ThemeColorContext);

    return(
        <SwitchContainer onClick={() => setTheme(!isDarkTheme)}>
            <Switch/>
        </SwitchContainer>
    )
}

export default MainSwitch