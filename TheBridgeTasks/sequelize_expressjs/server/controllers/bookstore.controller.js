const bookModel = require("../models/Book");
const authorModel = require("../models/Author");

const getGreetings = async (req, res) => {
    res.send("Bienvenido.");
}

const getBooks = async (req, res) => {
    const bookList = await bookModel.findAll();
    res.send(bookList);
}

const getAuthors = async (req, res) => {
    const authorList = await authorModel.findAll();
    res.send(authorList);
}

const createBook = async (req, res) => {

    const createBook = await bookModel.create({
        title: "El tejido de la naturaleza",
        description: "Ensayo publicado en Barlin Libros",
        length: 350
    })

    res.send(`Libro creado con id: ${createBook.id}`);
}

const createAuthor = async (req, res) => {

    const createAuthor = await authorModel.create({
        name: "Carlos Ruiz Zafon",
        nationality: "SPA",
    })

    res.send(`Autor creado con id: ${createAuthor.id}`);
}

exports.getGreetings = getGreetings;

exports.getBooks = getBooks;
exports.getAuthors = getAuthors;

exports.createBook = createBook;
exports.createAuthor = createAuthor;