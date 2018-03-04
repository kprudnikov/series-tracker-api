const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
require('./db');

const { movieTypes } = require('./constants');

const app = express();
const logging = process.env.LOGGING;

app.use(bodyParser.json());
app.use(morgan(logging));

const Movie = require('../models/movie');
app.get('/', (req, res) => {
  const movie = new Movie({
    name: 'New name',
    type: movieTypes.movie,
    mdbId: 'test',
  });
  
  movie.save(err => {
    if(!err) {
      res.send(movie);
    } else {
      res.statusCode = 500;
      res.send(err);
    }
  })
});

module.exports = app;