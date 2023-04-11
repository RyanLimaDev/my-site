
import {Container, Title, Gallery} from './styled'
import ProjectBlock from './ProjectBlock/ProjectBlock'

function Projeto() {
  return (
    <Container>
        <Title>Projetos</Title>
        <Gallery>
            <ProjectBlock 
            name='Twitter Clone'
            description='Um clone da UI do twitter utilizando React + Typescript + TailwindCSS'
            />
            <ProjectBlock/>
            <ProjectBlock/>
            <ProjectBlock/>
            <ProjectBlock/>
            <ProjectBlock/>
        </Gallery>
    </Container>
  )
}

export default Projeto