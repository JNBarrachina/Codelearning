import React from 'react'
import { useState, useEffect } from 'react'

export const Team = () => {

    const [team, setTeam] = useState([])
    const [search, setSearch] = useState('')

    const getTeam = async () => {
        await fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(data => {
            console.log("Solicitud exitosa", data);
            
            const teamData = [];
            data.forEach(member => {
                teamData.push({
                    name: member.name,
                    email: member.email,
                    website: member.website
                })
            });

            if (!localStorage.getItem('team')) {
                localStorage.setItem('team', JSON.stringify(teamData));
                setTeam(data)
            }
        })
    }

    const handleSearch = (event) => {
        setSearch(event.target.value)
    }

    getTeam();
    useEffect(() => {
        const team = JSON.parse(localStorage.getItem('team'));

        const filteredTeam = team.filter(member => member.name.toLowerCase().includes(search.toLowerCase()))

        setTeam(filteredTeam)     
    }, [search])
    

    return (
        
            <main>
                <h1>Team</h1>
                <input className='searchMember' type="text" placeholder="Buscar miembro" onChange={handleSearch}/>
                {
                    team.map(member => 
                        <article className='memberBox'>
                            <h2>{member.name}</h2>
                            <p>{member.email}</p>
                            <p>{member.website}</p>
                        </article>
                    )
                }
            </main>
    
    )
}
