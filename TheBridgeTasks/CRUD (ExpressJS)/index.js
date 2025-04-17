const express = require("express");
const cors = require("cors");
const port = 5376;

const app = express();
app.use(cors());
app.use(express.json());

let animals = [
    {id: 1, name: "gato", strength: 3},
    {id: 2, name: "elefante", strength: 8},
    {id: 3, name: "murciélago", strength: 1},
    {id: 4, name: "perro", strength: 4},
    {id: 5, name: "rino", strength: 10},
    {id: 6, name: "cuca", strength: 1},
    {id: 7, name: "serpiente", strength: 3},
    {id: 8, name: "yog-sothoth", strength: "?"}
]

let currentID = animals.length + 1;

app.use(express.static('public'));

app.get("/animals", (req, res) => {
    res.send(animals);
});

app.post("/animals", (req, res) => {
    let frase;

    if (animals.find((animal) => animal.name == req.body.name.toLowerCase())){
        console.log("El animal ya existe");
        
        frase = "El animal ya existe";
        return;
    }
    else{
        const newAnimal = {id: currentID, name: req.body.name.toLowerCase(), strength: req.body.strength}
        currentID++;
    
        animals.push(newAnimal);

        frase = "El animal no existe";
    }
    res.send(frase);
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

app.put("/animals/:id", (req, res) => {
    const idToPut = parseInt(req.params.id);
    const newAnimalData = req.body;
    
    const indexAnimal = animals.findIndex((animal) => animal.id == idToPut);

    if (indexAnimal >= 0){
        animals[indexAnimal].name = newAnimalData.name.toLowerCase();
        animals[indexAnimal].strength = newAnimalData.strength;
    }
    else{
        res.send("No ha sido posible modificar el animal seleccionado");
    }
});


app.listen(port, () => {
    console.log(`Escuchando...`);
});
