const express = require("express");
const cors = require("cors");
const port = 5376;

const app = express();
app.use(cors());
app.use(express.json());

const animals = [
    {name: "Gato", strength: 3},
    {name: "Elefante", strength: 8},
    {name: "Murciélago", strength: 1}
]

app.get("/animals", (req, res) => {
    res.send(animals);
});

app.post("/animals", (req, res) => {
    animals.push(req.body);
});

app.listen(port, () => {
    console.log(`Escuchando...`);
});