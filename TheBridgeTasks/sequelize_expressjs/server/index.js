const express = require("express");
const app = express();
const port = 3000;

const cors = require("cors");
app.use(cors());
app.use(express.json());

const { Sequelize, DataTypes } = require('sequelize');
const mysql = require("mysql2");

const sequelize = new Sequelize('testnodejs', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
});

async function dbconnect(){
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

dbconnect();

const User = sequelize.define(
    'Users',
    {
      // Model attributes are defined here
      firstName: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      lastName: {
        type: DataTypes.STRING,
        // allowNull defaults to true
      },
    },
    {
      // Other model options go here
    },
);

User.sync();

  // `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true


app.get("/", (req, res) => {
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Escuchando...`);
});



