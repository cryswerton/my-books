const express = require('express')
const app = express()
const PORT = process.env.PORT || 5000

const print = require('./print.js')

app.listen(PORT, () => print(`Server started on port ${PORT}`))

