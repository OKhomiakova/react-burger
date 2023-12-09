import { combineReducers } from 'redux';
import allIngredients from './all-ingredients';
import burgerIngredients from './burger-constructor-ingredients';
import selectedIngredient from './selected-ingredient';
import createdOrder from './created-order';

// Корневой редьюсер
const rootReducer = combineReducers({
    allIngredients,
    burgerIngredients,
    selectedIngredient,
    createdOrder
});

export default rootReducer;