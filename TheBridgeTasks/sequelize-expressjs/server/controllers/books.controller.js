const Book = require("../models/Book");

const getBooks = async (req, res) => {
    const bookList = await bookModel.findAll();
    res.send(bookList);
}

const createBook = async (req, res) => {
    const newBook = req.body;
    const createdBook = await Book.create({
        title: newBook.title, 
        author: newBook.author, 
        publisher: newBook.publisher, 
        publication_year: newBook.publication_year, 
        isbn: newBook.isbn
    });

    res.send(`Libro creado con id: ${createdBook.id}`);
}


exports.getBooks = getBooks;
exports.createBook = createBook;
