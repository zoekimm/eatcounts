import React from 'react';

const Recipe = ({label, calories, dietLabels, healthLabels, totalNutrients, img}) => {
    return(
        <div>
            <h1>{label}</h1>
            <p>{dietLabels}</p>
            <p>{healthLabels}</p>
            <p>{calories}</p>
            <p>{totalNutrients}</p>
            <img src = {img} alt = "" />
        </div>
    );
};

export default Recipe;

