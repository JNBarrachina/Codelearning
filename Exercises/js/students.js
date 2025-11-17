//* Tienes una estructura que contiene los alumnos matriculados en cada uno de los módulos de un ciclo de formación profesional. La estructura tiene el siguiente formato. Construye un programa que imprima los alumnos que están matriculados a la vez en asignaturas de primer y segundo curso. Con los datos visibles en el ejemplo anterior debería imprimir: 'Perico' y 'Don Pepito' Ten en cuenta que la estructura puede contener más asignaturas de primero y segundo, y no tienen por qué estar en orden.

const modulos = [
    {
        nombre: 'Sistemas informáticos',
        curso: 1,
        alumnos: ['Don Pepito', 'Perico', 'Don José']
    },
    {
        nombre: 'Programación básica',
        curso: 1,
        alumnos: ['Perico', 'María', 'Lucía']
    },
    {
        nombre: 'Desarrollo Web en entorno cliente',
        curso: 2,
        alumnos: ['Juan', 'Andrés', 'Don Pepito']
    },
    {
        nombre: 'Desarrollo Web en entorno servidor',
        curso: 2,
        alumnos: ['Ana', 'Don José']
    },
];

const firstCourseStudents = [];
const secondCourseStudents = [];

const eachCourseStudents = () => {
    modulos.forEach(modulo => {
        if (modulo.curso === 1) {
            const moduloAlumnos = modulo.alumnos;

            moduloAlumnos.forEach(alumno => {
                if (!firstCourseStudents.includes(alumno)) {
                    firstCourseStudents.push(alumno)
                }
            });
        }

        else if (modulo.curso === 2) {
            const moduloAlumnos = modulo.alumnos;

            moduloAlumnos.forEach(alumno => {
                if (!secondCourseStudents.includes(alumno)) {
                    secondCourseStudents.push(alumno)
                }
            });
        }
    });
}


const firstAndSecondCourseStudents = () => {
    eachCourseStudents();

    console.log(firstCourseStudents)
    console.log(secondCourseStudents)

    const bothCoursesStudents = [...firstCourseStudents].filter(alumno =>
        secondCourseStudents.includes(alumno)
    );

    console.log(bothCoursesStudents);
}

firstAndSecondCourseStudents()