import { DOMAIN_URL } from "../../constants";
import { SOMETHING_FAILED } from "../middleware/logger";

export const SET_ALL_INGREDIENTS = 'SET_ALL_INGREDIENTS';

export const setAllIngredients = (dispatch) => {
    fetch(DOMAIN_URL)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        dispatch({
            type: SOMETHING_FAILED,
            status: response.status
        });
      })
      .then(response => {
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
