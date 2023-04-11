import { useContext } from 'react'
import ThemeColorContext from '../../context/ThemeColorContext'
import { SwitchContainer} from './styled'
import Thumb from './Thumb'
import Track from './Track'

const Switch = () => {

    return(
        <Track>
            <Thumb/>
        </Track>
    )
}

export default Switch