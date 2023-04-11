import { CardIconContainer } from "./styled"
import { SiPerl, SiGithub, SiLinkedin } from 'react-icons/si'

interface Props {
    children?: React.ReactNode
    contact: string
}

const Icon = (props: Props) => {
    const ComponentIcon = (contact: string) => {
        switch(contact){
            case 'github':
                return <SiGithub/>
            case 'linkdin':
                return <SiLinkedin/>
            default:
                return <SiPerl/>
        }
    } 

    return(
        <CardIconContainer>
            {ComponentIcon(props.contact)}
        </CardIconContainer>
    )
}


export default Icon