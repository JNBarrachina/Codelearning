//* Escribe una función llamada uniques que acepte un número variable de argumentos y devuelva un array que contenga todos los argumentos pero eliminando los repetidos.

const uniques = (...args) => {
    return new Set([...args])
}

console.log(uniques(2, 4, 'patata', [1, 2], [1, 2], 'patata', 4)
)

//* Escribe una función combineArrays que, usando el operador spread, reciba dos arrays como parámetros y devuelva un array con el contenido de ambos arrays: primero el segundo y después el primero.

const arrayEven = [10, 12, 2, 4]
const arrayOdd = [1, 21, 3, 9]

const combineArrays = (...arrays) => {
    const invertedArray = [...arrays[1], ...arrays[0]]
    return invertedArray
}

console.log(combineArrays(arrayEven, arrayOdd))


//* Crea una función llamada sumNumbers que acepte un número arbitrario de argumentos (de cualquier tipo) y devuelva la suma de los argumentos numéricos.

const sumNumbers = (...args) => {
    let sum = 0

    for (const element of args) {
        !isNaN(element) && (sum += element)
    }

    return sum
}

const sumNumbers2 = (...args) => {
    return args.filter(n => typeof n === "number").reduce((a, b) => a + b, 0)
}

console.log(sumNumbers2('hola', 2, 3, [10, 20, 30], { value: 300 }))