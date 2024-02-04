import { Dispatch } from 'redux';
import { SOMETHING_FAILED } from "../middleware/logger";
import { request } from "../../utils/check-response";
import { SET_ALL_INGREDIENTS } from "../../constants";
import { TIngredientType } from "../../utils/types"

export interface IIngredient {
  ingredient: TIngredientType;
}

export interface ISetAllIngredientsAction {
  type: typeof SET_ALL_INGREDIENTS;
  ingredients: IIngredient[];
}

export type TActionTypes = ISetAllIngredientsAction | { type: typeof SOMETHING_FAILED; error: Error };

// Action creator to set all ingredients
export const setAllIngredients = () => (dispatch: Dispatch<TActionTypes>) => {
  request({
    endpoint: 'ingredients',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }).then((response: response<{ data: IIngredient[] }>) => {
    dispatch({
      type: SET_ALL_INGREDIENTS,
      ingredients: response.data,
    });
  })
  .catch((error: Error) => {
    dispatch({
      type: SOMETHING_FAILED,
      error,
    });
  });
};
