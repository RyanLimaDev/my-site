import {Routes, Route} from 'react-router-dom'
import Inicio from '../pages/Inicio'
import Projeto from '../pages/Projeto/Projeto'

const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Inicio/>} />
            <Route path='/projetos' element={<Projeto/>} />
            <Route path='https://www.rhuanbello.com/'/>
        </Routes>
    )
}

export default MainRoutes