import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Header } from './components/organisms/Header'
import { Home } from './components/pages/Home'
import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { PantryLayout } from './components/pages/PantryLayout'
import { NotFound } from "./components/pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                <Route path="/userpantry" element={<PantryLayout />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
