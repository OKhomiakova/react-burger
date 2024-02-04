import { CREATE_ORDER, CLEAR_ORDER, OrderActionTypes } from "../actions/created-order";

interface State {
  orderId: string | null;
}

const initialState: State = {
  orderId: null
};
  
const createdOrder = (state: State = initialState, action: OrderActionTypes): State => {
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
