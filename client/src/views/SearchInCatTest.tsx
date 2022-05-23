import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import styled from 'styled-components';
import { fetchRecipesByCategoryQuery, fetchRecipesByCategory } from '../API';

const RecipesByCategoryList = () => {
	const [ query, setQuery ] = useState('');
	const [ recipes, setRecipes ] = useState([]);
	const { categoryId } = useParams();
	// useEffect(
	// 	() => {
	// 		if (query) {
	// 			//.then means that the function will be executed after the fetch is done
	// 			fetchRecipesByCategoryQuery(categoryId, query).then((recipes) => setRecipes(recipes.data));
	// 		} else {
	// 			fetchRecipesByCategory(categoryId).then((recipes) => setRecipes(recipes.data));
	// 		}
	// 	},
	// 	[ query, categoryId ]
	// );
	// useEffect(
	// 	() => {
	// 		const fetchRecipes = async () => {
	// 			const recipes = await fetch(`http://localhost:3000/category/${categoryId}`).then((res) => res.json());
	// 			setRecipes(recipes);
	// 			console.log(recipes);
	// 		};
	// 		fetchRecipes();
	// 	},
	// 	[ categoryId ]
	// );
	return (
		<div>
			<StyledSearchBar>
				<form>
					<input type="text" placeholder="search" value={query} onChange={(e) => setQuery(e.target.value)} />
					<img src={require('../assets/magni.png')} alt="icon" width={25} height={25} />
				</form>
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
		top: 9px;
	}
`;
export default RecipesByCategoryList;
