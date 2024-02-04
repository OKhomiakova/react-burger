import { SET_ALL_INGREDIENTS, AllIngredientsActionTypes } from "../actions/all-ingredients";

const initialState: string[] = []; // Change string[] to the type of your ingredients

const allIngredients = (state = initialState, action: AllIngredientsActionTypes): string[] => {
    switch (action.type) {
        case SET_ALL_INGREDIENTS:
            return action.ingredients;
        default:
            return state;
    }
};

export default allIngredients;
