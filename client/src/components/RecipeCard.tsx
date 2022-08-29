import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { RecipeType } from '../types/RecipeTypes';
import Ratings from '../components/RatingStars';

// const RecipeCard = (props: {
// 	recipe: RecipeType;
// 	children?: React.ReactNode | React.ReactNode[];

const RecipeCard = ({ recipe }: any) => {
	return (
		<StyledRecipeCard>
			<img src={recipe.imageUrl} alt="recipe-image" />
			<div>
				<Link to={`/recipe/${recipe._id}`}>
					<h1 className="recTitle">{recipe.title}</h1>
				</Link>
				<p className="description">{recipe.description}</p>
				<span className="rating">
					<Ratings edit={false} recipeId={recipe._id} recipeRating={recipe.ratings} />
				</span>
			</div>
			<div className="details">
				<p>{Object.keys(recipe.ingredients).length} INGREDIENTS</p>
				<p>{recipe.timeInMins} MINUTES</p>
			</div>
		</StyledRecipeCard>
	);
};

const StyledRecipeCard = styled.div`
	width: 40vh;
	height: 82vh;
	background-color: #f5d4d9;
	display: flex;
	flex-direction: column;
	/* border-radius: 2rem; */
	margin: 20px;
	text-decoration: none;
	:hover {
		transform: scale(1.02);
	}

	& > img {
		align-self: center;
		width: 100%;
		height: 70%;
		background-color: #e4e471;
	}
	& .recTitle {
		font-size: 15px;
		text-decoration: none;
	}
	& .details {
		display: flex;
		justify-content: space-evenly;
		padding: 0px;
		font-size: 10px;
	}
	& .details p {
		margin: 0px;
	}
	& h1 {
		color: #c672a8;
	}
	& a {
		text-decoration: none;
	}
	& .rating {
		margin: 0px;
		padding: 0px;
	}
	& .description {
		margin-bottom: 0px;
		font-size: 13px;
	}
`;

export default RecipeCard;
