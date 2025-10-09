import { BrowserRouter, Routes, Route } from 'react-router-dom'

import { ThemeContext } from './contexts/ThemeContext'

import { Header } from './components/organisms/Header'
import { Home } from './components/templates/Home'
import { NotFound } from './components/templates/NotFound'
import { MainLayout } from './components/templates/MainLayout'
import { PokemonsLayout } from './components/organisms/PokemonsLayout'
import { DragonBallLayout } from './components/organisms/DragonBallLayout'
import { useState } from 'react'

function App() {

  const [theme, setTheme] = useState("dark")

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
      <BrowserRouter>
            <Header />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/characters" element={<MainLayout leftContent={<PokemonsLayout/>} rightContent={<DragonBallLayout />} />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
      </BrowserRouter>
      </ThemeContext.Provider>
    </>
  )
}

export default App
