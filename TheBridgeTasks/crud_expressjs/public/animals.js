
const BASE_URL = "http://localhost:5376";

const mainPage = document.getElementById("mainpage");
const postAnimal = document.getElementById("btnAddAnimal");
postAnimal.addEventListener("click", checkData);
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

async function addAnimal(newAnimal){
    await fetch(`${BASE_URL}/animals`, {
        method: "POST",
        body: JSON.stringify(newAnimal),
        headers: {
        "Content-Type": "application/json",
        },
    })

    message.innerText = "Animal anadido correctamente";
    getAllAnimals();
}

function getAllAnimals(){
    fetch(`${BASE_URL}/animals`)
    .then((response) => response.json())
    .then((data) => {
        animalsSection.innerHTML = "";
    
        data.forEach(animal => {
            const singleAnimalBox = document.createElement("article");
            singleAnimalBox.setAttribute("class", "singleAnimalBox")

            const animalName = animal.name.charAt(0).toUpperCase() + animal.name.slice(1);

            const singleAnimal = document.createElement("button");
            singleAnimal.setAttribute("class", "animalNameBox");
            singleAnimal.setAttribute("id", `${animal.id}`);
            singleAnimal.addEventListener("click", ()  => confirmRemove(animal));
            singleAnimal.addEventListener("mouseover", () => changeBtnText(singleAnimal.id));
            singleAnimal.innerText = `${animalName}: ${animal.strength} de fuerza`;

            const animalBtns = document.createElement("section");

            const animalImg = document.createElement("button");
            animalImg.innerText = "Ver";
            animalImg.addEventListener("click", () => imgWindow(animal.img))

            const modAnimal = document.createElement("button");
            modAnimal.setAttribute("class", "modAnimalBtn");
            modAnimal.innerText = "Modificar";
            modAnimal.addEventListener("click", () => modifyWindow(animal));

            animalBtns.append(animalImg, modAnimal);

            singleAnimalBox.append(singleAnimal, animalBtns);
            animalsSection.append(singleAnimalBox);
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
    removeYes.addEventListener("click", () => removeAnimal(animal.id, removeBox.id))
    removeYes.innerText = "SÍ";
    const removeNo = document.createElement("button");
    removeNo.addEventListener("click", () => closeWindow(removeBox.id));
    removeNo.innerText = "NO";
    removeBtns.append(removeYes, removeNo);
    
    removeBox.append(removeMessage, removeBtns);
    mainPage.append(removeBox);
}

const removeAnimal = (removedAnimal, removeBox) => {
    fetch(`${BASE_URL}/animals/${removedAnimal}`, {
        method: "DELETE", // or 'PUT'
        headers: {
        "Content-Type": "application/json",
        },
    })
    
    .then((res) => res.json())
    
    .catch((error) => console.error("Error:", error))
    
    .then((response) => console.log("Success:", response));

    closeWindow(removeBox);
    getAllAnimals();
}

const modifyWindow = (animalToUpdate) => {
    console.log("Modificar animal", animalToUpdate);

    const updateBox = document.createElement("div");
    updateBox.setAttribute("class", "updateBox");
    updateBox.setAttribute("id", "updateWindow");

    const updateForm = document.createElement("form");
    updateForm.innerHTML = `<form id="modifyAnimal" class="updateForm">
        <input type="text" placeholder="Nombre: ${animalToUpdate.name}" id="modifyInputName">
        <input type="number" placeholder="Fuerza: ${animalToUpdate.strength}" id="modifyInputStrength">
    </form>`

    const updateBtns = document.createElement("div");
    updateBtns.setAttribute("class", "updateBtnsBox");
    const updateYes = document.createElement("button");
    updateYes.addEventListener("click", () => updateAnimal(animalToUpdate.id, updateBox.id))
    updateYes.innerText = "Actualizar";
    const updateNo = document.createElement("button");
    updateNo.addEventListener("click", () => closeWindow(updateBox.id));
    updateNo.innerText = "Cancelar";
    updateBtns.append(updateYes, updateNo);
    
    updateBox.append(updateForm, updateBtns);
    mainPage.append(updateBox);
}

const imgWindow = (animalImageUrl) => {
    const imgBox = document.createElement("div");
    imgBox.setAttribute("class", "imgBox");
    imgBox.setAttribute("id", "imgWindow");

    const imgItem = document.createElement("img");
    imgItem.setAttribute("class", "animalImg");
    imgItem.src = animalImageUrl;

    const closeImg = document.createElement("button");
    closeImg.addEventListener("click", () => closeWindow(imgBox.id));
    closeImg.innerText = "Cerrar";
    
    imgBox.append(imgItem, closeImg);
    mainPage.append(imgBox);
}

const updateAnimal = (animalToUpdateId, updateBox) => {
    const newName = document.getElementById("modifyInputName");
    const newStrength = document.getElementById("modifyInputStrength");

    if (newName.value == "" || newStrength.value == ""){
        alert("No has completado todos los campos");
        return;
    }
    else if (newStrength.value < 1 || newStrength.value > 10){
        alert("La fuerza debe ser un número entre 1 y 10");
        return;
    }
    
    const modifiedAnimal = {
        id: animalToUpdateId,
        name: newName.value,
        strength: newStrength.value
    }
    
    fetch(`${BASE_URL}/animals/${animalToUpdateId}`, {
        method: "PUT",
        body: JSON.stringify(modifiedAnimal),
        headers: {
        "Content-Type": "application/json",
        },
    })
    
    .then((res) => res.json())
    
    .catch((error) => console.error("Error:", error))
    
    .then((response) => console.log("Success:", response));

    closeWindow(updateBox)
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

const closeWindow = (windowId) => {
    const removedWindow = document.getElementById(windowId);
    removedWindow.remove();
}

getAllAnimals();