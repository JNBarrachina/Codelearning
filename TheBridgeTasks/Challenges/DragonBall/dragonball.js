
fetch("https://dragonball-api.com/api/characters?&limit=1000")
    .then((response) => response.json())
    .then((data) => {
        data.items.forEach(character => {
            const idChar = character.id;
            const nameChar = character.name;
            const kiChar = character.ki;
            const raceChar = character.race;
            const genChar = character.gender;
            const imgChar = character.image;

            createCharac(idChar, nameChar, kiChar ,raceChar, genChar, imgChar);
        });

        allData = data.items;
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });


const charactersGrid = document.getElementById("dbList")
charactersGrid.addEventListener("mouseover", selectDescript);
const charDescript = document.createElement("p");
charDescript.setAttribute("class", "pDescription");
let allData;


function createCharac(idChar, nameChar, kiChar, raceChar, genChar, imgChar) {
    const boxChar = document.createElement("article");
    boxChar.setAttribute("class", "dbCharacter");
    boxChar.setAttribute("id", `box${idChar}`);

    const charImg = document.createElement("img");
    charImg.src = imgChar;

    const charName = document.createElement("p");
    charName.setAttribute("id", idChar);
    charName.setAttribute("class", "characterName");
    charName.innerText = nameChar;

    const charKi = document.createElement("p");
    charKi.innerText = kiChar;
    const charRace = document.createElement("p");
    charRace.innerText = raceChar;
    const charGen = document.createElement("p");
    charGen.innerText = genChar;

    boxChar.append(charImg, charName, charKi, charRace, charGen);
    charactersGrid.append(boxChar);
}

function selectDescript(event){
    const idDescript = event.target.id;
    charDescript.style.visibility = "hidden";
    charDescript.innerText = "";
    showDescript(allData, idDescript);
}

function showDescript(allData, idDescript){
    charDescript.innerText = allData[idDescript-1].description;
    charactersGrid.appendChild(charDescript);
    charDescript.style.visibility = "visible";
}

