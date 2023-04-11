
import { Link } from 'react-router-dom'

interface MenuButton {
  children?: React.ReactNode,
  type: 'inicio' | 'projeto'
}

function MenuButton(props: MenuButton) {
  const text = props.type == 'inicio' ? 'Inicio' : 'Projetos'
  const rota = props.type == 'inicio' ? '/' : 'projetos' 

  return ( 
    <Link className="link-menu" to={rota}> {text} </Link> 
  )
}

export default MenuButton
