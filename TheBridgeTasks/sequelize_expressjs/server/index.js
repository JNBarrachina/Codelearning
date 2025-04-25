const port = 3000;

const express = require("express");
const cors = require("cors");

const booksRouter = require("./routes/books.routes");
const Book = require("./models/Book");

const main = () => {
  const app = express();
  app.use(cors());
  app.use(express.json());

  Book.sync();

  app.use("/books", booksRouter);

  app.listen(port, () => {
    console.log(`Escuchando...`);
  });
}

main();


