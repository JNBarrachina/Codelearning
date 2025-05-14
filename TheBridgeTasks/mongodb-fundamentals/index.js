const port = 8080;

const express = require("express");
const cors = require("cors");

const recipesRouter = require("./routes/recipes.routes");

const main = () => {
    const app = express();

    app.use(cors());
    app.use(express.json());

    app.use("/recipes", recipesRouter);

    app.listen(port, () => {
        console.log(`Escuchando...`);
    });
}

main();