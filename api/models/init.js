const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost/testing')
mongoose.Promise = Promise