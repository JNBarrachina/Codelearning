let pages = {
    current: "https://dragonball-api.com/api/characters?limit=10",
    prev: "",
    next: "",
};

function showCharacters(){
    fetch(pages.current)
    .then((response) => response.json())
    .then((data) => {
        pages.prev = data.links.previous;
        pages.next = data.links.next;

        disablePageButtons();
        window.scrollTo(0,0);

        charactersGrid.innerHTML = "";
        data.items.forEach(character => {
            createCharac(character);
        });
    })

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

showCharacters();

function createCharac(character) {
    const boxChar = document.createElement("article");
    boxChar.setAttribute("class", "dbCharacter");

    const charImg = document.createElement("img");
    charImg.setAttribute("class", "imgCharacter");
    charImg.src = character.image;
    const charName = document.createElement("p");
    charName.setAttribute("id", character.id);
    charName.setAttribute("class", "characterName");
    charName.innerText = character.name;

    const charKi = document.createElement("p");
    charKi.innerText = character.ki;
    const charRace = document.createElement("p");
    charRace.innerText = character.race;
    const charGen = document.createElement("p");
    charGen.innerText = character.gender;

    boxChar.append(charName, charImg, charKi, charRace, charGen);
    charactersGrid.append(boxChar);
}

const charactersGrid = document.getElementById("dbList");

const charactersNames = document.querySelectorAll("characterName");
charactersNames.forEach((characterName) => {
    characterName.addEventListener("mouseover", selectDescript);
});
const charDescript = document.createElement("p");
charDescript.setAttribute("class", "pDescription");

const searchInput = document.getElementById("inputDB");
searchInput.addEventListener("input", searchCharacters);

const nextPageButton = document.getElementById("nextB")
nextPageButton.addEventListener("click", toNextPage);
const prevPageButton = document.getElementById("prevB")
prevPageButton.addEventListener("click", toPrevPage);


function toNextPage(){
    pages.current = pages.next;

    showCharacters();
}

function toPrevPage(){
    pages.current = pages.prev;

    showCharacters();
}

function disablePageButtons(){
    if (pages.prev == ""){
        prevPageButton.setAttribute("disabled", true);
    }
    else{
        prevPageButton.removeAttribute("disabled");
    }

    if (pages.next == ""){
        nextPageButton.setAttribute("disabled", true)
    }
    else{
        nextPageButton.removeAttribute("disabled");
    }
}

function searchCharacters(){
    const s = document.getElementById("inputDB").value.toLowerCase();

    if (s == ""){
        showCharacters();
    }
    else{
        fetch("https://dragonball-api.com/api/characters?name=" + s)
        .then((response) => response.json())
        .then((data) => {
            charactersGrid.innerHTML = "";
            data.forEach(character => {
                createCharac(character);
        });
        });
    }
}

function selectDescript(event){
    alert("Salta alert");
    console.log(event.target.id);
    
    const idDescript = event.target.id;
    charDescript.style.visibility = "hidden";
    charDescript.innerText = "";

    fetch("https://dragonball-api.com/api/characters?id=" + idDescript)
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
        });

    showDescript(idDescript);
}

function showDescript(idDescript){
    // charDescript.innerText = allData[idDescript].description;
    charactersGrid.appendChild(charDescript);
    charDescript.style.visibility = "visible";
}
