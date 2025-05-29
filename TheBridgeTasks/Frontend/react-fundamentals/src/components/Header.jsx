import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="mainHeader">
            <p className="headerTitle">React Fundamentals</p>
            <nav className="headerNav">
                <Link to="/">Inicio</Link>
                <Link to="/count">Contador</Link>
                <Link to="/pass">PassVerifier</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
    )
}
