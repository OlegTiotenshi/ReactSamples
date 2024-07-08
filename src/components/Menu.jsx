import { NavLink } from 'react-router-dom'

const Menu = () => {
  return (
    <nav>
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/todo">Todo</NavLink>
      <NavLink to="/courses">Courses</NavLink>
    </nav>
  )
}

export default Menu
