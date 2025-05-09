const port = 3000;

const express = require("express");
const cors = require("cors");
const db = require("./db")

const booksRouter = require("./routes/books.routes");
const membersRouter = require("./routes/members.routes");
const loansRouter = require("./routes/loans.routes");

const main = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/books", booksRouter);
  app.use("/members", membersRouter);
  app.use("/loans", loansRouter);

  app.get("/", (req, res) => {
    res.send("Hola");
  })

  app.use(express.static('../client'));

  db.sequelize.sync().then(() => {
    console.log("Base de datos sincronizada correctamente.")
  })

  app.listen(port, () => {
    console.log(`Escuchando...`);
  });
}

main();


