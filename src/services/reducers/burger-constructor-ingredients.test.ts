import burgerIngredients from './burger-constructor-ingredients';
import {
  ADD_BURGER_INGREDIENT,
  DELETE_BURGER_INGREDIENT,
  CHANGE_ORDER,
  CLEAR_BURGER_CONSTRUCTOR
} from "../../constants";

describe('burgerIngredients reducer', () => {
  const initialState = {
    bun: undefined,
    notBun: [],
  };

  it('should handle ADD_BURGER_INGREDIENT with bun', () => {
    const bunIngredient = {
      _id: "60666c42cc7b410027a1a9b1",
      name: "Краторная булка N-200i",
      type: "bun",
      proteins: 80,
      fat: 24,
      carbohydrates: 53,
      calories: 420,
      price: 1255,
      image: "https://code.s3.yandex.net/react/code/bun-02.png",
      image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
      image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
      __v: 0,
      uniqueId: 'bun-unique-id'
    };
    const action = {
      type: ADD_BURGER_INGREDIENT,
      ingredient: bunIngredient
    };
    const expectedState = {
      ...initialState,
      bun: bunIngredient
    };
    expect(burgerIngredients(initialState, action)).toEqual(expectedState);
  });

  it('should handle ADD_BURGER_INGREDIENT with notBun', () => {
    const notBunIngredient = {
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
      uniqueId: 'notbun-unique-id'
    };
    const action = {
      type: ADD_BURGER_INGREDIENT,
      ingredient: notBunIngredient
    };
    const expectedState = {
      ...initialState,
      notBun: [...initialState.notBun, notBunIngredient]
    };
    expect(burgerIngredients(initialState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_BURGER_INGREDIENT', () => {
    const initialStateWithIngredients = {
      bun: { 
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
        uniqueId: 'bun-unique-id' 
      },
      notBun: [
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
          uniqueId: 'notbun-unique-id-1' 
        }, 
        { 
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price:424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
          uniqueId: 'notbun-unique-id-2' 
        }
      ]
    };
    const action = {
      type: DELETE_BURGER_INGREDIENT,
      position: 1
    };
    const expectedState = {
      ...initialStateWithIngredients,
      notBun: [
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
          uniqueId: 'notbun-unique-id-1' 
        }
      ],
    };
    expect(burgerIngredients(initialStateWithIngredients, action)).toEqual(expectedState);
  });

  it('should handle CHANGE_ORDER', () => {
    const initialStateWithIngredients = {
      bun: { 
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
        uniqueId: 'bun-unique-id' 
      },
      notBun: [
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
          uniqueId: 'notbun-unique-id-1' 
        }, 
        { 
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price:424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
          uniqueId: 'notbun-unique-id-2' 
        }
      ]
    };
    const action = {
      type: CHANGE_ORDER,
      payload: { prevPos: 0, newPos: 1 }
    };
    const expectedState = {
      bun: { 
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
        uniqueId: 'bun-unique-id' 
      },
      notBun: [
        { 
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price:424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
          uniqueId: 'notbun-unique-id-2' 
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
          uniqueId: 'notbun-unique-id-1' 
        } 
      ]
    };
    expect(burgerIngredients(initialStateWithIngredients, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_BURGER_CONSTRUCTOR', () => {
    const initialStateWithIngredients = {
      bun: { 
        _id: "60666c42cc7b410027a1a9b1",
        name: "Краторная булка N-200i",
        type: "bun",
        proteins: 80,
        fat: 24,
        carbohydrates: 53,
        calories: 420,
        price: 1255,
        image: "https://code.s3.yandex.net/react/code/bun-02.png",
        image_mobile: "https://code.s3.yandex.net/react/code/bun-02-mobile.png",
        image_large: "https://code.s3.yandex.net/react/code/bun-02-large.png",
        __v: 0,
        uniqueId: 'bun-unique-id' 
      },
      notBun: [
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
          uniqueId: 'notbun-unique-id-1' 
        }, 
        { 
          _id: "60666c42cc7b410027a1a9b6",
          name: "Биокотлета из марсианской Магнолии",
          type: "main",
          proteins: 420,
          fat: 142,
          carbohydrates: 242,
          calories: 4242,
          price:424,
          image: "https://code.s3.yandex.net/react/code/meat-01.png",
          image_mobile: "https://code.s3.yandex.net/react/code/meat-01-mobile.png",
          image_large: "https://code.s3.yandex.net/react/code/meat-01-large.png",
          __v: 0,
          uniqueId: 'notbun-unique-id-2' 
        }
      ]
    };
    const action = { type: CLEAR_BURGER_CONSTRUCTOR };
    expect(burgerIngredients(initialStateWithIngredients, action)).toEqual(initialState);
  });
});
