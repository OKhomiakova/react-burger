import { v4 as uuidv4 } from 'uuid';
import { 
    ADD_BURGER_INGREDIENT,
    DELETE_BURGER_INGREDIENT,
    CHANGE_ORDER,
    CLEAR_BURGER_CONSTRUCTOR } from '../../constants';
import { TIngredientType} from "../../utils/types";

interface IAddBurgerIngredientAction {
    type: typeof ADD_BURGER_INGREDIENT;
    ingredient: TIngredientType & { uniqueId: string };
}

interface IDeleteBurgerIngredientAction {
    type: typeof DELETE_BURGER_INGREDIENT;
    position: number;
}

interface IChangeOrderAction {
    type: typeof CHANGE_ORDER;
    payload: { prevPos: number; newPos: number };
}

export interface IClearBurgerConstructorAction {
    type: typeof CLEAR_BURGER_CONSTRUCTOR;
}

export type TBurgerIngredientsActionTypes =
    | IAddBurgerIngredientAction
    | IDeleteBurgerIngredientAction
    | IChangeOrderAction
    | IClearBurgerConstructorAction;

export const addBurgerIngredient = (ingredient: TIngredientType): IAddBurgerIngredientAction => ({
    type: ADD_BURGER_INGREDIENT,
    ingredient: {
        ...ingredient,
        uniqueId: uuidv4()
    }
});

export const deleteBurgerIngredient = (position: number): IDeleteBurgerIngredientAction => ({
    type: DELETE_BURGER_INGREDIENT,
    position,
});

export const changeOrder = (prevPos: number, newPos: number): IChangeOrderAction => ({
    type: CHANGE_ORDER,
    payload: { prevPos, newPos },
});
