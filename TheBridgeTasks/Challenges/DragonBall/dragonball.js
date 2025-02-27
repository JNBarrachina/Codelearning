let nPage;
let pPage;

function showCharacters(){
    fetch("https://dragonball-api.com/api/characters?page=1&limit=10")
    .then((response) => response.json())
    .then((data) => {
        nPage = data.links.next;

        charactersGrid.innerHTML = "";
        data.items.forEach(character => {
            const idCharacter = data.items.indexOf(character);
            createCharac(character, idCharacter);
        });
    })

    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

showCharacters();

const charactersGrid = document.getElementById("dbList")
charactersGrid.addEventListener("mouseover", selectDescript);
const charDescript = document.createElement("p");
charDescript.setAttribute("class", "pDescription");

const searchInput = document.getElementById("inputDB");
searchInput.addEventListener("input", searchCharacters);

const nextPage = document.getElementById("nextB")
nextPage.addEventListener("click", changePage(nPage));
const prevPage = document.getElementById("prevB")
prevPage.addEventListener("click", changePage(pPage));

function changePage(currentPage){
    console.log(currentPage)
    fetch(currentPage)
    .then((response) => response.json())
    .then((data) => {
        charactersGrid.innerHTML = "";
        nPage = data.links.next;
        pPage = data.links.previous;

        data.items.forEach(character => {
            const idCharacter = data.items.indexOf(character);
            createCharac(character, idCharacter);
        });

        document.documentElement.scrollTop = 0
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });
}

function createCharac(character, idCharacter) {
    const boxChar = document.createElement("article");
    boxChar.setAttribute("class", "dbCharacter");

    const charImg = document.createElement("img");
    charImg.src = character.image;
    const charName = document.createElement("p");
    charName.setAttribute("id", idCharacter);
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
    const idDescript = event.target.id;
    charDescript.style.visibility = "hidden";
    charDescript.innerText = "";

    fetch("https://dragonball-api.com/api/characters?name=" + s)
        .then((response) => response.json())
        .then((data) => {
            charactersGrid.innerHTML = "";
            data.forEach(character => {
                createCharac(character);
        });
        });

    showDescript(allData, idDescript);
}

function showDescript(allData, idDescript){
    charDescript.innerText = allData[idDescript].description;
    charactersGrid.appendChild(charDescript);
    charDescript.style.visibility = "visible";
}
