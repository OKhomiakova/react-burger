import { CREATE_ORDER, CLEAR_ORDER } from "../../constants";
import { TApplicationActions } from "../types";

export type TCreatedOrderState = {
  orderId: string | null;
}

const initialState: TCreatedOrderState = {
  orderId: null
};
  
const createdOrder = (state: TCreatedOrderState = initialState, action: TApplicationActions): TCreatedOrderState => {
  switch (action.type) {
    case CREATE_ORDER:
      return { ...state, orderId: action.orderId };
    case CLEAR_ORDER:
      return { ...state, orderId: null };
    default:
      return state;
  }
};

export default createdOrder;
