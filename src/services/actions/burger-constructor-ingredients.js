export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT';
export const DELETE_BURGER_INGREDIENT = 'DELETE_BURGER_INGREDIENT';
export const UPDATE_BURGER_INGREDIENTS_ORDER = 'UPDATE_BURGER_INGREDIENTS_ORDER';

export const addBurgerIngredient = (ingredient) => ({
    type: ADD_BURGER_INGREDIENT,
    ingredient,
});

export const deleteBurgerIngredient = (position) => ({
    type: DELETE_BURGER_INGREDIENT,
    position,
});

export const changeOrder = (prevPos, newPos) => ({
    type: 'change_order',
    payload: { prevPos, newPos },
});
