import { createConnection } from "mysql2";

const connectdb = async () => {
    try {
        const connection = await createConnection({
            host: "localhost",
            user: "root",
            password: "Password123#@!",
            database: "citiesdb"
        });

        console.log("Conexión a la BD exitosa");
        return connection;
    
    } catch (error) {
        console.log(error);
        throw new Error("Error de conexión a la BD");
    }
};

//Password123#@! or root;

export default connectdb;


