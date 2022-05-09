import styled from "styled-components";
// import { Link } from "react-router-dom";

const StyledRecipeCard = styled.div`
 width: 45vh;
 height: 60vh;
 background-color: #f5d4d9;
 display: flex;
 flex-direction: column;
 border-radius: 2rem;

& > .image {
    align-self: center;
    width: 100%;
    height: 20rem;
    background-color: #e4e471;
    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;
}
& .recTitle {
    font-size: 20px;
}
& .details {
    display: flex;
    justify-content: space-evenly;
    padding: 0px;
}
& .details p{
    margin: 0px;
}
`;

const RecipeCard = ({recipe}: any) => {
    return (
        <StyledRecipeCard>
            <div className="image"></div>
            <div>
                <h1 className="recTitle">Recipe Title</h1>
                <div className="details">
                    <p>10 Ingredients</p>
                    <p> 1000 Minutes</p>
                </div>
            </div>
            <div>
            <p>Description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quisquam, debitis. Lorem burger.</p>
            </div>
        </StyledRecipeCard>
        // <StyledRecipeCard>
        //     <img src={recipe.imageUrl} alt="recipe-image" />
        //     <div className="image"></div>
        //     <div>
        //         <Link to= {`/recipes/${recipe._id}`}> */}
        //         <h1>{recipe.title}</h1> */}
        //         </Link>
        //         <p>{recipe.description}</p>
        //     </div>
        //     <div>
        //         <h2>{recipe.ingredients.length} Ingredients</h2>
        //         <p>{recipe.timeInMins} Minutes</p>
        //     </div>
        // </StyledRecipeCard>
    )
}

export default RecipeCard;