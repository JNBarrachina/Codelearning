const estudiante = {
    nombre: 'Ana',
    edad: 20,
    ciudad: 'Madrid',
    calificaciones: {
      matematicas: 85,
      historia: 90,
      ingles: 75,
    },
  };

  const copiaEstudiante = {...estudiante};
  console.log("Copia de estudiante: ", copiaEstudiante);

  const {nombre, edad} = estudiante;
  console.log("El estudiante se llama: " + nombre + ", y tiene: " + edad + " años.")

  console.log(copiaEstudiante.ciudad);
  copiaEstudiante.ciudad = "Barcelona";
  console.log(copiaEstudiante.ciudad);


  const newSubjects = {
    geografia: 50,
    gimnasia: 10,
    fisica: 100,
  }

  const newCal = {...copiaEstudiante.calificaciones, ...newSubjects};
  copiaEstudiante.calificaciones = newCal
  console.log("Estas son tus calificaciones: ", copiaEstudiante.calificaciones)


function sumAllNumbers(...numbers){
  let sum = 0;

  for (let n=0; n<numbers.length - 1; n++){
    sum += numbers[n];
  }

  return(sum);
}

console.log(sumAllNumbers(2,4,5,6,21,32,4,2));

// const sumaTotal = numbers.reduce((num1, num2) => num1 + num2);
// console.log(sumaTotal(2,4,5,6,21,32,4,2));


//* Mergear dos pokemon.

const pikachu = {
  nombre: "Pikachu",
  type: "electric",
  ability: {
  "primary": "Static",
  "hidden": "Lightning rod"
  },
  stats: {
  hp: 35,
  attack: 55,
  deffense: 40,
  speed: 90
  },
  moves: [
  "Quick Attack", "Volt Tackle", "Iron Tail", "Thunderbolt"
  ],
  }

  const pokemon = {
    name: "Bulbasaur",
    type: "grass",
    ability: {
    "primary": "Overgrow",
    "hidden": "Chlorophyll"
    },
    stats: {
    hp: 45,
    attack: 49,
    deffense: 59,
    speed: 45
  },
  moves: [
    "Growl", "Tackle", "Vine Whip", "Razor Leaf"
  ]
}

const mergePokemon = {...pikachu, ...pokemon};
console.log(mergePokemon);


//* Combinar dos arrays.

const lista1 = [1, "de", true, 23];
const lista2 = ["Valencia", "Madrid", "Barcelona", "Alicante"];
const lista3 = ["hola", false];

function combineTwoArrays(a, b){
    const combiArrays = [...a, ...b];
    return combiArrays;
}

console.log(combineTwoArrays(lista1, lista2));


//* Combinar n arrays.

// function combineAll(...arrays){
//   const combineAllArrays = [];

//   for (i=0; i<=arrays.length - 1; i++){
//     arrays[i].forEach(element => {combineAllArrays.push(element);
//     });
//   }

//   return combineAllArrays;
// }

function combineAll(...arrays){
  const combineAllArrays = [];

  for (i=0; i<=arrays.length - 1; i++){
    combineAllArrays.push(...arrays[i])
  }

  return combineAllArrays;
}

console.log(combineAll(lista1, lista2, lista3));
