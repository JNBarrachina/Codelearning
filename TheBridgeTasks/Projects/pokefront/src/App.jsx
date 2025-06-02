import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

import { Header } from './components/Header'
import { Home } from './components/Home'
import { PokemonList } from './components/PokemonList'
import { NotFound } from './components/NotFound'

function App() {
  return (
    <>
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/pokemon" element={<PokemonList />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
