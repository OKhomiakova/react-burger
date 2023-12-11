import { SET_INGREDIENT_DETAILS, DELETE_INGREDIENT_DETAILS } from "../actions/selected-ingredient";

const initialState = {};
  
const selectedIngredient = (state = initialState, action) => {
    switch (action.type) {
        case SET_INGREDIENT_DETAILS:
          return action.ingredient;
        case DELETE_INGREDIENT_DETAILS:
          return initialState;
        default:
          return state;
    }
};

export default selectedIngredient;