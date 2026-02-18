//? REGULAR ESPRESSIONS

//* test: detección de expresiones regulares
const regex = /abc/

const text = "El abecedario comienza por abc"
console.log(regex.test(text)) //true

const regexNum = /\d/
const text2 = "Tengo 5 años"
console.log(regexNum.test(text2)) //true


//* replace: sustitución mediante expresiones regulares
const regexReplace = /Javascript/
console.log("Hola Javascript".replace(regexReplace, "JS"))

const regexReplaceAll = /\d/g //Modificador + flag global
const text3 = "Mis números favoritos son: el 8, el 16, el 2 y el 33"
console.log(text3.replace(regexReplaceAll, "[número]"))


//* exec: retorna detalles de la coincidencia
while ((match = regexReplaceAll.exec(text3)) !== null) {
    console.log(match)
} //Información de las coincidencias (necesita un bucle para mostrarlas todas)