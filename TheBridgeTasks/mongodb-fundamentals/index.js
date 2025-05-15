const port = 8080;

const express = require("express");
const cors = require("cors");

const {dbConnect} = require("./db")

const usersRouter = require("./routes/users.routes");
const ingredientsRouter = require("./routes/ingredients.routes");
const recipesRouter = require("./routes/recipes.routes");

const main = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/users", usersRouter);
    app.use("/ingredients", ingredientsRouter);
    app.use("/recipes", recipesRouter);

    dbConnect();

    app.listen(port, () => {
        console.log(`Escuchando...`);
    });
}

main();