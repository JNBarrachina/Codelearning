const express = require("express");
const recipesController = require("../controllers/ingredients.controller")
const router = express.Router();

router.get("/", recipesController.getRecipes);

module.exports = router;