import burgerIngredients, { TBurgerIngredientsState } from './burger-constructor-ingredients';
import {
  ADD_BURGER_INGREDIENT,
  DELETE_BURGER_INGREDIENT,
  CHANGE_ORDER,
  CLEAR_BURGER_CONSTRUCTOR
} from '../../constants';
import { TBurgerIngredientsActionTypes } from '../actions/burger-constructor-ingredients';
import { TIngredientType } from '../../utils/types';

describe('burgerIngredients reducer', () => {
  const initialState: TBurgerIngredientsState = {
    bun: undefined,
    notBun: [],
  };

  it('should return the initial state', () => {
    const action: TBurgerIngredientsActionTypes = { type: '' };
    expect(burgerIngredients(undefined, action)).toEqual(initialState);
  });

  it('should handle ADD_BURGER_INGREDIENT', () => {
    const bunIngredient: TIngredientType = { id: '1', name: 'Bun', type: 'bun' };
    const notBunIngredient: TIngredientType = { id: '2', name: 'Tomato', type: 'notBun' };

    const action1: TBurgerIngredientsActionTypes = {
      type: ADD_BURGER_INGREDIENT,
      ingredient: bunIngredient
    };

    const action2: TBurgerIngredientsActionTypes = {
      type: ADD_BURGER_INGREDIENT,
      ingredient: notBunIngredient
    };

    const expectedState1: TBurgerIngredientsState = { bun: bunIngredient, notBun: [] };
    const expectedState2: TBurgerIngredientsState = { bun: undefined, notBun: [notBunIngredient] };

    expect(burgerIngredients(initialState, action1)).toEqual(expectedState1);
    expect(burgerIngredients(initialState, action2)).toEqual(expectedState2);
  });

  it('should handle DELETE_BURGER_INGREDIENT', () => {
    const initialState: TBurgerIngredientsState = {
      bun: undefined,
      notBun: [{ id: '1', name: 'Tomato', type: 'notBun' }]
    };

    const action: TBurgerIngredientsActionTypes = {
      type: DELETE_BURGER_INGREDIENT,
      position: 0
    };

    const expectedState: TBurgerIngredientsState = { bun: undefined, notBun: [] };

    expect(burgerIngredients(initialState, action)).toEqual(expectedState);
  });

  // Test cases for CHANGE_ORDER
  it('should handle CHANGE_ORDER', () => {
    const initialIngredients: TIngredientType[] = [
      { id: '1', name: 'Tomato', type: 'notBun' },
      { id: '2', name: 'Lettuce', type: 'notBun' },
      { id: '3', name: 'Cheese', type: 'notBun' }
    ];

    const initialState: TBurgerIngredientsState = {
      bun: undefined,
      notBun: initialIngredients
    };

    const action: TBurgerIngredientsActionTypes = {
      type: CHANGE_ORDER,
      payload: { prevPos: 0, newPos: 2 }
    };

    const expectedIngredients: TIngredientType[] = [
      { id: '2', name: 'Lettuce', type: 'notBun' },
      { id: '3', name: 'Cheese', type: 'notBun' },
      { id: '1', name: 'Tomato', type: 'notBun' }
    ];

    const expectedState: TBurgerIngredientsState = {
      bun: undefined,
      notBun: expectedIngredients
    };

    expect(burgerIngredients(initialState, action)).toEqual(expectedState);
  });

  // Test cases for CLEAR_BURGER_CONSTRUCTOR
  it('should handle CLEAR_BURGER_CONSTRUCTOR', () => {
    const initialState: TBurgerIngredientsState = {
      bun: { id: '1', name: 'Bun', type: 'bun' },
      notBun: [
        { id: '2', name: 'Tomato', type: 'notBun' },
        { id: '3', name: 'Cheese', type: 'notBun' }
      ]
    };

    const action: TBurgerIngredientsActionTypes = {
      type: CLEAR_BURGER_CONSTRUCTOR
    };

    const expectedState: TBurgerIngredientsState = {
      bun: undefined,
      notBun: []
    };

    expect(burgerIngredients(initialState, action)).toEqual(expectedState);
  });
});
