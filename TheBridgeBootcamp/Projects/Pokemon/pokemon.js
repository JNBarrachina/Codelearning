const searchPoke = document.getElementById("inputP");
searchPoke.addEventListener("input", filterPokemons);

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

const pokeBox = document.getElementById("pokeFinder");
const pokemonsUL = document.createElement("ul");
pokemonsUL.setAttribute("class", "pokemonList");
pokemonsUL.setAttribute("id", "pokeList");
pokeBox.appendChild(pokemonsUL);

filterPokemons();

function filterPokemons(){
    let s = document.getElementById("inputP").value.toLowerCase();

    let filteredPokemons = pokemons.filter((pokemon) => {
        return pokemon.name.toLowerCase().includes(s);
    });

    pokemonsUL.innerHTML = "";
    showPokemons(filteredPokemons, pokemonsUL);
}

function showPokemons(filteredPokemons, pokemonsUL) {

    filteredPokemons.forEach(pokemon => {
        const pokeListItem = document.createElement("li");
        pokeListItem.setAttribute("class", "pokeItem")

        const pokeName = document.createElement("p");
        pokeName.setAttribute("class", "pname");
        pokeName.innerHTML = "<b>Pokemon: </b>" + pokemon.name;
        const pokeType = document.createElement("p");
        pokeType.setAttribute("class", "ptype");
        pokeType.innerHTML = "<b>Type: </b>" + pokemon.type;
    
        pokeListItem.append(pokeName, pokeType);
        pokemonsUL.appendChild(pokeListItem);
    });
}
