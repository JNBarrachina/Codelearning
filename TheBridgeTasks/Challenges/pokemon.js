const pokemons = [
    {
    name: "Pikachu",
    type: "electric",
    },
    {
    name: "Bulbasur",
    type: "grass",
    },
    {
    name: "Eevee",
    type: "normal",
    },
    {
    name: "Mew",
    type: "psy",
    },
    {
    name: "Squirtle",
    type: "water",
    },
    {
    name: "Charmander",
    type: "fire",
    },
    {
    name: "Charizard",
    type: "fire",
    },
];

function showAllList(){

    pokemons.forEach(pokemon => {
        const allPokemons = document.getElementById("pokeList");
        const pokeListItem = document.createElement("li");
        pokeListItem.setAttribute("class", "pokeItem")

        const pokeName = document.createElement("p");
        pokeName.setAttribute("class", "pname");
        const pokeType = document.createElement("p");
        pokeType.setAttribute("class", "ptype");
        pokeName.innerHTML = "<b>Pokemon: </b>" + pokemon.name;
        pokeType.innerHTML = "<b>Type: </b>" + pokemon.type;
    
        pokeListItem.append(pokeName, pokeType);
        allPokemons.appendChild(pokeListItem);
    });
}

showAllList();

const searchPoke = document.getElementById("inputP");
searchPoke.addEventListener("input", showPokemon);

function showPokemon(){
    let s = document.getElementById("inputP").value;

    pokemons.forEach(pokemon => {
        if (pokemon.name.includes(s)){
            findedPokemons.push(pokemon);
        }
    });

    console.log(findedPokemons);
    return findedPokemons;
}
