export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT';

export const addBurgerIngredient = (ingredient) => ({
    type: ADD_BURGER_INGREDIENT,
    ingredient,
});