import { CREATE_ORDER, CLEAR_ORDER } from "../actions/created-order";

const initialState = null;
  
const createdOrder = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
          return action.orderId;
        case CLEAR_ORDER:
          return initialState;
        default:
          return state;
    }
};

export default createdOrder;