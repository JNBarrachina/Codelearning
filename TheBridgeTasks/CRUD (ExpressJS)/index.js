const express = require("express");
const cors = require("cors");
const port = 5376;

const app = express();
app.use(cors());
app.use(express.json());

let animals = [
    {id: 1, name: "Gato", strength: 3},
    {id: 2, name: "Elefante", strength: 8},
    {id: 3, name: "Murciélago", strength: 1},
    {id: 4, name: "Perro", strength: 4},
    {id: 5, name: "Rino", strength: 10},
    {id: 6, name: "Cuca", strength: 1},
    {id: 7, name: "Serpiente", strength: 3},
    {id: 8, name: "Yog-Sothoth", strength: "?"}
]

let currentID = animals.length + 1;

app.use(express.static('public'));

app.get("/animals", (req, res) => {
    res.send(animals);
});

app.post("/animals", (req, res) => {
    const newAnimal = {id: currentID, name: req.body.name, strength: req.body.strength}
    currentID++;
    
    animals.push(newAnimal);
});

app.delete("/animals/:id", (req, res) => {
    const idToDelete = parseInt(req.params.id);
    
    const filteredAnimals = animals.filter((animal) => animal.id != idToDelete);

    if (filteredAnimals.length == animals.length){
        res.send("No se ha encontrado ningún elemento a borrar");
    }
    else{
        animals = filteredAnimals;
        res.send("Elemento borrado")
    }
});

app.listen(port, () => {
    console.log(`Escuchando...`);
});