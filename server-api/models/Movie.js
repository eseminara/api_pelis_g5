const { Sequelize, DataTypes } = require("sequelize");
const db = require("../data/db");


const Movie = db.define(
  "Movie",
  {
    movie_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    genre: {
      type: DataTypes.STRING(50),
    },
    release_date: {
      type: DataTypes.DATE,
    },
    rating: {
      type: DataTypes.DECIMAL(3, 2),
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "movies",
  }
);

module.exports = Movie;