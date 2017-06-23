const mongoose = require('mongoose')
require('./init')

const movieSchema = mongoose.Schema({
  title: String,
  description: String,
  yearReleased: Number
})

const Movie = mongoose.model('Movie', movieSchema)

module.exports = Movie