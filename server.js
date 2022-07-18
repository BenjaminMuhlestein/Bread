// DEPENDENCIES
const express = require('express')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use('/places', require('./controllers/places'))
// ROUTES
app.get('/', (req, res) => {
  res.render('home')
})

// LISTEN
app.listen(process.env.PORT)











