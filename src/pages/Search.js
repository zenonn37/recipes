import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchRecipes } from "../actions/recipeActions";
import RecipeList from "../components/RecipeList";

const Search = () => {
  const dispatch = useDispatch();
  const [recipe, setRecipe] = useState("");
  const { recipes } = useSelector(state => state.recipes);

  useEffect(() => {
    //dispatch(searchRecipes());
  }, [dispatch]);

  const onSearch = () => {};

  return (
    <div>
      <form onSubmit={onSearch}>
        <input type="text" />

        <button>Search</button>
      </form>
    </div>
  );
};

export default Search;
