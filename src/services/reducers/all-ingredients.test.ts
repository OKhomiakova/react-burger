import allIngredients, { TAllIngredientsState } from './all-ingredients';
import { ADD_BURGER_INGREDIENT, SET_ALL_INGREDIENTS } from '../../constants';
import { TAllIngredientsActionTypes } from '../actions/all-ingredients';
import { TIngredientType } from '../../utils/types';
import { SOMETHING_FAILED } from '../middleware/logger';

describe('allIngredients reducer', () => {
  const initialState: TAllIngredientsState = [];

  it('should handle SOMETHING_FAILED', () => {
    const action = { type: SOMETHING_FAILED, error: new Error('An error occured') };
    expect(allIngredients([], action)).toEqual(initialState);
  });

  it('should handle SET_ALL_INGREDIENTS', () => {
    const ingredients: TIngredientType[] = [
      { 
        _id: '60666c42cc7b410027a1a9b1',
        name: 'Краторная булка N-200i',
        type: 'bun',
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: 'https://code.s3.yandex.net/react/code/bun-02.png',
        image_mobile: 'https://code.s3.yandex.net/react/code/bun-02-mobile.png',
        image_large: 'https://code.s3.yandex.net/react/code/bun-02-large.png',
        __v: 0,
        uniqueId: '12345' 
      },
      {
        _id: "60666c42cc7b410027a1a9b5",
        name: "Говяжий метеорит (отбивная)",
        type: "main",
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
        __v: 0,
        uniqueId: '54321'
      }
    ];

    const action: TAllIngredientsActionTypes = {
      type: SET_ALL_INGREDIENTS,
      ingredients: ingredients
    };

    const expectedState: TAllIngredientsState = ingredients;

    expect(allIngredients(initialState, action)).toEqual(expectedState);
  });

  it('should handle action from another store part', () => {
    const action = { 
      type: ADD_BURGER_INGREDIENT, 
      ingredient: {
        _id: "60666c42cc7b410027a1a9b5",
        name: "Говяжий метеорит (отбивная)",
        type: "main",
        proteins: 800,
        fat: 800,
        carbohydrates: 300,
        calories: 2674,
        price: 3000,
        image: "https://code.s3.yandex.net/react/code/meat-04.png",
        image_mobile: "https://code.s3.yandex.net/react/code/meat-04-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/meat-04-large.png",
        __v: 0,
        uniqueId: '54321'
      }
    };

    expect(allIngredients(initialState, action)).toEqual(initialState);
  });
});
