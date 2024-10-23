import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";

const Recipes = () => {

    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        fetch("recipes.json")
            .then(response => response.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div className="md:basis-9/12 grid grid-cols-1 md:grid-cols-2 gap-4">
            {
                recipes.map(recipe => <Recipe
                    key={recipe.recipe_id}
                    recipe={recipe}
                ></Recipe>)
            }
        </div>
    );
};

export default Recipes;