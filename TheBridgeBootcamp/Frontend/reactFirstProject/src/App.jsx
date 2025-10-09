import { useState } from 'react'

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Titulito } from './components/Titulito'
import { Humano } from './components/Humano'
import { Heading } from './components/Heading'

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
  const humanImgUrl = "https://imgs.search.brave.com/xMIAXghkBfRcjkhTCAiqGubz9HdD4nkhh8rVb2Qp1rs/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWdz/LnNlYXJjaC5icmF2/ZS5jb20vd2ZJS0pJ/V0lsU2ZndjlKSnJL/bFN6enM3WXJXVFFq/OHVLRGpvR0kycGVn/QS9yczpmaXQ6NTAw/OjA6MDowL2c6Y2Uv/YUhSMGNITTZMeTl3/YVdOei9MbU55WVds/NWIyNHVZMjl0L0x6/SXdNalF0TURrdE1E/Z3YvZDNadFptRlVZ/MVJSYVhWby9VM1ZG/UTA5bmMwTlZaeTUz/L1pXSnc";

  const [menu, setMenu] =  useState("inicio")

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

      <nav className="mainMenu">
        <button onClick={() => setMenu("inicio")}>
          Inicio
        </button>
        <button onClick={() => setMenu("titulos")}>
          Títulos
        </button>
        <button onClick={() => setMenu("humanos")}>
          Humanos
        </button>
      </nav>

      <Heading headingText={menu.toUpperCase()} />
      <section className='humansSection'>
        {menu == "inicio" && <p>Esta es la página de inicio</p>}
        {menu == "titulos" && titulos.map((titulo) => <Titulito titulo={titulo} />)}
        {menu == "humanos" && humansArray.map((humanElem) => <Humano humanProps={humanElem} img={humanImgUrl}/>)}
      </section>
      
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
