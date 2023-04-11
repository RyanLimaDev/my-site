import { Container, MenuNavigation, Profile, Username} from './styled'
import MenuButton from './MenuButton'
import Avatar from './Avatar'

function index() {
  return (
    <Container>
        <Profile>
          <Avatar/>
          <Username>Ryan Lima</Username>
        </Profile>
        <MenuNavigation>
            <MenuButton type='inicio'>
                <span>Inicio</span>
            </MenuButton>
            <MenuButton type='projeto'>
                <span>Projetos</span>
            </MenuButton>
        </MenuNavigation>
    </Container>
  )
}

export default index