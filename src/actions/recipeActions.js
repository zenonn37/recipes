import {
  GET_RECIPE,
  ADD_RECIPE,
  CURRENT_RECIPE,
  SHOW_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE
} from "../types";
import recipes from "../api/recipe";

export const searchRecipes = () => {
  return async dispatch => {
    try {
      const res = await recipes.get("/food/corn");
      console.log(res.data.hits);

      dispatch({
        type: GET_RECIPE,
        payload: res.data.hits
      });
    } catch (error) {}
  };
};
