import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';

const Header = () => {
	return (
		<header className="App-header">
			<Link to={`/`}>
				<h1>Desserts & Cocktails</h1>
			</Link>
			{/* <h1>Desserts & Cocktails</h1> */}
			{/* <p className="App-subheader">a simple and sweet recipe collection</p> */}
		</header>
	);
};

export default Header;
