import BookList from './components/BookList/BookList'
import BookForm from './components/BookForm/BookForm'
import Filter from './components/Filter/Filter'

const BookLibraryApp = () => {
  return (
    <>
      <header className="app-header">
        <h1>Book Library App</h1>
      </header>
      <main className="app-main">
        <div className="app-left-column">
          <BookForm />
        </div>
        <div className="app-right-column">
          <Filter />
          <BookList />
        </div>
      </main>
    </>
  )
}

export default BookLibraryApp
