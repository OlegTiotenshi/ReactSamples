import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/about">About</NavLink>
      <NavLink to="/todo">Todo</NavLink>
    </nav>
  )
}

export default Menu
