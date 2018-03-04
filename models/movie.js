const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const movieSchema = require('./movie.json');

const MovieSchema = new Schema(movieSchema.properties);
const Movie = mongoose.model('Movie', MovieSchema);

module.exports = Movie;