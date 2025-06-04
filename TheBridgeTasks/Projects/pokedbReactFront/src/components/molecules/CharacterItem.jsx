import { useContext } from "react"
import "./CharacterItem.scss"
import { ThemeContext } from "../../contexts/ThemeContext"

export const CharacterItem = ({name, img}) => {

    const {theme, setTheme} = useContext(ThemeContext)

    const characterBoxClass = () => {
        if (theme == "dark"){
            return "characterBox characterBox-dark"
        } else {
            return "characterBox characterBox-light"
        }
    }

    const nameClass = () => {
        if (theme == "dark"){
            return "characterName characterName-dark"
        } else {
            return "characterName characterName-light"
        }
    }
    
    return (
        <article className={characterBoxClass()}>
            <p className={nameClass()}>{name.toUpperCase()}</p>
            <img src={img} alt="" className="characterImg"/>
        </article>
    )
}
