import { useState, useEffect } from 'react'

export const Contador = () => {

    const [contador, setContador] = useState(0);

    useEffect(() => {
      let savedContador = parseInt(localStorage.getItem('contador'));
      setContador(savedContador);
      
    }, []);

    useEffect(() => {
      localStorage.setItem('contador', contador);
    }, [contador]);

    return (
        <section style={{ display: 'flex', gap: '2.2rem'}}>
            <button onClick={() => setContador(contador - 1)}>-</button>
            <h2>{contador}</h2>
            <button onClick={() => setContador(contador + 1)}>+</button>
        </section>
    )
}
