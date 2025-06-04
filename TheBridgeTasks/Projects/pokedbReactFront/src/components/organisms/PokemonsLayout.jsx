import { useState, useEffect, useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { PokemonList } from './PokemonList';
import "./CharactersListBox.scss"

export const PokemonsLayout = () => {
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState("normal")

    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {
        if (types.length == 0){

            const getTypes = async () => {
            await fetch('https://pokeapi.co/api/v2/type')
            .then(response => response.json())
            .then(data => {

                const typeList = data.results
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
        <>
        <section className="typeSelectorBox">
            <h2 className={theme == "dark" ? "titleCharacters titleCharacters-dark" : "titleCharacters titleCharacters-light"}>Pokemons</h2>
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
        </>
    );
}
