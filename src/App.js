import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData";

function App() {
  const [recipes, setRecipes] = useState(RecipeData);

  // TODO: Add the ability for the <RecipeList /> component to list, edit and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.

  //create a recipe function - change state of setRecipes with new array of new rceipe, and all old recipes
  const createRecipe = (newRecipe) => {
    setRecipes([newRecipe, ...recipes]);
    //setRecipes((currentRecipes) => [newRecipe, ...currentRecipes]);
  };

  //delete a recipe function - change state with filtered recipes that inclues all but index to delete
  const deleteRecipe = (indexToDelete) => {
    setRecipes(recipes.filter((recipe, index) => index !== indexToDelete));
    // setRecipes((currentRecipes) =>
    // currentRecipes.filter((recipe, index) => index !== indexToDelete));
  };
  // the state of recipes is located here in APP.  we will need to manipulate it
  // to create a recipe, show the recipes
  return (
    <div className="App">
      <header>
        <h1>Delicious Food Recipes</h1>
      </header>
      <RecipeList
        createRecipe={createRecipe}
        deleteRecipe={deleteRecipe}
        recipes={recipes}
      />
      <RecipeCreate createRecipe={createRecipe} />
    </div>
  );
}

export default App;
