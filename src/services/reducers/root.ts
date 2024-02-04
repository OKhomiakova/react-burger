import { combineReducers, Reducer } from 'redux';
import allIngredients, { AllIngredientsState } from './all-ingredients';
import burgerIngredients, { BurgerIngredientsState } from './burger-constructor-ingredients';
import createdOrder, { CreatedOrderState } from './created-order';
import user, { UserState } from './user';

// Define the shape of the root state
export interface RootState {
    allIngredients: AllIngredientsState;
    burgerIngredients: BurgerIngredientsState;
    createdOrder: CreatedOrderState;
    user: UserState;
}

// Combine reducers with RootState
const rootReducer: Reducer<RootState> = combineReducers({
    allIngredients,
    burgerIngredients,
    createdOrder,
    user,
});

export default rootReducer;
