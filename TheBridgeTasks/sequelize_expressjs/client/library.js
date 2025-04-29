
const BASE_URL = "http://localhost:3000";

const mainPage = document.getElementById("mainpage");
const postAnimal = document.getElementById("btnAddAnimal");
postAnimal.addEventListener("click", checkData);
const animalsSection = document.getElementById("animalsList");
const message = document.getElementById("infoMessage");

const animalName = document.getElementById("inputName");
const animalStrength = document.getElementById("inputDescription");
const bookPages = document.getElementById("inputPages");

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

    message.innerText = "Libro anadida correctamente";
    getAllBooks();
}

function getAllBooks(){
    fetch(`${BASE_URL}/books`)
    .then((response) => response.json())
    .then((data) => {
        animalsSection.innerHTML = "";
    
        data.forEach(book => {
            const singleBookBox = document.createElement("article");
            singleBookBox.setAttribute("class", "singleAnimalBox")

            const bookName = book.title.charAt(0).toUpperCase() + book.title.slice(1);

            const singleBook = document.createElement("button");
            singleBook.setAttribute("class", "animalNameBox");
            singleBook.setAttribute("id", `${book.id}`);
            singleBook.addEventListener("click", ()  => confirmRemove(book));
            singleBook.addEventListener("mouseover", () => changeBtnText(singleBook.id));
            singleBook.innerText = `${bookName} (${book.length} páginas)`;

            const bookBtns = document.createElement("section");
            bookBtns.setAttribute("class", "cityBtnsBox");

            const bookImg = document.createElement("button");
            bookImg.innerText = "Ver más";
            // cityImg.addEventListener("click", () => imgWindow(animal.img))

            const modBook = document.createElement("button");
            modBook.setAttribute("class", "modAnimalBtn");
            modBook.innerText = "Modificar";
            modBook.addEventListener("click", () => modifyWindow(book));

            bookBtns.append(bookImg, modBook);

            singleBookBox.append(singleBook, bookBtns);
            animalsSection.append(singleBookBox);
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
    getAllBooks();
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
    getAllBooks();
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

getAllBooks();

