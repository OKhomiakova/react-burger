import { SET_ALL_INGREDIENTS } from "../../constants";
import { TIngredientType } from "../../utils/types";
import { TApplicationActions } from "../types";

export type TAllIngredientsState = TIngredientType[];

const initialState: TAllIngredientsState = [];

const allIngredients = (state = initialState, action: TApplicationActions): TIngredientType[] => {
    console.log(action.type);
    switch (action.type) {
        case SET_ALL_INGREDIENTS:
            return action.ingredients;
        default:
            return state;
    }

};

export default allIngredients;
