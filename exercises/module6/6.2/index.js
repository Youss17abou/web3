require('dotenv').config()
const express = require("express")
const personsRoutes = require('./routes/persons')
const {errorHandler, disableCors }= require('./utils/middlewares')
const PORT = process.env.PORT || 3003
const app = express()
app.use(express.json())
const Person = require('./models/person')
const { default: mongoose } = require('mongoose')

// Connect to MongoDB
const url = process.env.MONGODB_URI

mongoose.set('strictQuery', false)
mongoose.connect(url)
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch(error => {
    console.log('error connecting to MongoDB:', error.message)
  })

app.use(express.json())
// Disable CORS so that React client can freely access this server
app.use(disableCors)

app.use('/persons', personsRoutes)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})
