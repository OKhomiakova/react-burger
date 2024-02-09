import { Dispatch } from 'redux';
import { SOMETHING_FAILED } from "../middleware/logger";
import { request } from "../../utils/check-response";
import { SET_ALL_INGREDIENTS } from "../../constants";
import { TIngredientType} from "../../utils/types";
import { AppThunk } from '../types';

export interface ISetAllIngredientsAction {
  type: typeof SET_ALL_INGREDIENTS;
  ingredients: TIngredientType[];
}

export type TAllIngredientsActionTypes = ISetAllIngredientsAction | { type: typeof SOMETHING_FAILED; error: Error };

// Action creator to set all ingredients
export const setAllIngredients: AppThunk = () => (dispatch) => {
  request({
    endpoint: 'ingredients',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }).then((response: { data: TIngredientType[] }) => {
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
