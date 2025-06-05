import { useState, useEffect } from "react";

export const useFetchCharactersData = ({url, resultsAttribute}) => {

    const [charactersList, setCharactersList] = useState([])
    
    useEffect(() => {
        const getDBCharacters = async () => {
            await fetch(`${url}`)
            .then(response => response.json())
            .then(data => {   
                const characters = data[resultsAttribute];
                    setCharactersList(characters)
                })
        }

        getDBCharacters()
    }
    , [])

    return charactersList
}