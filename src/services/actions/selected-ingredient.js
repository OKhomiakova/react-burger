export const SET_INGREDIENT_DETAILS = 'SET_INGREDIENT_DETAILS';
export const DELETE_INGREDIENT_DETAILS = 'DELETE_INGREDIENT_DETAILS';

export const setIngredientDetails = (data) => ({
    type: SET_INGREDIENT_DETAILS,
    ingredient: data.ingredient,
});

export const deleteIngredientDetails = () => ({
    type: DELETE_INGREDIENT_DETAILS,
});