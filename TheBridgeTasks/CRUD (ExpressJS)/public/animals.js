
const postAnimal = document.getElementById("btnAddAnimal");
postAnimal.addEventListener("click", checkData);
const btnAnimals = document.getElementById("showAnimals");
btnAnimals.addEventListener("click", getAllAnimals);
const animalsSection = document.getElementById("animalsList");
const message = document.getElementById("infoMessage");

const animalName = document.getElementById("inputName");
const animalStrength = document.getElementById("inputStrength");


function checkData(event){
    event.preventDefault();

    if (animalName.value == "" || animalStrength.value == ""){
        alert("Introduce todos los datos");
        return;
    }
    else if (animalStrength.value < 1 || animalStrength.value > 10){
        alert("La fuerza debe ser un número entre 1 y 10");
        return;
    }
    
    const newAnimal = {
        name: animalName.value,
        strength: animalStrength.value
    }

    addAnimal(newAnimal);
}

function addAnimal(newAnimal){
    fetch("http://localhost:5376/animals", {
        method: "POST", // or 'PUT'
        body: JSON.stringify(newAnimal), // data can be `string` or {object}!
        headers: {
        "Content-Type": "application/json",
        },
    })

    
    .then((res) => res.json())
    
    .catch((error) => console.error("Error:", error))
    
    .then((response) => console.log("Success:", response));

    message.innerText = "Animal anadido correctamente";
}

function getAllAnimals(){
    fetch("http://localhost:5376/animals")
    .then((response) => response.json())
    .then((data) => {
        animalsSection.innerHTML = "";
        const animalsList = document.createElement("ul");
    
        data.forEach(animal => {
            const singleAnimal = document.createElement("li");
            singleAnimal.innerText = `${animal.name}: ${animal.strength} de fuerza`;

            animalsList.append(singleAnimal);
        });
        animalsSection.append(animalsList);
    })

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}




