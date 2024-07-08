import { createContext } from 'react'

const TodoContext = createContext({
  delete: () => {},
  toggle: () => {},
})

export default TodoContext
