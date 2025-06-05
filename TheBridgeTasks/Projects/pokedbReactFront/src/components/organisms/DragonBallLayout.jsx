import { useState, useEffect, useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { useFetchCharactersData } from '../../hooks/useFetchCharactersData'
import { CharacterItem } from '../molecules/CharacterItem';
import "./CharactersListBox.scss"


export const DragonBallLayout = () => {
    
    const {theme, setTheme} = useContext(ThemeContext)

    const dbCharactersList = useFetchCharactersData({
        url: "https://dragonball-api.com/api/characters?limit=1000",
        resultsAttribute: "items",
    });

    return (
        <>
        <h2 className={theme == "dark" ? "titleCharacters titleCharacters-dark" : "titleCharacters titleCharacters-light"}>DragonBall Characters</h2>
        <section className='charactersListBox'>
            {
                dbCharactersList.map(dbcharacter => 
                    <CharacterItem name={dbcharacter.name} img={dbcharacter.image} key={dbcharacter.id}/>
                )
            }
        </section>
        </>
    );
}
