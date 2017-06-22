const express = require('express')

const server = express()

server.get('/test', (req, res) => {
  res.json({ test: true })
})

const port = 7000 
server.listen(port, () => {
  console.log(`Start on localhost:${port}`)
})