import styled from 'styled-components';
import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import React from 'react';

const Categories = () => {
	const [ categories, setCategories ] = useState<any[]>([]);
	useEffect(() => {
		const fetchCategories = async () => {
			const categories = await fetch(`${process.env.REACT_APP_API_BASE_URL}/category`).then((res) => res.json());
			setCategories(categories);
		};
		fetchCategories();
	}, []);
	return (
		<StyledCategories>
			{categories.map((category: any) => (
				<NavLink
					to={`/category/${category._id}`}
					key={category}
					style={({ isActive }) => ({
						color: isActive ? '#ffc0cb' : 'azure'
					})}
				>
					<p>
						{category._id} ({category.count})
					</p>
				</NavLink>
			))}
		</StyledCategories>
	);
};

const StyledCategories = styled.div`
	background-color: #719cc1;
	display: flex;
	flex-wrap: wrap;
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
		text-decoration: inherit;
	}
	& p {
		font-size: 1rem;
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
