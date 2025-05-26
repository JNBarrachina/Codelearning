import express, { json } from "express";
import cors from "cors";
import { citiesRouter } from "./routes/cities.routes.js";
import connectdb from "./dbconnect.js";

const PORT = process.env.PORT ?? 3000

const app = express();
app.use(cors());
app.use(json());
app.use("/cities", citiesRouter);

app.listen(PORT, () => {
    console.log(`Escuchando...`);
});



