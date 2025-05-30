import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { InputValidation } from './components/InputValidation'
import { Contador } from './components/Contador'
import { UserRegisterForm } from './components/UserRegisterForm'
import { Team } from './components/Team'
import { NotFound } from './components/NotFound'

function App() {
    
    return (
        <>
            <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/count" element={<Contador />} />
                    <Route path="/pass" element={<InputValidation />} />
                    <Route path="/team" element={<Team />} />
                    <Route path="/register" element={<UserRegisterForm />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </BrowserRouter>

        </>
    )
}

export default App
