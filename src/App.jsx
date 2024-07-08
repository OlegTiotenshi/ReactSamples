import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './components/book_library_app/frontend/redux/store'
import TodoApp from './components/todo_app/TodoApp'
import Home from './components/Home'
import NotFound from './components/NotFound'
import MainLayout from './layouts/MainLayout'
import Courses from './components/courses_app/components/Courses'
import SingleCourse from './components/courses_app/components/SingleCourse'
import BookLibraryApp from './components/book_library_app/frontend/BookLibraryApp'
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <div className="app">
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="todo" element={<TodoApp />} />
            <Route path="courses" element={<Courses />} />
            <Route path="courses/:courseSlug" element={<SingleCourse />} />
            <Route
              path="books"
              element={
                <Provider store={store}>
                  <BookLibraryApp />
                </Provider>
              }
            />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
