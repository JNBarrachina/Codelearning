const {Ingredient} = require("../models/Ingredient");

const getIngredients = async (req, res) => {
    // #swagger.tags = ['Ingredients']

    const foundedIngredients = await Ingredient.find({userId: req.user._id});
    const userIngredients = foundedIngredients.map(ingredient => ({
        id: ingredient._id,
        name: ingredient.name, 
        quantity: ingredient.quantity
    }));

    res.send(userIngredients);
}

const addIngredient = async (req, res) => {
     // #swagger.tags = ['Ingredients']

    try {
        const newIngredient = new Ingredient({...req.body, userId: req.user._id});
        await newIngredient.save();

        res.status(201);
    } catch (error) {
        res.status(500).send("Unexpected error")
    }
}


const updateIngredient = async (req, res) => {
    // #swagger.tags = ['Ingredients']

    const updatedIngredient = await Ingredient.updateOne({name: req.body.name}, {quantity: req.body.quantity})
    res.send(updatedIngredient);
}


const removeIngredient = async (req, res) => {
    // #swagger.tags = ['Ingredients']

    res.send("Endpoint de creación de recetas");
}

module.exports = {getIngredients, addIngredient, updateIngredient, removeIngredient};
