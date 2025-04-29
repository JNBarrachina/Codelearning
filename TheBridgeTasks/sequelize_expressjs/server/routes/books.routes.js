const express = require("express");
const booksController = require("../controllers/book.controller");
const router = express.Router();

router.get("/", booksController.getBooks);
router.post("/", booksController.createBook);
router.put("/:id", booksController.createBook);
router.delete("/:id", booksController.createBook);

module.exports = router;