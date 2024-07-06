const { Sequelize, DataTypes } = require("sequelize");
const db = require("../data/db");

const User = db.define(
  "User",
  {
    user_id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    username: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: false,
      unique: true,
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      field: 'created_at'
    },
  },
  {
    tableName: "users",
    timestamps: false, 
  }
);

module.exports = User;