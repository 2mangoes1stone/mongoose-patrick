const express = require('express')
const bodyParser = require('body-parser')
const authMiddleare = require('./middleware/auth')
const moviesRouter = require('./routes/movies')
const peopleRouter = require('./routes/people')
const authRouter = require('./routes/auth')

// Create server
const server = express()

// MiddleWarre
server.use(bodyParser.json())
// Connect passport to express
server.use(authMiddleare.initialize)

// Add routes
server.use(moviesRouter)
server.use(peopleRouter)
server.use(authRouter)

// Start server
const port = 9999 
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
})