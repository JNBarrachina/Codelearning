import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header className="mainHeader">
            <p className="headerTitle">React Fundamentals</p>
            <ul className="headerNav">
                <li>
                    <Link to="/">Inicio</Link>
                </li>
                <li>
                    <Link to="/count">Contador</Link>
                </li>
                <li>
                    <Link to="/pass">PassVerifier</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
            </ul>
        </header>
    )
}
