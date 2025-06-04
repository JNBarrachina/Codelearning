import { useState, useEffect, useContext} from 'react';
import { ThemeContext } from '../../contexts/ThemeContext';

import { CharacterItem } from '../molecules/CharacterItem';
import "./CharactersListBox.scss"


export const DragonBallLayout = () => {
    
    const [dbCharactersList, setCharactersList] = useState([])

    const {theme, setTheme} = useContext(ThemeContext)

    useEffect(() => {

        const getDBCharacters = async () => {
            await fetch(`https://dragonball-api.com/api/characters?limit=1000
`)
            .then(response => response.json())
            .then(data => {          
                const dbCharacters = data.items;
                setCharactersList(dbCharacters)
            })
        }

        getDBCharacters();
    }
    , [])

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
