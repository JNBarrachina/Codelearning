import { BrowserRouter, Routes, Route } from 'react-router-dom'

import './App.css'

function App() {
  return (
    <>
      <BrowserRouter>
            <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<NotFound />} />
                </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
