import { CREATE_ORDER } from "../actions/created-order";

const initialState = {};
  
const createdOrder = (state = initialState, action) => {
    switch (action.type) {
        case CREATE_ORDER:
          return action.orderId;
        default:
          return state;
    }
};

export default createdOrder;