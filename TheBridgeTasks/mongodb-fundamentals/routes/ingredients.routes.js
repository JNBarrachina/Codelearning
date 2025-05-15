const express = require("express");
const ingredientsController = require("../controllers/ingredients.controller")
const router = express.Router();

router.get("/", ingredientsController.getIngredients);
router.post("/", ingredientsController.addIngredient);
router.put("/", ingredientsController.updateIngredient);
router.delete("/", ingredientsController.removeIngredient);

module.exports = router;