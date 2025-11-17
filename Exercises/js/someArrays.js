//* Escribe una función combineArrays que, usando el operador spread, reciba dos arrays como parámetros y devuelva un array con el contenido de ambos arrays: primero el segundo y después el primero.

const arrayEven = [10, 12, 2, 4]
const arrayOdd = [1, 21, 3, 9]

const combineArrays = (...arrays) => {
    const invertedArray = [...arrays[1], ...arrays[0]]
    return invertedArray
}

console.log(combineArrays(arrayEven, arrayOdd))


//* Crea una función llamada sumNumbers que acepte un número arbitrario de argumentos (de cualquier tipo) y devuelva la suma de los argumentos numéricos.