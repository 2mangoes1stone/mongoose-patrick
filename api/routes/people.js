const express = require('express')
const Movie = require('../models/person')

const router = express.Router()

// Read collection
router.get('/people', (req,res) => {
  Movie.find()
    .then((people) => {
      res.json(people)
    }) 
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

// Read single movie, like show action in rails
router.get('/people/:id', (req,res) => {
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
router.post('/people', (req,res) => {
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
router.put('/people/:id', (req,res) => {
  const oldMovie = Movie.findById(req.params.id)
  const updatedMovie = req.body
  oldMovie.update(updatedMovie)
    .then(() => {
      res.json(updatedMovie)
    })
    .catch((error) => {
      res.status(500).json({ error: error })
    })
})

// Delete
router.delete('/people/:id', (req,res) => {
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