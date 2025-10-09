import connectdb from "../dbconnect.js";
const db = await connectdb();

export class CityModel {
    static async findAll() {
        const cities = db.query("SELECT * FROM cities");
        return cities;
    }

    static newCity(name, country) {
        

    }

    static async updateCity(id, name, country) {
        const updateCity = await db.query(
            "UPDATE cities SET name = ?, country = ? WHERE id = ?",
            [name, country, id]
        )
        return updateCity;

        
    }

    static deleteCity(id) {
        const deleteCity = async () => {
        try {
            const [rows] = await db.query(
                "DELETE FROM cities WHERE id = ?",
                [id]
            );
            return rows;
        } catch (error) {
            throw error;
        }
        }
    }
}