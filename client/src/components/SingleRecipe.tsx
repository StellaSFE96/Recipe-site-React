import React from 'react';
import { useState, useEffect } from 'react';
import { Params, useParams } from 'react-router-dom';
import styled from 'styled-components';

const RecipePage = () => {
	const [ recipe, setRecipe ] = useState<any>({});
	const { recipeId } = useParams();
	useEffect(() => {
		const fetchRecipe = async () => {
			const recipe = await fetch(`http://localhost:3000/recipes/${recipeId}`).then((res) => res.json());
			setRecipe(recipe);
			console.log(recipe);
		};
		fetchRecipe();
	}, []);
	return (
		<StyledContainer>
			<article className="upperContainer">
				<img src={recipe.imageUrl} alt="" />
				<aside>
					<div>
						<h1>{recipe.title}</h1>
						<h2>{recipe.description}</h2>
					</div>
					<div>
						<p>{recipe.timeInMins} MINUTES </p>
						<p>{recipe.ratings} RATING</p>
					</div>
					<div>
						<h1>INGREDIENTS</h1>
						<ul>
							{recipe.ingredients &&
								recipe.ingredients.map((ingredients: any) => (
									<li key={ingredients.ingredient}>
										{ingredients.amount} {ingredients.unit} {ingredients.name}
									</li>
								))}
						</ul>
					</div>
				</aside>
			</article>
			<article className="lowerContainer">
				<div className="instructions">
					<h1>INSTRUCTIONS</h1>
					<ol>
						{recipe.instructions &&
							recipe.instructions.map((instructions: any) => (
								<li key={instructions.instruction}> {instructions.step} </li>
							))}
					</ol>
				</div>
			</article>
		</StyledContainer>
	);
};

const StyledContainer = styled.div`
	background-color: #f8eaec;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	padding-bottom: 6rem;

	& article {
		margin-top: 4rem;
		width: 80%;
		display: flex;
		justify-content: space-around;
	}
	& .lowerContainer {
		display: flex;
		flex-direction: column;
		/* border: #95bfd5 dotted 2px; */
	}
	& ul {
		list-style-type: "🥄";
		list-style-position: outside;
		/* margin: 0; */
		/* padding: 0; */
	}
	& ul li {
		padding-left: 2rem;
		margin-top: 1rem;
		color: #40515a;
	}
	& ol {
		list-style-position: outside;
		/* margin: 0; */
		/* padding: 0; */
	}
	& ol li {
		/* padding-left: 2rem; */
		margin-top: 1rem;
		color: #40515a;
	}
	& aside {
		margin: 1rem;
		padding: 2rem;
		text-align: left;
		display: flex;
		flex-direction: column;
		border: #95bfd5 dotted 2px;
	}
	& img {
		margin: 1rem 0;
		border-radius: 30px;
		height: max-content;
	}
	& h1 {
		font-size: 2rem;
		color: #7c9bac;
		margin: 0 0 2rem 0;
	}
	& h2 {
		color: #707f86;
		margin: 0;
	}
	& p {
		font-size: 1rem;
		color: #40515a;
	}
	& .instructions {
		border: #95bfd5 dotted 2px;
		margin: 1rem 5rem;
		padding: 1rem;
	}
`;

export default RecipePage;
