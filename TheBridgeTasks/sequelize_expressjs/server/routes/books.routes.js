const express = require("express");

const router = express.Router();
const booksController = require("../controllers/books.controllers");

router.get("/", (req, res) => {
    res.send("Hola");
})

module.exports = router;