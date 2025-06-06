import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router'

import { Login } from './components/pages/Login'
import { Register } from './components/pages/Register'
import { NotFound } from "./components/pages/NotFound"

function App() {

  return (
    <>
      <BrowserRouter>
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
                {/* <Route path="/userpantry" element={<PantryLayout />} /> */}
                <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
