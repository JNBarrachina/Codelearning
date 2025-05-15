const express = require("express");
const recipesController = require("../controllers/recipes.controller")
const router = express.Router();

router.get("/", recipesController.getRecipes);

module.exports = router;