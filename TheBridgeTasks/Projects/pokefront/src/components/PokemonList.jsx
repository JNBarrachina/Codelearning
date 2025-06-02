import { useState, useEffect } from 'react'

export const PokemonList = () => {

    const [pokelist, setPokelist] = useState([])
    const [search, setSearch] = useState("pikachu")

    const getPokemons = async (search) => {
        console.log(search)
        await fetch(`https://pokeapi.co/api/v2/pokemon/${search}`)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            
            const pokemonData = [];
            data.forEach(pokemon => {
                pokemonData.push({
                    name: pokemon.name,
                })
            });

            setPokelist(pokemonData)
        })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    getPokemons();
    useEffect(() => {
        getPokemons(search)
    }, [search])
    

    return (
        
            <main>
                <h1>Pokemons</h1>
                <input className='searchPokemon' type="text" placeholder="Buscar pokemon" onChange={handleSearch}/>
                {
                    pokelist.map(pokemon => 
                        <article className='memberBox'>
                            <h2>{pokemon.name}</h2>
                        </article>
                    )
                }
            </main>
    
    )
}
