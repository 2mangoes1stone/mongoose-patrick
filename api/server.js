const express = require('express')
const bodyParser = require('body-parser')
const moviesRouter = require('./routes/movies')
const peopleRouter = require('./routes/people')

// Create server
const server = express()

// MiddleWarre
server.use(bodyParser.json())

// Add routes
server.use(moviesRouter)
server.use(peopleRouter)

// Start server
const port = 9999 
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
})