import { useState, useEffect } from 'react'

import { Pokemon } from './Pokemon'
import "./PokemonList.scss"

export const PokemonList = ({pokemonType}) => {

    const [pokelist, setPokelist] = useState([])

    useEffect(() => {
        console.log("use effect", pokemonType);
        setPokelist([])
        const getPokemons = async () => {
            console.log("previo al fetchs")
        await fetch(`https://pokeapi.co/api/v2/type/${pokemonType}`)
        .then(response => response.json())
        .then(data => {          
            const pokemonData = data.pokemon
            
            // const newPokeList = []

            pokemonData.forEach(pokemon => {
                singlePokemonInfo(pokemon)
            });

            //setPokelist(pokelist)
            console.log("Pokelist actualizada: ", pokelist)
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
            

            // pokelist.push({name: pokemonInfo.name, img: pokemonInfo.sprites.front_default})
        })
    }

    return (
            <section className='pokemonListBox'>
                {
                    pokelist.map(pokemon => 
                        <Pokemon name={pokemon.name} img={pokemon.img} key={pokemon.name}/>
                    )
                }
            </section>
    )
}
