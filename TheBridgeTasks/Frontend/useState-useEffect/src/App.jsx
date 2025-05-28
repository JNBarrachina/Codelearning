import './App.css'
import { useState, useEffect } from 'react'

import { NameList } from './components/NameList'
import { Teacher } from './components/Teacher'
import { InputValidation } from './components/InputValidation'

function App() {
    const [name, setName] =  useState("Sofía")

    const [password, setPassword] =  useState("")
    
    return (
        <>
        
        <InputValidation />

        
        {/* <NameList setName={setName}/>
        <Teacher teacherName={name} /> */}

        </>
    )
}

export default App
