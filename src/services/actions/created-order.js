import { ORDERS_DOMAIN_URL } from "../../constants";
import { SOMETHING_FAILED } from "../middleware/logger";

export const CREATE_ORDER = 'CREATE_ORDER';

export const createOrder = (data) => (dispatch) => {
    dispatch({
      type: 'clear_order',
    });
    fetch(ORDERS_DOMAIN_URL, { method: 'POST', body: JSON.stringify(data), headers: {
      "Content-Type": "application/json",
    }})
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

