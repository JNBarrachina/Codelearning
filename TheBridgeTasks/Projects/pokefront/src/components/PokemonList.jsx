import { useState, useEffect } from 'react'

export const PokemonList = (selectedType) => {

    const [pokelist, setPokelist] = useState([])

    useEffect(() => {
        console.log(selectedType);

        const getPokemons = async () => {
        await fetch(`https://pokeapi.co/api/v2/type/${selectedType.selectedType}`)
        .then(response => response.json())
        .then(data => {          
            const pokemonData = data.pokemon
            
            pokemonData.forEach(pokemon => {
                singlePokemonInfo(pokemon)
            });
        })
        }

        getPokemons();
    }
    , [selectedType])

    const singlePokemonInfo = async (pokemon) => {
        await fetch(`${pokemon.pokemon.url}`)
        .then(response => response.json())
        .then(pokemonInfo => {

            pokelist.push({name: pokemonInfo.name, img: pokemonInfo.sprites.front_default})
        })
    }

    return (
            <section>
                {
                    pokelist.map(pokemon => 
                        <article className='memberBox'>
                            <h3>{pokemon.name}</h3>
                            <img src={pokemon.img} alt="" />
                        </article>
                    )
                }
            </section>
    )
}
