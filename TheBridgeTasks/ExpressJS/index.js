const express = require("express");
const app = express();
const port = 3000;

function transformName(name){
    const newName = name.toUpperCase();
    return newName;
}

app.get("/characters/:name", (req, res) => {
    res.send(`Hola, ${req.params.name}. Tu nombre tiene ${req.params.name.length}. Tu nombre en mayúscula: ${transformName(req.params.name)}. Y esto?: ${req.query.name}`);
});

app.get("/names", (req, res) => {
    res.send(`Y esto?: ${req.query.name}`);
});

app.listen(port, () => {
    console.log(`Escuchando...`);
});