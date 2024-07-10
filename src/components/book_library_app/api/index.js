const express = require('express')
const cors = require('cors')
const booksData = require('../data/book.json')

const app = express()

app.use(cors())

function getRandomBook() {
  const randomIndex = Math.floor(Math.random() * booksData.length)
  const randomBook = booksData[randomIndex]
  return randomBook
}

app.get('/random-book', (_, res) => {
  res.json(getRandomBook())
})

app.get('/random-book-delayed', (_, res) => {
  setTimeout(() => {
    res.json(getRandomBook())
  }, 2000)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})
