import React from 'react';

const Recipe = ({label, calories, dietLabels, url, img}) => {
    return(
        <div class = "recipe">
            <img src = {img} alt = "" />
            <h2 class = "recipe_name">{label}</h2>
            <br></br>
            <h5 class = "recipe_calories">{(Math.round(parseFloat(calories)*100)/100).toFixed(2)} Kcal</h5>
            <h5 class = "recipe_label">{dietLabels}</h5>
            <p>{url}</p>
        </div>
    );
};


export default Recipe;
