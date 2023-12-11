import { SET_ALL_INGREDIENTS } from "../actions/all-ingredients";

const initialState = [];

const allIngredients = (state = initialState, action) => {
    switch (action.type) {
      case SET_ALL_INGREDIENTS:
        return action.ingredients;
      default:
        return state;
    }
};

export default allIngredients;