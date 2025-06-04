import { useContext } from "react"
import "./CharacterItem.scss"
import { ThemeContext } from "../../contexts/ThemeContext"

export const CharacterItem = ({name, img}) => {

    const characterName = useContext(ThemeContext)
    
    return (
        <article className='characterBox'>
            <p className="characterName">{name.toUpperCase()}</p>
            <img src={img} alt="" className="characterImg"/>
        </article>
    )
}
