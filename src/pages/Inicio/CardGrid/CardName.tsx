import { Container } from './CardNameStyled'

interface Props {
    name: string,
    children?: React.ReactNode
}

const CardName = (props: Props) => {
    const name = (name: string) => {
        switch(name){
            case 'react':
                return 'React.js'
            case 'vue':
                return 'Vue.js'
            case 'tailwind':
                return 'Tailwind CSS'
            case 'css-in-js':
                return 'Css-in-Js'
            case 'node':
                return 'Node.js'
            case 'mongoDB':
                return 'MongoDB'
            case 'react-router':
                return 'React Router'
            case 'sass':
                return 'Sass'
            case 'html':
                return 'HTML5'
            case 'css':
                return 'CSS3'
            case 'javascript':
                return 'Javascript'
            case 'typescript':
                return 'Typescript'        
            default:
                return 'NoName'
        }
    }

    return(
        <Container>{name(props.name)}</Container>
    )
}

export default CardName