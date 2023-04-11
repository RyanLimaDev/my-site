import { Container } from './styled'
import MainSwitch from './MainSwitch'
import MainRoutes from '../../routes/MainRoutes'

function index() {

  return(
    <Container>
      <MainSwitch/>
      <MainRoutes/>
    </Container>
    
  )
}

export default index