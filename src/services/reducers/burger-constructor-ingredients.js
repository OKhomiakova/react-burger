import { ADD_BURGER_INGREDIENT, DELETE_BURGER_INGREDIENT, UPDATE_BURGER_INGREDIENTS_ORDER, CHANGE_ORDER } from "../actions/burger-constructor-ingredients";
import { CLEAR_BURGER_CONSTRUCTOR } from "../actions/created-order";

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
        case UPDATE_BURGER_INGREDIENTS_ORDER:
          return {
            bun: state.bun,
            notBun: action.newNotBun,
          };
        case CHANGE_ORDER:
          const { prevPos, newPos } = action.payload;
          const notBun = [...state.notBun];
          const [movedElement] = notBun.splice(prevPos, 1);
          notBun.splice(newPos, 0, movedElement);

          return {
            bun: state.bun,
            notBun,
          };
        case CLEAR_BURGER_CONSTRUCTOR:
          return initialState;
        default:
          return state;
      }
};

export default burgerIngredients;