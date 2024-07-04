const express = require('express');
const { getAllSeries, getSeriesById } = require('../controllers/seriesController');

const router = express.Router();

router.get('/series', getAllSeries);
router.get('/series/:id', getSeriesById);

module. exports = router; 