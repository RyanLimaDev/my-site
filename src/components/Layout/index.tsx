import { Container } from './styled'
//import MenuBar from '../MenuBar/index'
import MenuBar from '../MenuBar/index'
import Main from '../Main/index'

const Layout = () => {
    return(
        <Container>
            <MenuBar/>
            <Main/>
        </Container>
    )
}



export default Layout