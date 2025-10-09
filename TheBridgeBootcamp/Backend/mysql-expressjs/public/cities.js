
const BASE_URL = "http://localhost:3000";

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
    
    const newCity = {
        city: animalName.value,
        country: animalStrength.value
    }

    addCity(newCity);
}

async function addCity(newCity){
    await fetch(`${BASE_URL}/cities`, {
        method: "POST",
        body: JSON.stringify(newCity),
        headers: {
        "Content-Type": "application/json",
        },
    })

    message.innerText = "Ciudad anadida correctamente";
    getAllCities();
}

function getAllCities(){
    fetch(`${BASE_URL}/cities`)
    .then((response) => response.json())
    .then((data) => {
        animalsSection.innerHTML = "";
    
        data.forEach(city => {
            const singleCityBox = document.createElement("article");
            singleCityBox.setAttribute("class", "singleAnimalBox")

            const cityName = city.city.charAt(0).toUpperCase() + city.city.slice(1);

            const singleCity = document.createElement("button");
            singleCity.setAttribute("class", "animalNameBox");
            singleCity.setAttribute("id", `${city.id}`);
            singleCity.addEventListener("click", ()  => confirmRemove(city));
            singleCity.addEventListener("mouseover", () => changeBtnText(singleCity.id));
            singleCity.innerText = `${cityName}, ${city.country}`;

            const cityBtns = document.createElement("section");
            cityBtns.setAttribute("class", "cityBtnsBox");

            const cityImg = document.createElement("button");
            cityImg.innerText = "Ver";
            // cityImg.addEventListener("click", () => imgWindow(animal.img))

            const modCity = document.createElement("button");
            modCity.setAttribute("class", "modAnimalBtn");
            modCity.innerText = "Modificar";
            modCity.addEventListener("click", () => modifyWindow(city));

            cityBtns.append(cityImg, modCity);

            singleCityBox.append(singleCity, cityBtns);
            animalsSection.append(singleCityBox);
        });

        animalsSection.style.visibility = "visible";
    }) 

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

const confirmRemove = (city) => {
    const removeBox = document.createElement("div");
    removeBox.setAttribute("class", "removeBox");
    removeBox.setAttribute("id", "removeWindow");

    const removeMessage = document.createElement("p");
    removeMessage.innerText = `¿Quieres eliminar ${city.city} definitivamente?`;

    const removeBtns = document.createElement("div");
    removeBtns.setAttribute("class", "removeBtnsBox");
    const removeYes = document.createElement("button");
    removeYes.addEventListener("click", () => removeCity(city.id, removeBox.id))
    removeYes.innerText = "SÍ";
    const removeNo = document.createElement("button");
    removeNo.addEventListener("click", () => closeWindow(removeBox.id));
    removeNo.innerText = "NO";
    removeBtns.append(removeYes, removeNo);
    
    removeBox.append(removeMessage, removeBtns);
    mainPage.append(removeBox);
}

const removeCity = (removedCity, removeBox) => {
    fetch(`${BASE_URL}/cities/${removedCity}`, {
        method: "DELETE", // or 'PUT'
        headers: {
        "Content-Type": "application/json",
        },
    })
    
    .then((res) => res.json())
    
    .catch((error) => console.error("Error:", error))
    
    .then((response) => console.log("Success:", response));

    closeWindow(removeBox);
    getAllCities();
}

const modifyWindow = (cityToUpdate) => {

    const updateBox = document.createElement("div");
    updateBox.setAttribute("class", "updateBox");
    updateBox.setAttribute("id", "updateWindow");

    const updateForm = document.createElement("form");
    updateForm.innerHTML = `<form id="modifyAnimal" class="updateForm">
        <input type="text" placeholder="Nombre: ${cityToUpdate.city}" id="modifyInputName">
        <input type="text" placeholder="País: ${cityToUpdate.country}" id="modifyInputStrength">
    </form>`

    const updateBtns = document.createElement("div");
    updateBtns.setAttribute("class", "updateBtnsBox");
    const updateYes = document.createElement("button");
    updateYes.addEventListener("click", () => updateCity(cityToUpdate.id, updateBox.id))
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

const updateCity = (cityToUpdateId, updateBox) => {
    const newName = document.getElementById("modifyInputName");
    const newCountry = document.getElementById("modifyInputStrength");

    if (newName.value == "" || newCountry.value == ""){
        alert("No has completado todos los campos");
        return;
    }
    
    const modifiedCity = {
        id: cityToUpdateId,
        city: newName.value,
        country: newCountry.value
    }
    
    fetch(`${BASE_URL}/cities/${cityToUpdateId}`, {
        method: "PUT",
        body: JSON.stringify(modifiedCity),
        headers: {
        "Content-Type": "application/json",
        },
    })
    
    .then((res) => res.json())
    
    .catch((error) => console.error("Error:", error))
    
    .then((response) => console.log("Success:", response));

    closeWindow(updateBox)
    getAllCities();
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

getAllCities();

