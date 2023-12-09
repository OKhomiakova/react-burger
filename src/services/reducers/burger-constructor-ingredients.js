import { ADD_BURGER_INGREDIENT } from "../actions/burger-constructor-ingredients";

const initialState = []; 
  
const burgerIngredients = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BURGER_INGREDIENT:
          return [
            ...state, ingredient
          ]
        default:
          return state;
      }
};

export default burgerIngredients;