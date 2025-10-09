import "./MainLayout.scss"

import { useContext } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export const MainLayout = ({leftContent, rightContent}) => {
    
    const {theme, setTheme} = useContext(ThemeContext)
    
    return (
        <main className={theme == "dark" ? "mainLayout mainLayout-dark" : "mainLayout mainLayout-light"}>
            <h1 className={theme == "dark" ? "mainTitle mainTitle-dark" : "mainTitle mainTitle-light"}>Characters</h1>
            <article className="leftContainer">
                {leftContent}
            </article>
            <article className="rightContainer">
                {rightContent}
            </article>
        </main>
    )
}
