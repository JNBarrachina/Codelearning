const User = require("../models/Ingredient");

const loginUser = async (req, res) => {
    res.send("Usuario logeado");
}

const addUser = async (req, res) => {
    res.send("Usuario registrado");
}

exports.loginUser = loginUser;
exports.addUser = addUser;