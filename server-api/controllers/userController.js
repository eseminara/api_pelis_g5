const User = require("../models/User");

const getAllUsers = async (req, res) => {
  try {
    const users = await User.findAll();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getUserById = async (req, res) => {
  try {
    const { id } = req.params; 
    const user = await User.findByPk(id); 

    if (!user) {
      res.status(404).json({ error: 'Usuario no encontrado' });
    } else {
      res.json(user);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createUser = async (req,res) => {
    try {
        const { username, email, password } = req.body;
        const newUser = await User.create({ username, email, password_hash: password });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
};