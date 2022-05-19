import RecipeCard from "./RecipeCard";
import { useState, useEffect } from "react";
import styled from "styled-components";
// import { fetchRecipes } from "../API";

const StyledList = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
`;

const RecipeList = () => {
    const [recipes, setRecipes] = useState<any>([]);
    useEffect (()=>{
    const fetchRecipes = async () => {
        const recipes = await fetch('http://localhost:3000/recipes').then(res => res.json())
        setRecipes(recipes);
        console.log(recipes);
    }
    fetchRecipes();
    }, [])
    return (
        <StyledList>
            {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe}></RecipeCard>)}
            {/* <div key={recipes._id}><img src={recipes.imageUrl} width={200} alt=""/><div><p>{recipes.title}</p></div></div> */}
        </StyledList>
    )
}
export default RecipeList;


// const RecipeList = () => {
//     const [query, setSearchQuery] = useState("");
//     const searchRecipes = async (query: string) => {
//     const recipes = await fetch(`http:localhost:3000/recipes?search=${query}`) 
//     .then(res => res.json())
//     setRecipes(recipes);
//     }
//     const fetchRecipes = async () => {
//         const recipes = await fetch('http://localhost:3000/recipes').then(res => res.json())
//     setRecipes(recipes);
//     }

//     const [ recipes, setRecipes] = useState<any>([]);
// useEffect (() => {
//     if(query){
//         searchRecipes(query)
//     } else {
//         fetchRecipes();
//     }
// }, [query])

//     return (
//         <div className="recipe-container">

//         </div>
//     )
// }