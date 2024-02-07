import { SOMETHING_FAILED } from "../middleware/logger";
import { fetchWithRefresh } from "../../utils/api";
import { CREATE_ORDER, 
         CLEAR_ORDER,
         CLEAR_BURGER_CONSTRUCTOR } from "../../constants";
import { AppDispatch, AppThunk } from '../types';

interface Data {
    ingredients: string[];
}

interface ICreateOrderAction {
    type: typeof CREATE_ORDER;
    orderId: string;
}

interface IClearOrderAction {
    type: typeof CLEAR_ORDER;
}

export type TCreateOrderActionTypes =
    | ICreateOrderAction
    | IClearOrderAction
    | { type: typeof SOMETHING_FAILED; error: Error };

export const createOrder: AppThunk = (data: Data) => (dispatch: AppDispatch) => {
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
    }).then((response: { order: { number: string } }) => {
        console.log('createOrder', response);
        dispatch({
            type: CREATE_ORDER,
            orderId: response.order.number,
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