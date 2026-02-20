import { useState, useEffect, useContext } from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { PokemonList } from './PokemonList';
import { fetchPokemonTypes } from '../../../services/pokemonService';
import "./CharactersListBox.scss"

export const PokemonsLayout = () => {
    const [types, setTypes] = useState([])
    const [selectedType, setSelectedType] = useState("normal")

    const { theme } = useContext(ThemeContext)

    useEffect(() => {
        // const getTypeList = async () => {
        //     const typeList = await fetchPokemonTypes()
        //     setTypes(typeList)
        // }

        // getTypeList()

        fetchPokemonTypes().then(setTypes)
    }, [])

    const handleTypeChange = (event) => {
        setSelectedType(event.target.value);
    }

    return (
        <>
            <section className="typeSelectorBox">
                <h2 className={theme == "dark" ? "titleCharacters titleCharacters-dark" : "titleCharacters titleCharacters-light"}>Pokemons</h2>
                <label htmlFor="typeSelectorLabel" className={theme == "dark" ? "labelSelect labelSelect-dark" : "labelSelect labelSelect-light"}>Selecciona un tipo de Pokemon: </label>
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
