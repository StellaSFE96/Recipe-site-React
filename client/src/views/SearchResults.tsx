import React, { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { RecipeType } from '../types/RecipeTypes';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import RecipeCard from '../components/RecipeCard';

const SearchResults = () => {
	const { searchResult } = useParams();
	const [ searchedRecipe, setSearchedRecipe ] = useState<RecipeType[]>([]);

	useEffect(() => {
		const getSearched = async () => {
			const res = await fetch(`http://localhost:3000/recipes?search=${searchResult}`).then((data) => data.json());
			console.log(res, res.data);
			setSearchedRecipe(res);
		};
		getSearched();
	}, []);

	return (
		<StyledList>
			{searchedRecipe.map((recipe: any) => (
				<Link to={`/Recipe/${recipe._id}`}>
					<RecipeCard key={recipe._id} recipe={recipe} />
				</Link>
			))}
		</StyledList>
	);
};

const StyledList = styled.div`
	display: flex;
	flex-wrap: wrap;
	justify-content: space-evenly;
	margin-top: 2rem;
`;

export default SearchResults;
