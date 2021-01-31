import React, {useState, useEffect} from "react"; 
import Recipe from './Recipe'
import './App.css';

const App = () => {

  /* For edamam API */
  const API_ID = "";
  const API_KEY = "";

  const [nutrition, setNutrition] = useState([]);
  const [search, setSearch] = useState("");
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    getRecipe()
  }, [searchTerm]);

  const getRecipe = async() => {
      const response = await fetch(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`);
      const data = await response.json();
      setNutrition(data.hits);
  }
  
  const getSearch = event => {
    event.preventDefault();
    setSearchTerm(search);
  }

  const changeTerm = event => {
    setSearch(event.target.value);
  }

  return (
    <div className= "App">
      <form onSubmit = {getSearch} className = "food-search-form">
        <input 
          className = "food-search-input" 
          type = "text" 
          value = {search}
          onChange = {changeTerm} 
        />
        <button className = "food-search-button" type = "submit">
          Search
        </button>
      </form> 
      {nutrition.map(recipe =>(
        <Recipe 
        label = {recipe.recipe.label}
        calories = {recipe.recipe.calories}
        dietLabels = {recipe.recipe.dietLabels}
        healthLabels = {recipe.recipe.healthLabels}
        totalNutrients = {recipe.recipe.totalNutrients}
        img = {recipe.recipe.image}/>
      ))}
    </div>
  );
};

export default App;
