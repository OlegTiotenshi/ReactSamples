import { BrowserRouter } from 'react-router-dom'
import TodoApp from './todo_app/TodoApp'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <TodoApp />
      </div>
    </BrowserRouter>
  )
}

export default App
