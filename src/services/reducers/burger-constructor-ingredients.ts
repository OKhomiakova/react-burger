import { 
  ADD_BURGER_INGREDIENT, 
  DELETE_BURGER_INGREDIENT, 
  CHANGE_ORDER,
  CLEAR_BURGER_CONSTRUCTOR 
} from "../../constants";
import { TBurgerIngredientsActionTypes } from "../actions/burger-constructor-ingredients";
import { TIngredientType} from "../../utils/types";

export type TBurgerIngredientsState = {
  bun?: TIngredientType,
  notBun: TIngredientType[],
}

const initialState: TBurgerIngredientsState = {
  bun: undefined,
  notBun: [],
}; 

const burgerIngredients = (state: TBurgerIngredientsState = initialState, action: TBurgerIngredientsActionTypes): TBurgerIngredientsState => {
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
          ...state.notBun.slice(action.position + 1)
        ],
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
