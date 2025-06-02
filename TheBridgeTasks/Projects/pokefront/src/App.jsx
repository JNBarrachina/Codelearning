import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { NotFound } from './components/NotFound'
import { TypeSelector } from './components/TypeSelector'

function App() {
  return (
    <>
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<TypeSelector />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
