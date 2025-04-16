const BASE_URL = "http://localhost:5376";

const mainPage = document.getElementById("mainpage");
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
    fetch(`${BASE_URL}/animals`, {
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
    getAllAnimals();
}

function getAllAnimals(){
    fetch(`${BASE_URL}/animals`)
    .then((response) => response.json())
    .then((data) => {
        animalsSection.innerHTML = "";
    
        data.forEach(animal => {
            const singleAnimal = document.createElement("button");
            singleAnimal.setAttribute("class", "animalItem");
            singleAnimal.setAttribute("id", `${animal.id}`);
            singleAnimal.addEventListener("click", ()  => confirmRemove(animal));
            singleAnimal.addEventListener("mouseover", () => changeBtnText(singleAnimal.id));
            singleAnimal.innerText = `${animal.name}: ${animal.strength} de fuerza`;

            animalsSection.append(singleAnimal);
        });

        animalsSection.style.visibility = "visible";
    }) 

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

const confirmRemove = (animal) => {
    const removeBox = document.createElement("div");
    removeBox.setAttribute("class", "removeBox");
    removeBox.setAttribute("id", "removeWindow");

    const removeMessage = document.createElement("p");
    removeMessage.innerText = `¿Quieres eliminar ${animal.name} definitivamente?`;

    const removeBtns = document.createElement("div");
    removeBtns.setAttribute("class", "removeBtnsBox");
    const removeYes = document.createElement("button");
    removeYes.addEventListener("click", () => removeAnimal(animal.id))
    removeYes.innerText = "SÍ";
    const removeNo = document.createElement("button");
    removeNo.addEventListener("click", () => closeRemoveWindow());
    removeNo.innerText = "NO";
    removeBtns.append(removeYes, removeNo);
    

    removeBox.append(removeMessage, removeBtns);
    mainPage.append(removeBox);
}

const removeAnimal = (removedAnimal) => {
    fetch(`${BASE_URL}/animals/${removedAnimal}`, {
        method: "DELETE", // or 'PUT'
        headers: {
        "Content-Type": "application/json",
        },
    })

    
    .then((res) => res.json())
    
    .catch((error) => console.error("Error:", error))
    
    .then((response) => console.log("Success:", response));

    closeRemoveWindow();
    getAllAnimals();
}

const changeBtnText = (id) => {
    const btnChangeText =  document.getElementById(`${id}`);

    const originalText = btnChangeText.innerText;
    btnChangeText.addEventListener("mouseout", () => resetBtnText(btnChangeText, originalText));

    const newBtnText = btnChangeText.innerText.split(":");
    btnChangeText.innerText = "";

    btnChangeText.innerText = `¿Eliminar ${newBtnText[0]}?`;
}

const resetBtnText = (btnChangeText, originalText) => {
    btnChangeText.innerText = `${originalText}`;
}

const closeRemoveWindow = () => {
    const removedWindow = document.getElementById("removeWindow");
    removedWindow.remove();
}