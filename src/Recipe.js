import React from "react";
import "./Recipe.component.css";

const Recipe = ({ title, calorie, image, ingredients }) => {
  return (
    <div className="Recipe">
      <h1>{title}</h1>
      <p>
        <span>Total calories: </span>
        {calorie}
      </p>
      <ol>
        {ingredients.map((ingreadient, index) => (
          <li key={index}>{ingreadient.text}</li>
        ))}
      </ol>
      <img className="Image" src={image} alt="pho" />
    </div>
  );
};
export default Recipe;
