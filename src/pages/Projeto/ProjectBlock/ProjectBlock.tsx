import { Container, Thumb, ProjectData, Title, Description } from './styled'

interface ProjectBlock {
  name?: string,
  description?: string,
  img?: React.ReactNode,
}

function ProjectBlock(props: ProjectBlock) {
  const titleProject = props.name ? props.name : 'Projeto em Andamento'
  const descriptionProject = props.description ? props.description : 'Em breve...'

  return (
    <Container>
        <Thumb>
          <img/>
        </Thumb>
        <ProjectData>
          <Title>{titleProject}</Title>
          <Description>{descriptionProject}</Description>
        </ProjectData>
    </Container>
  )
}


export default ProjectBlock