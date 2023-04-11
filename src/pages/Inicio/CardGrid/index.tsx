import { Container, IconName } from "./styled"
import Icon from "./Icon"
import CardName from "./CardName"

interface Props {
    children?: React.ReactNode
    name: string
}

const CardGrid = (props: Props) => {
    return(
        <Container>
            <Icon name={props.name}/>
            <CardName name={props.name}/>
        </Container>
    )
};

export default CardGrid