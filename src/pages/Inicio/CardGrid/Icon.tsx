import { FaReact, FaCss3, FaHtml5, FaVuejs, FaNodeJs, FaSass, FaJs } from 'react-icons/fa'
import { SiStyledcomponents, SiTailwindcss, SiMongodb, SiReactrouter, SiTypescript, SiReact, SiCss3, SiHtml5, SiVuedotjs, SiNodedotjs, SiSass, SiJavascript } from 'react-icons/si'
import { MdNotInterested } from 'react-icons/md'
import { Container } from './IconStyled'

interface Props {
    name: string
}

const Icon = (props: Props) => {
    const iconFilter = (name: string) =>{
        switch(name){
            case 'react':
                return <SiReact/>
            case 'vue':
                return <SiVuedotjs/>
            case 'tailwind':
                return <SiTailwindcss/>
            case 'css-in-js':
                return <SiStyledcomponents/>
            case 'node':
                return <SiNodedotjs/>
            case 'mongoDB':
                return <SiMongodb/>
            case 'react-router':
                return <SiReactrouter/>
            case 'sass':
                return <SiSass/>
            case 'html':
                return <SiHtml5/>
            case 'css':
                return <SiCss3/>
            case 'javascript':
                return <SiJavascript/>
            case 'typescript':
                return <SiTypescript/>        
            default:
                return <MdNotInterested/>
        }
    } 


    return(
        <Container>
            {iconFilter(props.name)}
        </Container>
    )
}

export default Icon