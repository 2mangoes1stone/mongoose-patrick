const express = require('express')
const Movie = require('../models/movie')

const router = express.Router()

// Read collection
router.get('/movies', (req,res) => {
  Movie.find()
    .then((movies) => {
      res.json(movies)
    }) 
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

// Read single movie, like show action in rails
router.get('/movies/:id', (req,res) => {
  const id = req.params.id
  Movie.findById(id)
    .then((movie) => {
      res.json(movie)
    })
    .catch((error) => {
      res.status(404).json({ error: error })
    })
})

// Create movie, like show action in rails
router.post('/movies', (req,res) => {
  const newMovie = req.body
    Movie.create(newMovie)
      .then((movie) => {
        res.json(movie)
      })
      .catch((error) => {
        res.status(500).json({ error: error })
      })
})

module.exports = router