import { Dispatch } from 'redux';
import { SOMETHING_FAILED } from "../middleware/logger";
import { fetchWithRefresh, ApiResponse } from "../../utils/api";
import { CREATE_ORDER, 
         CLEAR_ORDER, 
         CLEAR_BURGER_CONSTRUCTOR } from "../../constants";

interface Data {
    // Define the structure of your data object
    // Add necessary properties here
}

interface CreateOrderAction {
    type: typeof CREATE_ORDER;
    orderId: string;
}

interface ClearOrderAction {
    type: typeof CLEAR_ORDER;
}

interface ClearBurgerConstructorAction {
    type: typeof CLEAR_BURGER_CONSTRUCTOR;
}

type ActionTypes =
    | CreateOrderAction
    | ClearOrderAction
    | ClearBurgerConstructorAction
    | { type: typeof SOMETHING_FAILED; error: Error };

export const createOrder = (data: Data) => (dispatch: Dispatch<ActionTypes>) => {
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
    }).then((response: ApiResponse<{ order: { number: string } }>) => {
        dispatch({
            type: CREATE_ORDER,
            orderId: response.data.order.number,
        });
        dispatch({
            type: CLEAR_BURGER_CONSTRUCTOR,
        });
    })
    .catch((error: Error) => {
        dispatch({
            type: SOMETHING_FAILED,
            error,
        });
    });
};
