import { Link } from 'react-router-dom'

import "./Header.scss"

import { useContext, useEffect } from 'react'
import { useState } from 'react'

export const Header = () => {
    const [headerLink, setHeaderLink] = useState()
    const userLogged = localStorage.getItem("accessToken")

    useEffect(() => {
        if (userLogged){
            setHeaderLink(<Link to="/dashboard">Tu despensa</Link>)
        }
        else{
            setHeaderLink(<Link to="/login">Login</Link>)
        }
    }, [])
    
    return (
        <>
        <header className="headerContainer">
            <p className="headerTitle">Azafrán</p>
            <nav className="headerNav">
                <Link to="/">Home</Link>
                {headerLink}
                <Link to="/register">Register</Link>
            </nav>
        </header>
        </>
    )
}
