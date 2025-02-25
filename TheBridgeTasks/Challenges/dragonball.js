fetch("https://dragonball-api.com/api/characters?&limit=1000")
    .then((response) => response.json())
    .then((data) => {
        data.items.forEach(ch => {
            const nameChar = ch.name;
            const kiChar = ch.ki;
            const raceChar = ch.race;
            const genChar = ch.gender;
            const imgChar = ch.image;
            console.log(nameChar, kiChar, raceChar, genChar, imgChar);
            createCharac(nameChar, kiChar ,raceChar, genChar, imgChar);
        });
    })
    .catch((error) => {
        console.error("Error en la solicitud:", error);
    });

const charList = document.getElementById("dbList");

function createCharac(nameChar, kiChar, raceChar, genChar, imgChar) {
    const boxChar = document.createElement("article");
    boxChar.setAttribute("class", "dbCharacter");

    const charImg = document.createElement("img");
    charImg.src = imgChar;
    const charName = document.createElement("p");
    charName.innerText = nameChar;
    const charKi = document.createElement("p");
    charKi.innerText = kiChar;
    const charRace = document.createElement("p");
    charRace.innerText = raceChar;
    const charGen = document.createElement("p");
    charGen.innerText = genChar;

    boxChar.append(charImg, charName, charKi, charRace, charGen);
    charList.append(boxChar);
}