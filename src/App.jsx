import { BrowserRouter, Route, Routes } from 'react-router-dom'
import TodoApp from './todo_app/TodoApp'
import Home from './components/Home'
import About from './components/About'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="todo" element={<TodoApp />} />
            <Route path="about" element={<About />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
