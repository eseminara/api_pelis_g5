const express = require('express');
const { getAllMovies, getMovieById } = require('../controllers/movieController');

const router = express.Router();

router.get('/movies', getAllMovies);
router.get('/movies/:id', getMovieById);

module.exports = router;