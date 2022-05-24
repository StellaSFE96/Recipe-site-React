import React from 'react';
import ReactStars from 'react-stars';
import styled from 'styled-components';
import { postRating } from '../API/index';

interface IRating {
	recipeRating: Array<number>;
	recipeId: string;
	edit: boolean;
}

const starColor = '#f9e471';
const unratedStarColor = '#c7cccf';
const StyledRating = styled(ReactStars)`
  display: flex;
  justify-content: center;
`;

const calculateAverage = (rating: any) => {
	const sum = rating.reduce((a: number, b: number) => a + b);
	return sum / rating.length;
};

const Ratings = ({ recipeRating, recipeId, edit }: IRating) => {
	const ratingChange = async (newRating: any) => {
		await postRating(recipeId, newRating);
	};
	return (
		<StyledRating
			count={5}
			edit={edit}
			value={calculateAverage(recipeRating)}
			onChange={ratingChange}
			half={true}
			size={30}
			color1={unratedStarColor}
			color2={starColor}
		/>
	);
};

export default Ratings;
