import './App.css';
import { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import {
  fetchRecipes, fetchRecipesByQuery,
  fetchCategories,
  fetchRecipesByCategory,
  fetchRecipesByCategoryAndQuery,
} from "./API/index";

// Components
import RecipeList from './components/RecipeList';
import CategoryList from './components/CategoryList';
import Categories from './components/Categories';
import Header from './components/Header';

const App = () => {
  return (
    <div className="App">
      <Header/>
      <Categories />
      <Routes>
        <Route path="/" element={<RecipeList />} />
        {/* <Route path="/recipes/:id" element={<Recipe />} /> */}
     </Routes>
      <div>
        {/* <CategoryList/> */}
      {/* <Categories/>
      <RecipeList/> */}
      </div>
      
    </div>
  );
}

export default App;
