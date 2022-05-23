import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeType } from '../types/RecipeTypes';
import RecipeCard from './RecipeCard';
import { fetchRecipesByCategoryQuery } from '../API';
import { Link } from 'react-router-dom';

const SearchBar = () => {
	// const [ recipes, setRecipes ] = useState<any>([]);
	// const [ query, setQuery ] = useState('');
	// const { id } = useParams<string>();
	const [ input, setInput ] = useState('');

	// useEffect(() => {
	// 	if (query) {
	// 		fetchRecipesByCategoryQuery(id, query).then((recipes) => setRecipes(recipes.data));
	// 	}
	// }, []);

	return (
		<StyledSearchBar>
			<form>
				<input
					type="text"
					id="searchText"
					placeholder="search recipes"
					value={input}
					onChange={(e) => setInput(e.target.value)}
				/>
				{/* <img src={require('../assets/magni.png')} alt="icon" width={25} height={25} /> */}
			</form>
			<Link to={`searched/${input}`}>
				<img src={require('../assets/magni.png')} alt="icon" width={25} height={25} />
			</Link>
			{/* {recipes.map((recipe: any) => <RecipeCard key={recipe._id} recipe={recipe} />)} */}
			<div>
				<p>Recipe Collection</p>
			</div>
		</StyledSearchBar>
	);
};

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
	& a {
		position: relative;
		top: 20px;
		right: 100px;
	}
`;

export default SearchBar;
