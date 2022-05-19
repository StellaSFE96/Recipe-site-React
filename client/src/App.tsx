import './App.css';
// import RecipeCard from './components/RecipeCard';
import RecipeList from './components/RecipeList';
import Categories from './components/Categories';
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
      <Categories/>
      <RecipeList/>
      </div>
      
    </div>
  );
}

export default App;
