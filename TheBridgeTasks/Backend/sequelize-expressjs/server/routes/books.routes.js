const express = require("express");
const booksController = require("../controllers/books.controller");
const router = express.Router();

router.get("/", booksController.getBooks);
router.post("/", booksController.createBook);

// router.put("/books/:id", bookstoreController.modifyBook);
// router.delete("/books/:id", bookstoreController.removeBook);

module.exports = router;