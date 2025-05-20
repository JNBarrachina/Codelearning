const { text } = require("express");
const {Recipe} = require("../models/Recipe");

const {GoogleGenAI} = require("@google/genai");
const ai = new GoogleGenAI({ apiKey: "API_KEY" });

const getUserRecipes = async (req, res) => {
    res.send("La IA crea las recetas");
}

const getNewRecipes = async (req, res) => {
    const [...recipeIngredients] = req.body.ingredients;

    const response = await ai.models.generateContent({
    model: "gemini-2.0-flash",
    role: "user",
    contents:`Dame una receta con los siguientes ingredientes: ${recipeIngredients}, que contenga los siguientes campos: name, ingredientes, difficulty, cookingTime, description. La receta debe ser sintética, con un paso a paso para la descripción de la misma. No hasgas introducción y ve directamente a los datos a mostrar en los campos.`,
    responseMimeType: "application/json",
    responseSchema: {
        type: "object",
        properties: {
            name: { type: "string" },
            ingredients: { type: "string" },
            difficulty: { type: "string" },
            cookingTime: { type: "string" },
            description: { type: "string" }
        },
        propertyOrdering: ["name", "ingredients", "difficulty", "cookingTime", "description"]
    }
    });

    res.send(response,text);
}

module.exports = {getUserRecipes, getNewRecipes};