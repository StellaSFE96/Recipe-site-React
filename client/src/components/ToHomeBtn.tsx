import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

export default function ToHomeBtn() {
	return (
		<Link to={`/`}>
			<StyledButton>
				<p>go back</p>
			</StyledButton>
		</Link>
	);
}

const StyledButton = styled.button`
	height: 4rem;
	width: 10rem;
	background-color: #abcde4;
	margin: 0px;
	padding: 0px;
	border: none;
	cursor: pointer;
	:hover {
		background-color: #d8aed8;
	}
`;
