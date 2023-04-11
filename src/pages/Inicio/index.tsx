import CardGrid from './CardGrid/index'
import { Container, Title, Article, Subtitle, Grid } from './styled'
import ContactCard from './ContactCard'

function Inicio() {
  return (
    <Container>
      <Title>Sou Ryan de Lima, prazer!</Title>
      <Article>
        Sou um desenvolvedor Front-End, com experiencia em React.js, Vue.js, Typescript, TailwindCss entre outros. Atualmente estou cursando a faculdade de Analise e Desenvolvimento de Sistemas da Uninter, em busca de me aprimorar mais nesta area.
      </Article>
      <Subtitle>Habilidades</Subtitle>
      <Grid>
        <CardGrid name='react'/>
        <CardGrid name='react-router'/>
        <CardGrid name='vue'/>
        <CardGrid name='css-in-js'/>
        <CardGrid name='tailwind'/>
        <CardGrid name='node'/>
        <CardGrid name='mongoDB'/>
        <CardGrid name='javascript'/>
        <CardGrid name='typescript'/>
        <CardGrid name='html'/>
        <CardGrid name='css'/>
        <CardGrid name='sass'/>
      </Grid>
      <Subtitle>Contato</Subtitle>
      <Grid>
        <ContactCard contact='github'/>
        <ContactCard contact='linkdin'/>
      </Grid>
    </Container>
  )
}

export default Inicio