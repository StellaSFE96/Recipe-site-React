import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components and views
import { NotFound } from './views/NotFound';
import Header from './components/Header';
import RecipeList from './views/RecipeList';
import CategoryRecipeList from './views/CategoryRecipeList';
import Categories from './components/Categories';
import SingleRecipe from './views/SingleRecipe';
import Footer from './components/Footer';
import SearchBar from './components/Search';
import SearchResults from './views/SearchResults';

const App = () => {
	return (
		<div className="App">
			<Header />
			<Categories />
			{/* <SearchBar /> */}
			<Routes>
				<Route path="/" element={<RecipeList />} />
				<Route path="category/:categoryId" element={<CategoryRecipeList />} />
				<Route path="recipe/:recipeId" element={<SingleRecipe />} />
				<Route path="searched/:searched" element={<SearchResults />} />
				<Route path="*" element={<NotFound />} />
			</Routes>
			<Footer />
		</div>
	);
};

export default App;
