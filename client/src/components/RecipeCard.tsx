import styled from "styled-components";
import { Link } from "react-router-dom";
import { RecipeType } from "../types/RecipeTypes";

const RecipeCard = (props: {
    recipe: RecipeType;
    children?: React.ReactNode | React.ReactNode[];
    handleNavigation?: Function;

    
}) => {
    function handleClick(id: string) {
        if (props.handleNavigation) {
          props.handleNavigation(id);
        }
    };

    return (
        <StyledRecipeCard onClick={() => {
            if (props.recipe._id) handleClick(props.recipe._id);
        }}>
           <img src={props.recipe.imageUrl} alt="recipe-image"/>
            <div>
                {/* <Link to= {`/recipe/${props.recipe._id}`}> */}
                <h1 className="recTitle">{props.recipe.title}</h1>
                {/* </Link> */}
                <p>{props.recipe.description}</p>
            </div>
            <div className="details">
                <p>{Object.keys(props.recipe.ingredients).length} Ingredients</p>
                <p>{props.recipe.timeInMins} Minutes</p>
            </div>
        </StyledRecipeCard>
    );
}

const StyledRecipeCard = styled.div`
 width: 40vh;
 height: 70vh;
 background-color: #f5d4d9;
 display: flex;
 flex-direction: column;
 /* border-radius: 2rem; */
 margin: 20px;
 text-decoration: none;

& > img {
    align-self: center;
    width: 100%;
    height: 70%;
    background-color: #e4e471;
}
& .recTitle {
    font-size: 18px;
    text-decoration: none;
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

export default RecipeCard;