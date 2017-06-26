const express = require('express')
const Movie = require('../models/movie')

const router = express.Router()

// Read collection
router.get('/movies', (req,res) => {
  Movie.find()
    .populate('cast.person')
    .populate('directors.person')
    .populate('writers.person')
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
    .populate('cast.person')
    .populate('directors.person')
    .populate('writers.person')
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

// Update/Edit
router.put('/movies/:id', (req,res) => {
  const oldMovie = Movie.findById(req.params.id)
  const updatedMovie = req.body
  oldMovie.update()
    .then(() => {
      res.json(updatedMovie)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

// Delete
router.delete('/movies/:id', (req,res) => {
  const movie = Movie.findById(req.params.id)
  movie.remove()
    .then(() => {
      res.send('Movie Deleted')
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

module.exports = router