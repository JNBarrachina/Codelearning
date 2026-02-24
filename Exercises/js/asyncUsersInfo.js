// EJERCICIO 1

const obtenerInformaciónUsuario = (userId) => {

    let randomDelay = Math.round(Math.random() * 2500) + 500;

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            userId % 2 === 0 ? resolve({ id: userId, name: "Usuario Par", type: "Regular" }) : reject(new Error("Error: usuario impar no permitido"))
        }, randomDelay);
    })
}

// obtenerInformaciónUsuario(3).then(console.log)


// EJERCICIO 2
let randomDelay = () => { return Math.round(Math.random() * 2500) + 500 }
let randomProbability = () => { return Math.round(Math.random() * 100) }

const obtenerInfoUsuarios = (id) => {
    const rd = randomDelay()
    const rp = randomProbability()

    console.log(`User info delay: ${rd}; failureProbability: ${rp}`)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (rp > 25) ? resolve({ id: id, name: "Usuario 1" }) : reject(new Error("Error: fallo en la petición de info de usuario"))
        }, rd);
    })
}

const obtenerInfoPosts = (id) => {
    const rd = randomDelay()
    const rp = randomProbability()

    console.log(`User posts delay: ${rd}; failureProbability: ${rp}`)

    return new Promise((resolve, reject) => {
        setTimeout(() => {
            (rp > 25) ? resolve([
                { id: 1, titulo: 'Post 1', contenido: 'Lorem ipsum dolor sit amet' },
                { id: 2, titulo: 'Post 2', contenido: 'consectetur adipisicing elit.' }
            ]) : reject(new Error("Error: fallo en la petición de posts de usuario"))
        }, rd);
    })
}

const obtenerInfoCompleta = (id) => {
    Promise.all([obtenerInfoUsuarios(id), obtenerInfoPosts(id)])
        .then((values) => { console.log(values) })
        .catch((error) => (console.log(error)))
}

obtenerInfoCompleta(1)



