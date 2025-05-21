const {Ingredient} = require("../models/Ingredient");

const getIngredients = async (req, res) => {
    const foundedIngredient = await Ingredient.find({userId: req.body.id});
    res.send(foundedIngredient);
}

const addIngredient = async (req, res) => {
    try {
        const newIngredient = new Ingredient({...req.body, userId: req.user._id});
        await newIngredient.save();
        res.send(newIngredient);
    } catch (error) {
        res.status(500).send("Hubo un error")
    }
}


const updateIngredient = async (req, res) => {
    const updatedIngredient = await Ingredient.updateOne({name: req.body.name}, {quantity: req.body.quantity})
    res.send(updatedIngredient);
}


const removeIngredient = async (req, res) => {
    res.send("Endpoint de creación de recetas");
}

module.exports = {getIngredients, addIngredient, updateIngredient, removeIngredient};
