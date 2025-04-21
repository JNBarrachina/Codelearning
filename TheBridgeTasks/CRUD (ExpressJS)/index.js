const express = require("express");
const cors = require("cors");
const port = 5376;

const app = express();
app.use(cors());
app.use(express.json());

let animals = [
    {id: 1, name: "gato", strength: 3, img: "https://random.dog/c3b3b40e-5aaa-4397-8778-b9cb83a5e285.jpg"},
    {id: 2, name: "elefante", strength: 8, img: "https://random.dog/8f04ddb3-2b72-4bd1-8c02-c5ab49ac7292.jpg"},
    {id: 3, name: "murciélago", strength: 1, img: "https://random.dog/0e198464-e755-43bb-a2f8-9db136507f38.JPG"},
    {id: 4, name: "perro", strength: 4, img: "https://random.dog/e388f78f-1211-4d1d-9aeb-19e1ca957136.jpg"},
    {id: 5, name: "rino", strength: 10, img: "https://random.dog/ffa35fd1-fbfd-41a6-a7cd-99f9b8057ceb.jpg"},
    {id: 6, name: "cuca", strength: 1, img: "https://random.dog/c8463589-3062-4278-8174-ded5f1b508fa.jpeg"},
    {id: 7, name: "serpiente", strength: 3, img: "https://random.dog/237e527f-df94-48a4-89b1-2e2f7d844627.gif"},
    {id: 8, name: "yog-sothoth", strength: "?", img: "https://random.dog/b22eace4-3f04-4228-a078-9d1c10042eaf.jpg"}
]

let currentID = animals.length + 1;

app.use(express.static('public'));

app.get("/animals", (req, res) => {
    res.send(animals);
});

app.post("/animals", (req, res) => {

    if (animals.find((animal) => animal.name == req.body.name.toLowerCase())){
        console.log("El animal ya existe");
        return;
    }
    else{
        let randomAnimalImg;
        takeRandomImg(randomAnimalImg);;
        console.log(randomAnimalImg)
        
        const newAnimal = {id: currentID, name: req.body.name.toLowerCase(), strength: req.body.strength, img: randomAnimalImg};
        currentID++;
    
        animals.push(newAnimal);

    }

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

function takeRandomImg(randomAnimalImg){
    return fetch("https://random.dog/woof.json?ref=public_apis&utm_medium=website")
    .then((response) => response.json())
    .then((data) => {
        randomAnimalImg = data.url;
        return randomAnimalImg;
    }) 

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}
