import { combineReducers } from 'redux';
import allIngredients from './all-ingredients';
import burgerIngredients from './burger-constructor-ingredients';
import createdOrder from './created-order';

// Корневой редьюсер
const rootReducer = combineReducers({
    allIngredients,
    burgerIngredients,
    createdOrder
});

export default rootReducer;