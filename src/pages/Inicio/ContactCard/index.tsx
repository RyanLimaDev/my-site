import { CardName,CardText,Container,Card } from './styled'
import Icon from './Icon'
import LinkFilter from '../../../routes/Redirect/LinkFilter'

interface Props {
    children?: React.ReactNode,
    contact: string,
}

export default function ContactCard (props: Props) {
    const name = (contact: string) => {
        switch(contact){
            case 'github':
                return 'Github'
            case 'linkdin':
                return 'Linkdin'
            default:
                return 'NoName'
        }
    };

    const text = (contact: string) => {
        switch(contact){
            case 'github':
                return '@RyanLimaDev'
            case 'linkdin':
                return '@RyanLima'
            default:
                return 'NoText'
        }
    };

    return(
        <Container>
            <a href={LinkFilter(props.contact)}>
                <Card>
                    <Icon contact={props.contact}/>
                    <CardName>{name(props.contact)}</CardName>
                    <CardText>{text(props.contact)}</CardText>
                </Card>
            </a>
        </Container>
    )
}