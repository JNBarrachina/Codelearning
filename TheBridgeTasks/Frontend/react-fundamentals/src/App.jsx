import './App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { InputValidation } from './components/InputValidation'
import { Contador } from './components/Contador'
import { UserRegisterForm } from './components/UserRegisterForm'

function App() {
    
    return (
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/count" element={<Contador />} />
                    <Route path="/pass" element={<InputValidation />} />
                    <Route path="/register" element={<UserRegisterForm />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
