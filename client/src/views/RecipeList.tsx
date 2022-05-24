import RecipeCard from '../components/RecipeCard';
import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { RecipeType } from '../types/RecipeTypes';
import { useParams } from 'react-router-dom';
// import { fetchRecipes } from "../API";

const RecipeList = () => {
	const [ searchRecipe, setSearchRecipe ] = useState('');
	const [ recipes, setRecipes ] = useState<RecipeType[]>([]);
	const { searched } = useParams();

	useEffect(
		() => {
			const getSearched = async (searchRecipe: string) => {
				const recipes = await fetch(
					`${process.env.REACT_APP_API_BASE_URL}/recipes/search/${searchRecipe}`
				).then((res) => res.json());
				// console.log(recipes);
				setRecipes(recipes);
			};
			const fetchRecipes = async () => {
				const recipes = await fetch(`${process.env.REACT_APP_API_BASE_URL}/recipes`).then((data) =>
					data.json()
				);
				setRecipes(recipes);
				// console.log(recipes);
			};

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
						placeholder="search recipes..."
						value={searched}
						onChange={(e) => setSearchRecipe(e.target.value)}
					/>
					<img src={require('../assets/magni.png')} alt="icon" width={20} height={20} />
				</form>
				<div>
					<p>Recipe Collection</p>
				</div>
			</StyledSearchBar>
			<StyledList>{recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)}</StyledList>;
		</div>
	);
};

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
		top: 6px;
	}
`;
export default RecipeList;
