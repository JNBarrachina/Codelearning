import { useState, useEffect} from 'react';
import { CharacterItem } from '../molecules/CharacterItem';


export const DragonBallLayout = () => {
    
    const [dbCharactersList, setCharactersList] = useState([])

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
        <h2>DragonBall Characters</h2>
        <section className='pokemonListBox'>
            {
                dbCharactersList.map(dbcharacter => 
                    <CharacterItem name={dbcharacter.name} img={dbcharacter.image} key={dbcharacter.id}/>
                )
            }
        </section>
        </>
    );
}
