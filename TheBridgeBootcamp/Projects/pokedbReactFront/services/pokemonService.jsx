export const fetchPokemonTypes = async () => {
    try {
        const response = await fetch('https://pokeapi.co/api/v2/type')
        const data = await response.json()
        const typeList = data.results
        return typeList
    } catch (error) {
        console.error('Error fetching types: ', error)
    }
}


