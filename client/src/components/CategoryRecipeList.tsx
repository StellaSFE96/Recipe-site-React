import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import RecipeCard from "./RecipeCard";
import styled from "styled-components";

const StyledWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`

const RecipesByCategoryList = () => {
    const [recipes, setRecipes] = useState<any>([]);
    const { categoryId } = useParams()
    useEffect(() => {
        const fetchRecipes = async () => {
            const recipes = await fetch(`http://localhost:3000/categories/${categoryId}/recipes`)
            .then(res => res.json())
            setRecipes(recipes);
            console.log(recipes);
        }
        fetchRecipes();
    }, [categoryId])
    return (
        <div>
            <StyledWrapper>
                {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
                <p>Funkar eller ej?</p>
            </StyledWrapper>
        </div>
    )
}
export default RecipesByCategoryList;