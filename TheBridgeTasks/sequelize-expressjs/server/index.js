const port = 3000;

const express = require("express");
const cors = require("cors");
const db = require("./db")

const booksRouter = require("./routes/books.routes");
const loansRouter = require("./routes/loans.routes");
const usersRouter = require("./routes/users.routes");

const {authMiddleware} = require("./middlewares/auth");

const main = () => {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use("/books", booksRouter);
  app.use("/loans", authMiddleware, loansRouter);
  app.use("/users", usersRouter);

  app.use(express.static('../client'));

  db.sequelize.sync({alter: true}).then(() => {
    console.log("Base de datos sincronizada correctamente.")
  })

  app.listen(port, () => {
    console.log(`Escuchando...`);
  });
}

main();

/* 1. Utilizamos un middleware que se sitúa entre la ruta y el controller, y que tiene como objetivo identificar al usuario que realiza una request al endpoint que queremos proteger.

2. Utilizamos /login, donde el usuario tendrá que introducir sus credenciales.

3. Tanto el username como su password se envían a través del body de la request.

4. Al crear un nuevo usuario, la contraseña se hashea mediante bcrypt y se vincula al registro del nuevo usuario en la BD.

5. Utilizamos un token para identificar al usuario antes de darle acceso a los endpoints que hayamos cubierto mediante un middleware.

6. Es un estándar abierto basado en JSON para la creación de tokens de acceso que permiten la propagación de identidad y privilegios. Utilizamos el método sign para crear un token para el usuario, y el método verify para verificar ese toquen cuando nos llegue desde el cliente a través de una request que quiera acceder a nuestros endpoints protegidos.

*/
