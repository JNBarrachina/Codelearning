const path = require("node:path");
const pc = require("picocolors");

/* Trabajando con rutas.
    - Nunca se deben utilizar las barras (/ o \) cuando trabajamos con rutas.
*/

const filePath = path.join("content", "subfolder", "test.txt");
console.log(filePath);

const extension = path.extname("image.jpg");
console.log(pc.red(extension));





