import React, {useState, useEffect} from "react"; 
import axios from "axios";
import Recipe from '../../Recipe';

function RecipePage() {

    const API_ID = "01ce84a2";
    const API_KEY = "4425f5693109289d5b139712e39a4634";
  
    const [search, setSearch] = useState("");
    const [nutrition, setNutrition] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      getRecipe()
    }, [searchTerm]);
  
    const getRecipe = async() => {
      const data = await axios(`https://api.edamam.com/search?q=${searchTerm}&app_id=${API_ID}&app_key=${API_KEY}`);
      const hits = data.data.hits;
      setNutrition(hits);
      console.log({nutrition});
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
        {/* <div className = "Title">
        APP-NAME
        </div> */}
        <form className = "food-search-form" onSubmit = {getSearch}>
            <input 
            className = "food-search-input" 
            type = "text" 
            value = {search}
            onChange = {changeTerm} />
            <button className = "food-search-button" type = "submit">
            Search
            </button>
        </form> 
        <div className = "recipes"> 
        {nutrition.map(recipe =>(
            <Recipe 
            label = {recipe.recipe.label}
            calories = {recipe.recipe.calories}
            dietLabels = {recipe.recipe.dietLabels[0]}
            url = {recipe.recipe.url}
            /*healthLabels = {recipe.recipe.healthLabels}
            totalNutrients = {recipe.recipe.totalNutrients}*/
            img = {recipe.recipe.image}/>
        ))}
        </div>
        <div className = "nutritions">
          <h2>Nutritional Information</h2>
          <hr></hr>
          <p>Calories = <b>1136.93 kcal</b> / 2400 Kcal (recommended)</p>
          <p>Protein = <b>42.9 g </b>/ 48 g (recommended)</p>
          <p>Fat = <b>35.2 g</b>/ 54 g (recommended)</p>
        </div>
        <div className = "nutritions">
          <h2><a href="https://www.amazon.com/cart/localmarket?ref_=&almBrandId=VUZHIFdob2xlIEZvb2Rz" target="blank">Your Customized Amazon Fresh Cart!</a></h2>
        </div>
        </div>
    );
};

export default RecipePage;
