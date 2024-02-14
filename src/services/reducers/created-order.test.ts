import createdOrder from './created-order';
import { CREATE_ORDER, CLEAR_ORDER } from '../../constants';
import { TCreateOrderActionTypes } from '../actions/created-order';

describe('createdOrder reducer', () => {
  const initialState = {
    orderId: null
  };

  it('should handle CREATE_ORDER', () => {
    const action: TCreateOrderActionTypes = {
      type: CREATE_ORDER,
      orderId: '12345'
    };

    const expectedState = {
      orderId: '12345'
    };

    expect(createdOrder(initialState, action)).toEqual(expectedState);
  });

  it('should handle CLEAR_ORDER', () => {
    const currentState = {
      orderId: '12345'
    };

    const action: TCreateOrderActionTypes = {
      type: CLEAR_ORDER
    };

    expect(createdOrder(currentState, action)).toEqual(initialState);
  });
});
