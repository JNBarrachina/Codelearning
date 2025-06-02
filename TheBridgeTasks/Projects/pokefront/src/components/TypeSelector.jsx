import { useState, useEffect, use } from 'react';

import { PokemonList } from './PokemonList';

export const TypeSelector = () => {

    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState("")

    useEffect(() => {
        const getTypes = async () => {
            await fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => {

                const typeList = data.results
                console.log(typeList);
                setTypes(typeList);
            })
            .catch(error => console.error('Error fetching types:', error));
        }

        getTypes();
    }, []);


    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    }

    return (
        <main>
        <h1>POKEMON</h1>
        <section className="type-selector">
            <label htmlFor="type-select">Selecciona un tipo de Pokemon: </label>
            <select id="type-select" value={selectedType} onChange={handleTypeChange}>
            <option value="">--Please choose an option--</option>
            {types.map((type) => (
                <option key={type.name} value={type.name}>
                {type.name}
                </option>
            ))}
            </select>
        </section>
        <section>
            <PokemonList selectedType={selectedType} />
        </section>
        </main>
    );
}
