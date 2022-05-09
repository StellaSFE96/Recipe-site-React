import React from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Desserts & Cocktails</h1>
        <p className="App-subheader">a simple and sweet recipe collection</p>
      </header>
      <div>
      <RecipeCard/>
      </div>
      
    </div>
  );
}

export default App;
