import { useState, useEffect } from 'react'

import { CharacterItem } from '../molecules/CharacterItem'
import "./PokemonList.scss"

export const PokemonList = ({pokemonType}) => {

    const [pokelist, setPokelist] = useState([])

    useEffect(() => {

        setPokelist([])
        const getPokemons = async () => {
            await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`)
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
    , [pokemonType])

    const singlePokemonInfo = async (pokemon, newPokeList) => {
        await fetch(`${pokemon.pokemon.url}`)
        .then(response => response.json())
        .then(pokemonInfo => {

            setPokelist((prevPokelist) => [...prevPokelist, {name: pokemonInfo.name, img: pokemonInfo.sprites.front_default}])
            
        })
    }

    return (
            <section className='pokemonListBox'>
                {
                    pokelist.map(pokemon => 
                        <CharacterItem name={pokemon.name} img={pokemon.img} key={pokemon.name}/>
                    )
                }
            </section>
    )
}
