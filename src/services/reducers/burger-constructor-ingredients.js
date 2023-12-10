import { ADD_BURGER_INGREDIENT, DELETE_BURGER_INGREDIENT } from "../actions/burger-constructor-ingredients";

const initialState = []; 

const burgerIngredients = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BURGER_INGREDIENT:
          if (action.ingredient.type === 'bun') {
            return [...state.filter(x => x.type !== 'bun'), action.ingredient];
          }
          return [
            ...state, action.ingredient
          ]
        case DELETE_BURGER_INGREDIENT:
          const ingredientToDeleteIndex = state.findIndex(x => x.type === action.ingredient.type);
          return state.filter((_, index) => index !== ingredientToDeleteIndex);
        case 'UPDATE_BURGER_INGREDIENTS_ORDER':
          return action.payload;
        default:
          return state;
      }
};

export default burgerIngredients;