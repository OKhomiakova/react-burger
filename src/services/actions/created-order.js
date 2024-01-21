import { SOMETHING_FAILED } from "../middleware/logger";
import { fetchWithRefresh } from "../../utils/api";

export const CREATE_ORDER = 'CREATE_ORDER';
export const CLEAR_ORDER = 'CLEAR_ORDER';
export const CLEAR_BURGER_CONSTRUCTOR = 'CLEAR_BURGER_CONSTRUCTOR';

export const createOrder = (data) => (dispatch) => {
    const accessToken = localStorage.getItem('accessToken');
    dispatch({
      type: CLEAR_ORDER,
    });
    fetchWithRefresh({
      endpoint: 'orders',
      options: {
        method: 'POST', 
        body: JSON.stringify(data), 
        headers: {
          "Content-Type": "application/json",
          "Authorization": `${accessToken}`,
        }
      }
    }).then(response => {
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

