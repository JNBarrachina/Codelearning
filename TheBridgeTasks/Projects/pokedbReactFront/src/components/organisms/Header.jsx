import { Link } from 'react-router-dom'

import "./Header.scss"

export const Header = () => {
    return (
        <header className="mainHeader">
            <p className="headerTitle">Pokedragonmonball</p>
            <nav className="headerNav">
                <Link to="/">Inicio</Link>
                <Link to="/characters">Characters</Link>
            </nav>
            <button className='themeBtn'>Modo oscuro</button>
        </header>
    )
}
