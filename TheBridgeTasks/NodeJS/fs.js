const fs = require("node:fs");

const stats = fs.statSync("test.txt");
const test = fs.readFileSync("test.txt", "utf-8"); //Forma síncrona de leer archivos.
const test2 = fs.readFileSync("test2.txt", "utf-8");

console.log(
    stats.isFile(),
    stats.size,
    test
)

console.log("Ejecutando otras cosas...");

console.log(test2);
