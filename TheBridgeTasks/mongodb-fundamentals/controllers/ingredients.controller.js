const Ingredient = require("../models/Ingredient");

const getIngredients = async (req, res) => {
    res.send("Endpoint de lectura de recetas");
}

const addIngredient = async (req, res) => {
    res.send("Endpoint de creación de recetas");
}

const updateIngredient = async (req, res) => {
    res.send("Endpoint de creación de recetas");
}

const removeIngredient = async (req, res) => {
    res.send("Endpoint de creación de recetas");
}


exports.getRecipe = getRecipe;
exports.createRecipe = createRecipe;
