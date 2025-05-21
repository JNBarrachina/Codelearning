const express = require("express");
const app = express();
const PORT = process.env.PORT ?? 3000 //Using environment variable

const cors = require("cors");
app.use(cors());

const userNames = ["Juan", "Joan", "Vicente", "David", "Jesús", "José", "Paco"];
const userData = [
    {name: "ye", email: "ye@ye.es"},
    {name: "ya", email: "ya@ya.com"}
]

app.get("/:newUser", (req, res) => {
    const newUser = (req.params.newUser).split("+");

    console.log(newUser);

    const newUserName = newUser[0]
    const newUserEmail = newUser[1]
    const newUserObject = {
        name: newUserName,
        email: newUserEmail
    }

    userNames.push(newUserName);
    userData.push(newUserObject);
    console.log(userNames);
    console.log(userData);

    const userMessage = `Nuevo usuario añadido: ${newUserName}; Email: ${newUserEmail}`;

    res.send(userMessage);
});

app.get("/names", (req, res) => {
    console.log("FETCH ACTIVADO")

    res.send(userNames);
});

app.get("/users", (req, res) => {
    console.log("FETCH ACTIVADO")

    res.send(userData);
});


app.listen(PORT, () => {
    console.log(`Escuchando...`);
});