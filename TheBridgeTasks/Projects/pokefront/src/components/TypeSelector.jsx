import { useState, useEffect} from 'react';

import { PokemonList } from './PokemonList';

export const TypeSelector = () => {
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState("normal")

    useEffect(() => {
        console.log("Se muestran los tipos al montar el componente: ", types)

        if (types.length == 0){
            console.log("Recuperando los tipos de Pokemon...")

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
        }
        
    }, []);

    
    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    }

    return (
        <main>
        <section className="typeSelectorBox">
            <label htmlFor="typeSelectorLabel">Selecciona un tipo de Pokemon: </label>
            <select id="typeSelector" value={selectedType} onChange={handleTypeChange}>
            <option value="">--Selecciona un tipo de Pokemon--</option>
            {types.map((type) => (
                <option key={type.name} value={type.name}>
                {type.name}
                </option>
            ))}
            </select>
        </section>
            <PokemonList pokemonType={selectedType} />
        </main>
    );
}
