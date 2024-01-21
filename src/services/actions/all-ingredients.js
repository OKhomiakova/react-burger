import { SOMETHING_FAILED } from "../middleware/logger";
import { request } from "../../utils/check-response";

export const SET_ALL_INGREDIENTS = 'SET_ALL_INGREDIENTS';

export const setAllIngredients = () => (dispatch) => {
  request({
    endpoint: 'ingredients',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }
  }).then(response => {
      dispatch({
        type: SET_ALL_INGREDIENTS,
          ingredients: response.data,
      });
    })
    .catch(error => {
      dispatch({
          type: SOMETHING_FAILED,
          error,
      });
    });
};
