function showAll(){
    fetch("https://dragonball-api.com/api/characters?&limit=1000")
    .then((response) => response.json())
    .then((data) => {
        charactersGrid.innerHTML = "";
        data.items.forEach(character => {
            createCharac(character);
        });

        allData = data.items;
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

showAll();

const charactersGrid = document.getElementById("dbList")
charactersGrid.addEventListener("mouseover", selectDescript);
const charDescript = document.createElement("p");
charDescript.setAttribute("class", "pDescription");
const searchInput = document.getElementById("inputDB")
searchInput.addEventListener("input", searchCharacter);
let allData;


function createCharac(character) {
    const boxChar = document.createElement("article");
    boxChar.setAttribute("class", "dbCharacter");

    const charImg = document.createElement("img");
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

function selectDescript(event){
    const idDescript = event.target.id;
    charDescript.style.visibility = "hidden";
    charDescript.innerText = "";
    showDescript(allData, idDescript);
}

function showDescript(allData, idDescript){
    charDescript.innerText = allData[idDescript].description;
    charactersGrid.appendChild(charDescript);
    charDescript.style.visibility = "visible";
}

function searchCharacter(){
    const s = document.getElementById("inputDB").value.toLowerCase();

    if (s == ""){
        showAll();
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
