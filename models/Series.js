const { Sequelize, DataTypes } = require("sequelize");
const db = require("../data/db");

const Series = db.define(
  "Series",
  {
    series_id: {
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
    seasons: {
      type: DataTypes.INTEGER,
    },
    rating: {
      type: DataTypes.DECIMAL,
    },
    created_at: {
      type: DataTypes.DATE,
    },
  },
  {
    timestamps: false,
    tableName: "series",
  }
);

module.exports = Series;
