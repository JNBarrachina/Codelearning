const fs = require("node:fs");

const stats = fs.statSync("test.txt");
const test = fs.readFileSync("test.txt", "utf-8"); //Forma síncrona de leer archivos.

fs.readFile("test2.txt", "utf-8", (err, data) => {
    if (err) throw err;
    console.log(data);
}); // Asincronía para la lectura del archivo mediante callback.

setTimeout(() => {
    console.log("Temporizador bloqueante");
}, 1000);

console.log(
    stats.isFile(),
    stats.size,
    test
)

console.log("Ejecutando otras cosas...");

