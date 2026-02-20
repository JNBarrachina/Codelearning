import { useContext } from "react"
import "./CharacterItem.scss"
import { ThemeContext } from "../../contexts/ThemeContext"

export const CharacterItem = ({ name, img }) => {

    const { theme } = useContext(ThemeContext)

    const characterBoxClass = theme === "dark" ? "characterBox characterBox-dark" : "characterBox characterBox-light"
    const nameClass = theme === "dark" ? "characterName characterName-dark" : "characterName characterName-light"

    return (
        <article className={characterBoxClass}>
            <p className={nameClass}>{name.toUpperCase()}</p>
            <img src={img} alt="" className="characterImg" />
        </article>
    )
}
