import connectdb from "../dbconnect.js";

const db = await connectdb();

export const getCities = (req, res) => {
    db.query("SELECT * FROM cities", (err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

export const addCity = (req, res) => {
    let newCity = req.body;
    let sqlPost =  `INSERT INTO cities (name, country) values ("${newCity.name}", "${newCity.country}");`;

    db.query(sqlPost, (err, result) => {
        if (err) throw err;
        res.send("Ciudad añadida");
    });
}

export const updateCity = (req, res) => {
    const idToPut = parseInt(req.params.id);
    const newCityData = req.body;
        
    let sqlPut = `UPDATE cities SET city = "${newCityData.city}", country = "${newCityData.country}" WHERE id = ${idToPut}`;

    db.query(sqlPut, (err, result) => {
        if (err) throw err;
        res.sendStatus(200);
    });
}

export const deleteCity = (req, res) => {
    let removedCity = req.params.id;

    let checkCity = `SELECT * FROM cities WHERE (id) = ${removedCity}`;
    let sqlDelete =  `DELETE FROM cities WHERE (id) = ("${removedCity}");`

    db.query(checkCity, (err, result) => {
        if (err) throw err;

        if (result.length == 0){
            res.send("No existe ciudad con ese id");
        }
        else{
            connectdb.query(sqlDelete, (err, result) => {
                if (err) throw err;
                res.send("Ciudad eliminada");
            });
        }
    });
}

