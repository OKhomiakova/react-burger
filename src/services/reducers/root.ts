import { combineReducers } from 'redux';
import allIngredients from './all-ingredients';
import burgerIngredients from './burger-constructor-ingredients';
import createdOrder from './created-order';
import user from './user';
import wsAllOrdersReducer from './ws-all-orders';
import wsMyOrdersReducer from './ws-my-orders';

export const rootReducer = combineReducers({
    allIngredients,
    burgerIngredients,
    createdOrder,
    user,
    wsAllOrdersReducer,
    wsMyOrdersReducer
});
