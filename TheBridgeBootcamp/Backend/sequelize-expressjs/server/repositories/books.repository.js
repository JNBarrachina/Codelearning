const Book = require("../models/Book");

async function findBook(bookId) {
    return await Book.findByPk(bookId);
};

module.exports = {findBook};