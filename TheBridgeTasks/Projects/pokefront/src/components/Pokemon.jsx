import "./Pokemon.scss"

export const Pokemon = ({name, img}) => {

    return (
        <article className='pokemonBox'>
            <p className="pokemonName">{name.toUpperCase()}</p>
            <img src={img} alt="" className="pokeImg"/>
        </article>
    )
}
