import { IngredientsList } from "../organisms/IngredientsList"

export const PantryLayout = () => {
    return (
        <main>
            <article>
                <h1>Tu despensa</h1>
                <section className="ingredientsSection">
                    <IngredientsList />
                </section>
                <section className="recipesSection">
                </section>
            </article>
        </main>
    )
}
