const Series = require('../models/Series');

// Obtener todas las series
const getAllSeries = async (req, res) => {
  try {
    const series = await Series.findAll();
    res.json(series);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Obtener una serie por ID
const getSeriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const series = await Series.findByPk(id);
    if (series) {
      res.json(series);
    } else {
      res.status(404).json({ error: "Serie no encontrada" });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getAllSeries,
  getSeriesById,
};
