const Movie = require('../models/Movie');

const getAllMovies = async (req, res) => {
    try {
        const movies = await Movie.findAll();
        res.json(movies);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// Obtener una película por ID
const getMovieById = async (req, res) => {
    try {
        const { id } = req.params;
        const movie =await Movie.findByPk(id);
        if (movie) {
            res.json(movie);
        } else {
            res.status(404).json({error: 'Película no encontrada'})
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllMovies,
    getMovieById,
};