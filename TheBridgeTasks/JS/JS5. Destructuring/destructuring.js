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

const sumaTotal = numbers.reduce((num1, num2) => num1 + num2);
console.log(sumaTotal(2,4,5,6,21,32,4,2));