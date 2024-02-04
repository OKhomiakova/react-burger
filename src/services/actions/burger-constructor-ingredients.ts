import { v4 as uuid4 } from 'uuid';

export const ADD_BURGER_INGREDIENT = 'ADD_BURGER_INGREDIENT';
export const DELETE_BURGER_INGREDIENT = 'DELETE_BURGER_INGREDIENT';
export const UPDATE_BURGER_INGREDIENTS_ORDER = 'UPDATE_BURGER_INGREDIENTS_ORDER';
export const CHANGE_ORDER = 'CHANGE_ORDER';


export const addBurgerIngredient = (ingredient) => ({
    type: ADD_BURGER_INGREDIENT,
    ingredient: {
        ...ingredient, // используем `spread`, чтобы поменять ссылку на объект. Таким образом `redux` обновит его в хранилище
       uniqueId: uuid4()  // и добавляем в объект новое поле, которое потом будет использовано в `key`
    }
});

export const deleteBurgerIngredient = (position) => ({
    type: DELETE_BURGER_INGREDIENT,
    position,
});

export const updateBurgerIngredient = () => ({
    type: UPDATE_BURGER_INGREDIENTS_ORDER,
});


export const changeOrder = (prevPos, newPos) => ({
    type: CHANGE_ORDER,
    payload: { prevPos, newPos },
});
