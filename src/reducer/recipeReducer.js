import {
  GET_RECIPE,
  ADD_RECIPE,
  CURRENT_RECIPE,
  SHOW_RECIPE,
  UPDATE_RECIPE,
  DELETE_RECIPE
} from "../types";

const init = {
  recipes: [],
  recipe: ""
};
const recipeReducer = (state = init, action) => {
  switch (action.type) {
    case GET_RECIPE: {
      return {
        ...state,
        recipes: action.payload
      };
    }

    default:
      return state;
  }
};

export default recipeReducer;
