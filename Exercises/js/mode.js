//* Prepara un programa que construya una matriz de veinte números aleatorios entre 0 y 10. Una vez construida dicha matriz, el programa debe calcular cual es la moda. Para obtener un número aleatorio entre 0 y 10 puedes utilizar el siguiente código: Math.floor(Math.random() * 10);


const randomArrayBuilder = () => {
    const randomArray = [];

    for (let index = 0; index < 20; index++) {
        const num = parseInt(Math.random() * 10)
        randomArray.push(num)
    }

    return randomArray
}

const findMode = () => {
    const randomArray = randomArrayBuilder();
    console.log(randomArray)

    const numsCount = {}

    for (let index = 0; index < randomArray.length; index++) {

        if (numsCount[randomArray[index]]) {
            numsCount[randomArray[index]] += 1
        }
        else {
            const newInt = randomArray[index]
            numsCount[newInt] = 1;
        }
    }

    console.log(numsCount)

    let modeValue = 0;
    let modeNums = [];

    Object.entries(numsCount).forEach(([key, value]) => {
        if (value > modeValue) {
            modeValue = value;

            modeNums = [];
            modeNums.push(key)
        }
        else if (value === modeValue) {
            modeNums.push[key]
        }
    });


    console.log(`Los números moda son ${modeNums}`)
}

findMode()

