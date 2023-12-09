import { ORDERS_DOMAIN_URL } from "../../constants";
import { SOMETHING_FAILED } from "../middleware/logger";

export const CREATE_ORDER = 'CREATE_ORDER';

export const createOrder = (dispatch) => {
    fetch(ORDERS_DOMAIN_URL, { method: 'POST' })
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
            type: CREATE_ORDER,
            orderId: response.order.number,
        });
      })
      .catch(error => {
        dispatch({
            type: SOMETHING_FAILED,
            error,
        });
    });
};

