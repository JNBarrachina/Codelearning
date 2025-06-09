import { useState, useEffect } from "react"

export const IngredientsList = () => {
    const [ingredientsList, setIngredientsList] = useState([])

    const getUserIngredients = async () => {
        fetch("http://localhost:8080/ingredients", {
            headers: {
                "Content-type": "application/json",
                "authorization": `${localStorage.getItem("accessToken")}`
            },
            method: "GET",
        })

        .then(async (res) => {
            const data = await res.json()
            setIngredientsList(data)
        })
    }

    useEffect(() => {
        getUserIngredients()
    }, [])
    
    return (
        <>
        <h2>Tus ingredientes</h2>
        <section>
            {ingredientsList.map((ingredient, index) => {
                return <p key={index}>{ingredient.name}: {ingredient.quantity}</p>
            })}
        </section>
        </>
    )
}
