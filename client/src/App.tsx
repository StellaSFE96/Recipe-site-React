import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import {
	fetchRecipes,
	fetchRecipesByQuery,
	fetchCategories,
	fetchRecipesByCategory,
	fetchRecipesByCategoryAndQuery
} from './API/index';

// Components
import RecipeList from './components/RecipeList';
import CategoryRecipeList from './components/CategoryRecipeList';
import Categories from './components/Categories';
import Header from './components/Header';
import SingleRecipe from './components/SingleRecipe';
import { NotFound } from './views/NotFound';
import Footer from './components/Footer';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Categories />
			<Routes>
				<Route path="/" element={<RecipeList />} />
				<Route path="category/:categoryId" element={<CategoryRecipeList />} />
				<Route path="recipe/:recipeId" element={<SingleRecipe />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
