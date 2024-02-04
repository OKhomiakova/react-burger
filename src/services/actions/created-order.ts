import { Dispatch } from 'redux';
import { SOMETHING_FAILED } from "../middleware/logger";
import { fetchWithRefresh } from "../../utils/api";
import { CREATE_ORDER, 
         CLEAR_ORDER,
         CLEAR_BURGER_CONSTRUCTOR } from "../../constants";
import { TIngredientType } from '../../utils/types';
import { IClearBurgerConstructorAction } from './burger-constructor-ingredients';

interface Data {
    ingredients: TIngredientType[];
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

export const createOrder = (data: Data) => (dispatch: Dispatch<TCreateOrderActionTypes | IClearBurgerConstructorAction>) => {
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
    }).then((response: { data: { order: { number: string } } }) => {
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
