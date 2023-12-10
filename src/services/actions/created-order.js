import { SOMETHING_FAILED } from "../middleware/logger";
import { request } from "../../utils/check-response";

export const CREATE_ORDER = 'CREATE_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const CLEAR_BURGER_CONSTRUCTOR = 'CLEAR_BURGER_CONSTRUCTOR';

export const createOrder = (data) => (dispatch) => {
    dispatch({
      type: CLEAR_ORDER,
    });
    request('orders', { method: 'POST', body: JSON.stringify(data), headers: {
      "Content-Type": "application/json",
    }})
      .then(response => {
        dispatch({
          type: CREATE_ORDER,
          orderId: response.order.number,
        });
        dispatch({
          type: CLEAR_BURGER_CONSTRUCTOR,
        })
      })
      .catch(error => {
        dispatch({
          type: SOMETHING_FAILED,
          error,
        });
      });
};

