import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import styled from 'styled-components';
import { fetchRecipesByCategoryQuery, fetchRecipesByCategory } from '../API';
import { RecipeType } from '../types/RecipeTypes';
import ToHomeBtn from '../components/ToHomeBtn';

const RecipesByCategoryList = () => {
	const [ recipes, setRecipes ] = useState<any>([]);
	const { categoryId } = useParams();
	useEffect(
		() => {
			const fetchRecipes = async () => {
				const recipes = await fetch(
					`${process.env.REACT_APP_API_BASE_URL}/category/${categoryId}`
				).then((res) => res.json());
				setRecipes(recipes);
				console.log(recipes);
			};
			fetchRecipes();
		},
		[ categoryId ]
		// const [ query, setQuery ] = useState('');
		// const [ recipes, setRecipes ] = useState<any>([]);
		// const { categoryId } = useParams();
		// useEffect(
		// 	() => {
		// 		if (query) {
		// 			fetchRecipesByCategoryQuery(categoryId, query).then((recipes) => setRecipes(recipes.data));
		// 		} else {
		// 			fetchRecipesByCategory(categoryId).then((recipes) => setRecipes(recipes.data));
		// 			console.log(recipes);
		// 		}
		// 	},
		// 	[ query ]
	);
	return (
		<div>
			<StyledSearchBar>
				<ToHomeBtn />
				{/* <form>
					<input
						type="text"
						placeholder="search recipes..."
						// value={categoryId}
						onChange={(e) => setRecipes(e.target.value)}
					/>
					<img src={require('../assets/magni.png')} alt="icon" width={20} height={20} />
				</form> */}
				<div>
					<p>Recipe Collection</p>
				</div>
			</StyledSearchBar>
			<StyledWrapper>
				{recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)}
			</StyledWrapper>
		</div>
	);
};

const StyledWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
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

export default RecipesByCategoryList;
