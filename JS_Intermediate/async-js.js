//? ASYNCHRONOUS JS

//* PROMISES
const intPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const data = Math.floor(Math.random() * 100)

        return (data >= 50 ? resolve("Número igual o mayor de 50") : reject("Número menor de 50"))
    }, 2000)
}) // Declaración directa de una promesa


//Llamada directa a la promesa
intPromise
    .then(result => {
        console.log(result)
    })
    .catch(error => {
        console.log(error)
    });


//* ASYNC-AWAIT

async function checkNumber() {
    console.log("Chequendo número aleatorio...")

    try {
        const resultado = await intPromise
        console.log("Resultado: ", resultado)
    } catch (error) {
        console.log("Error: ", error)
    }

    console.log("Chequeo completado")
}

checkNumber()