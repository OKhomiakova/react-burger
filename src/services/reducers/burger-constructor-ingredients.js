import { ADD_BURGER_INGREDIENT, DELETE_BURGER_INGREDIENT } from "../actions/burger-constructor-ingredients";

const initialState = {
  bun: undefined,
  notBun: [],
}; 

const burgerIngredients = (state = initialState, action) => {
    switch (action.type) {
        case ADD_BURGER_INGREDIENT:
          if (action.ingredient.type === 'bun') {
            return {
              bun: action.ingredient,
              notBun: state.notBun,
            };
          }
          return {
            bun: state.bun,
            notBun: [...state.notBun, action.ingredient]
          };
        case DELETE_BURGER_INGREDIENT:
          return {
            bun: state.bun,
            notBun: [
              ...state.notBun.slice(0, action.position),
              ...state.notBun.slice(action.position + 1, state.length)
            ],
          };
        case 'UPDATE_BURGER_INGREDIENTS_ORDER':
          return {
            bun: state.bun,
            notBun: action.newNotBun,
          };
        default:
          return state;
      }
};

export default burgerIngredients;