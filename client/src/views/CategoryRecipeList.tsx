import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import RecipeCard from '../components/RecipeCard';
import styled from 'styled-components';
import { fetchRecipesByCategoryQuery, fetchRecipesByCategory } from '../API';

const StyledWrapper = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
`;

// const RecipesByCategoryList = () => {
// 	const [ query, setQuery ] = useState('');
// 	const [ recipes, setRecipes ] = useState<any>([]);
// 	const { categoryId } = useParams();
// 	useEffect(
// 		() => {
// 			if (query) {
// 				fetchRecipesByCategoryQuery(categoryId, query).then((recipes) => setRecipes(recipes.data));
// 			} else {
// 				fetchRecipesByCategory(categoryId).then((recipes) => setRecipes(recipes.data));
// 			}
// 		},
// 		[ query ]
// 	);
// 	return (
// 		<div>
// 			<StyledWrapper>
// 				<input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
// 				{recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)}
// 			</StyledWrapper>
// 		</div>
// 	);
// };
// export default RecipesByCategoryList;

const RecipesByCategoryList = () => {
	const [ recipes, setRecipes ] = useState<any>([]);
	const { categoryId } = useParams();
	useEffect(
		() => {
			const fetchRecipes = async () => {
				const recipes = await fetch(`http://localhost:3000/category/${categoryId}`).then((res) => res.json());
				setRecipes(recipes);
				console.log(recipes);
			};
			fetchRecipes();
		},
		[ categoryId ]
	);
	return (
		<div>
			<StyledWrapper>
				{recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)}
			</StyledWrapper>
		</div>
	);
};
export default RecipesByCategoryList;
