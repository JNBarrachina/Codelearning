import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="mainHeader">
            <p className="headerTitle">PokeFrontAPI</p>
            <nav className="headerNav">
                <Link to="/">Inicio</Link>
                <Link to="/pokemon">Pokemons</Link>
            </nav>
        </header>
    )
}
