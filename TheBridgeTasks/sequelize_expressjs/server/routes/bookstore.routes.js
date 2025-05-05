const express = require("express");
const bookstoreController = require("../controllers/bookstore.controller");
const router = express.Router();

router.get("/", bookstoreController.getGreetings);

router.get("/books", bookstoreController.getBooks);
router.get("/authors", bookstoreController.getAuthors);

router.post("/books", bookstoreController.createBook);
router.post("/authors", bookstoreController.createAuthor);

// router.put("/books/:id", bookstoreController.modifyBook);
// router.put("/authors/:id", bookstoreController.modifyAuthor);

// router.delete("/books/:id", bookstoreController.removeBook);
// router.delete("/authors/:id", bookstoreController.removeAuthor);

module.exports = router;