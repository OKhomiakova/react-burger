import { SET_ALL_INGREDIENTS } from "../../constants";
import type { TAllIngredientsActionTypes } from "../actions/all-ingredients";
import { TIngredientType } from "../../utils/types";

export type TAllIngredientsState = TIngredientType[];

const initialState: TAllIngredientsState = [];

const allIngredients = (state = initialState, action: TAllIngredientsActionTypes): TIngredientType[] => {
    switch (action.type) {
        case SET_ALL_INGREDIENTS:
            return action.ingredients;
        default:
            return state;
    }
};

export default allIngredients;
