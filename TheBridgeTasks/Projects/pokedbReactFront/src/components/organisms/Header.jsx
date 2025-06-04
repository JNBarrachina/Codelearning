import { Link } from 'react-router-dom'

import "./Header.scss"

import { useContext, useEffect } from 'react'
import { ThemeContext } from '../../contexts/ThemeContext'

export const Header = () => {
    const {theme, setTheme} = useContext(ThemeContext)
    let textThemeBtn = theme

    useEffect(() => {
        textThemeBtn = theme
    }, [theme])
    
    let changeTheme = () => {
        if (theme == "dark"){
            setTheme("light")
        }
        else{
            setTheme("dark")
        }
    }

    return (
        <>
        <header className={theme=="dark" ? "headerContainer headerContainer-dark" : "headerContainer headerContainer-light"}>
            <p className={theme=="dark" ? "headerTitle headerTitle-dark" : "headerTitle headerTitle-light"}>Pokedragonmonball</p>
            <nav className={theme=="dark" ? "headerNav headerNav-dark" : "headerNav headerNav-light"}>
                <Link to="/">Home</Link>
                <Link to="/characters">Characters</Link>
            </nav>
            <button className={theme=="dark" ? "themeBtn themeBtn-dark" : "themeBtn themeBtn-light"} onClick={() => changeTheme()}>{textThemeBtn}</button>
        </header>
        </>
    )
}
