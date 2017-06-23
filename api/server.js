const express = require('express')
const bodyParser = require('body-parser')
const moviesRouter = require('./routes/movies')

// Create server
const server = express()

// MiddleWarre
server.use(bodyParser.json())

// Add routes
server.use(moviesRouter)

// Start server
const port = 9999 
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
})