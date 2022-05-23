import RecipeCard from '../components/RecipeCard';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RecipeType } from '../types/RecipeTypes';
import { useParams } from 'react-router-dom';
// import { fetchRecipes } from "../API";

const StyledList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 2rem;
`;

const StyledSearchBar = styled.div`
	width: 100%;
	height: 3.8rem;
	background-color: pink;
	display: flex;
	justify-content: space-between;

	& input {
		margin: 0.4rem 0.6rem;
		padding: 1rem;
		width: 13rem;
		border-radius: 25px;
		border: none;
		outline-color: pink !important;
	}
	& p {
		color: rgb(134, 162, 172);
		margin-right: 20px;
		word-spacing: 5px;
	}
	& img {
		position: relative;
		top: 9px;
	}
`;

const RecipeList = () => {
	const [ recipes, setRecipes ] = useState<any>([]);
	const fetchRecipes = async () => {
		const recipes = await fetch('http://localhost:3000/recipes').then((res) => res.json());
		setRecipes(recipes);
		// console.log(recipes);
	};

	const [ searchRecipe, setSearchRecipe ] = useState('');
	const { searched } = useParams();
	const getSearched = async (searchRecipe: string) => {
		const recipeResults = await fetch(`http://localhost:3000/recipes/search/${searched}`).then((res) => res.json());
		console.log(recipeResults);
		setSearchRecipe(recipeResults);
	};

	useEffect(
		() => {
			if (searchRecipe) {
				getSearched(searchRecipe);
			} else {
				fetchRecipes();
			}
		},
		[ searchRecipe ]
	);
	return (
		<div>
			<StyledSearchBar>
				<form>
					<input
						type="text"
						placeholder="search"
						value={searched}
						onChange={(e) => setSearchRecipe(e.target.value)}
					/>
					<img src={require('../assets/magni.png')} alt="icon" width={25} height={25} />
				</form>
				<div>
					<p>Recipe Collection</p>
				</div>
			</StyledSearchBar>
			<StyledList>{recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)}</StyledList>;
		</div>
	);
};
export default RecipeList;
