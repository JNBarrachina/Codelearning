//Importando modelos...
const bookModel = require("../models/Book")

const getBooks = async (req, res) => {
    const bookList = await bookModel.findAll();
    res.send(bookList);
}

const createBook = async (req, res) => {
    const createBook = await bookModel.create({
        title: "Fundación",
        description: "Sci-fi masterpiece",
        length: 350
    })

    res.send(`Libro creado con id: ${createBook.id}`);
}

exports.getBooks = getBooks;
exports.createBook = createBook;