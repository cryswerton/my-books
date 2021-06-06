const express = require('express')
const path = require('path')
const app = express()
const PORT = process.env.PORT || 5000

const books = require('./books.js')
const print = require('./print.js')

// Gets all books
app.get('/api/books', (req, res) => {
    res.json(books)
})

// Gets a Single Book
app.get('/api/books/:id', (req, res) => {
    const found = books.some(book => book.id === parseInt(req.params.id))

    if(found){
        res.json(books.filter(book => book.id === parseInt(req.params.id)))
    }else{
        res.status(400).json({msg: `No book with the id of ${req.params.id}`})
    }

})

// Set static folder
app.use(express.static(path.join(__dirname, 'public')))

app.listen(PORT, () => print(`Server started on port ${PORT}`))

