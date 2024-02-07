import { combineReducers } from 'redux';
import allIngredients from './all-ingredients';
import burgerIngredients from './burger-constructor-ingredients';
import createdOrder from './created-order';
import user from './user';
import { wsReducer } from './ws';

export const rootReducer = combineReducers({
    allIngredients,
    burgerIngredients,
    createdOrder,
    user,
    wsReducer,
});
