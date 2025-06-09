import { Link } from 'react-router-dom'

import "./Header.scss"

import { useContext, useEffect } from 'react'

export const Header = () => {

    return (
        <>
        <header className="headerContainer">
            <p className="headerTitle">Azafrán</p>
            <nav className="headerNav">
                <Link to="/">Home</Link>
                <Link to="/login">Login</Link>
                <Link to="/register">Register</Link>
            </nav>
        </header>
        </>
    )
}
