import allIngredients, { TAllIngredientsState } from './all-ingredients';
import { SET_ALL_INGREDIENTS } from '../../constants';
import { TAllIngredientsActionTypes } from '../actions/all-ingredients';
import { TIngredientType } from '../../utils/types';

describe('allIngredients reducer', () => {
  const initialState: TAllIngredientsState = [];

  it('should return the initial state', () => {
    const action: TAllIngredientsActionTypes = { type: '' };
    expect(allIngredients(undefined, action)).toEqual(initialState);
  });

  it('should handle SET_ALL_INGREDIENTS', () => {
    const ingredients: TIngredientType[] = [
      { id: '1', name: 'Ingredient 1', image: 'image1.jpg' },
      { id: '2', name: 'Ingredient 2', image: 'image2.jpg' }
    ];

    const action: TAllIngredientsActionTypes = {
      type: SET_ALL_INGREDIENTS,
      ingredients: ingredients
    };

    const expectedState: TAllIngredientsState = [...ingredients];

    expect(allIngredients(initialState, action)).toEqual(expectedState);
  });

  it('should handle unknown action type', () => {
    const action: TAllIngredientsActionTypes = { type: 'UNKNOWN_ACTION' };
    expect(allIngredients(initialState, action)).toEqual(initialState);
  });
});
