import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import React from 'react';

const Categories = () => {
	const [ categories, setCategories ] = useState<any[]>([]);
	useEffect(() => {
		const fetchCategories = async () => {
			const categories = await fetch('http://localhost:3000/category').then((res) => res.json());
			setCategories(categories);
		};
		fetchCategories();
	}, []);
	return (
		<StyledCategories>
			{categories.map((category: any) => (
				<Link to={`/category/${category._id}`} key={category}>
					<p>
						{category._id} ({category.count})
					</p>
				</Link>
			))}
		</StyledCategories>
	);
};

const StyledCategories = styled.div`
	background-color: #719cc1;
	display: flex;
	flex-direction: row;
	align-items: center;
	justify-content: space-evenly;
	text-decoration: none;
	z-index: 300;
	position: sticky;
	top: 0;
	height: 4rem;
	& .category {
		:hover {
			cursor: pointer;
		}
	}
	& a {
		/* color: azure; */
		text-decoration: inherit;
	}
	& p {
		font-size: 1.2rem;
		:hover {
			color: pink;
		}
	}
	& .red {
		color: red;
	}
	& .green {
		color: green;
	}
`;

export default Categories;
