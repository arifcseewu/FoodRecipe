import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import "./App.css";

const App = () => {
  const APP_ID = "5f5dd854";
  const APP_KEY = "d3bf2182352a486abccdf2ec53103d41";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  const getRecipe = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    // console.log(response);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data);
  };

  useEffect(() => {
    getRecipe();
  }, [query]);

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch =
    ((e) => {
      e.preventDefault();
      setQuery(search);
      setSearch("");
    },
    12000);

  return (
    <div className="App">
      <form className="Search-form" onSubmit={() => getSearch}>
        <input
          className="Search-bar"
          type="text"
          value={search}
          onChange={updateSearch}
        />
        <button className="Search-button" type="submit">
          Search
        </button>
      </form>

      <div className="Recipe_wrapper">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calorie={recipe.recipe.calories}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
