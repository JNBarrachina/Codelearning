import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Titulito } from './components/Titulito'
import { Humano } from './components/Humano'
import { FotoHumano } from './components/FotoHumano'

function App() {
  
  const titulos = ["Mi primer proyecto con React", "Mi segundo proyecto con React", "Mi tercer y último proyecto con React"];
  const humansArray = [
    { name: "Juan", age: 20, origin : "Tierra"},
    { name: "Pedro", age: 21, origin : "Marte"},
    { name: "Luis", age: 22, origin : "Jupiter"},
    { name: "Diego", age: 23, origin : "Saturno"},
    { name: "Carlos", age: 24, origin : "Urano"},
    { name: "Sergio", age: 25, origin : "Neptuno"},
  ]
  const humanImgUrl = "https://imgs.search.brave.com/cZ4WF2qbuipZ0HZUo6yaAIQ6q-ZyYoZGQU6EYqAU6NI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vdWlkN0g5/ZnNDQ2hBYWxNY1Bn/cExyVzhLMlFRYUZQ/UW0xakxPNVJ0cXVZ/OC9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTly/Y21sMC9ZUzFoY25S/cGMzUnpMbTl5L1p5/OTFjR3h2WVdSekwy/UmwvWm1GMWJIUXZi/M0IwYVcxcC9lbVZr/THpOWUx6QXZOUzh3/L05UWmhPVEJqTTJV/ek9HUTAvWWpabE16/TmhOVGRsT0dNMC9O/MlV5WmpFNVpERmha/VFF5L05UVTNYekpm/TkRBd2VEUXcvTUM1/cWNHVm4";

    const [count, setCount] = useState()

    const [menu, setMenu] =  useState("inicio")

    const menuData = (menu) => {
      if (menu == "inicio") {
        return titulos.map((titulo) => <Titulito titulo={titulo} />)
      }
      
      if (menu == "humanos") {
        return humansArray.map((humanElem) => <Humano humanProps={humanElem} img={humanImgUrl}/>)
      }
    }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      <div className="mainMenu">
        <button onClick={() => setMenu("inicio")}>
          Inicio
        </button>
        <button onClick={() => setMenu("humanos")}>
          Humanos
        </button>
      </div>

      {menuData(menu)}

      {/* <div className='humansSection'>
          
      </div> */}
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}


export default App
