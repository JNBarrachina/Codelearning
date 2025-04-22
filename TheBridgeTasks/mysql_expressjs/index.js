const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

const mysql = require("mysql2");
const connectdb = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "testnodejs"
});

// const sql = "CREATE DATABASE testNodeJS";
// connectdb.query(sql, (err, result) => {
//     if (err) throw err;
//     console.log("Database created");
// })

// const createTable = `CREATE TABLE cities(
//     id INT NOT NULL AUTO_INCREMENT,
//     name varchar(75) NOT NULL,
//     country varchar(50),
//     PRIMARY KEY (id));`
// connectdb.query(createTable, (err, result) => {
//     if (err) throw err;
//     console.log("Database created");
//     console.log(result);
// })

app.get("/cities", (req, res) => {
    connectdb.query("SELECT * FROM cities", (err, result) => {
        if (err) throw err;
        res.send(result);
    });
});

app.post("/cities", (req, res) => {
    let newCity = req.body;
    let sqlPost =  `INSERT INTO cities (name, country) values ("${newCity.name}", "${newCity.country}");`

    connectdb.query(sqlPost, (err, result) => {
        if (err) throw err;
        console.log(result);
        res.send("Ciudad añadida");
    });
});

app.listen(port, () => {
    console.log(`Escuchando...`);
});

