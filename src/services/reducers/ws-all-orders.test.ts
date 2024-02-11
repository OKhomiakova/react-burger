import wsAllOrdersReducer, { initialState } from './ws-all-orders';
import { WS_CONNECTION_START_ALL_ORDERS, WS_ON_ERROR_ALL_ORDERS, WS_CONNECTION_CLOSE_ALL_ORDERS, WS_ON_MESSAGE_ALL_ORDERS } from '../types/wsActionTypes';
import { TWSAllOrdersActions } from '../actions/ws-all-orders';

describe('wsAllOrdersReducer', () => {
  const initialState: initialState = {
    wsConnected: false,
    lastMessage: null,
    error: undefined,
  };

  // Test case for WS_CONNECTION_START_ALL_ORDERS action
  it('should handle WS_CONNECTION_START_ALL_ORDERS action', () => {
    const action: TWSAllOrdersActions = {
      type: WS_CONNECTION_START_ALL_ORDERS
    };

    const expectedState: initialState = {
      ...initialState,
      wsConnected: true
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for WS_ON_ERROR_ALL_ORDERS action
  it('should handle WS_ON_ERROR_ALL_ORDERS action', () => {
    const errorMessage = 'Connection error';
    const action: TWSAllOrdersActions = {
      type: WS_ON_ERROR_ALL_ORDERS,
      payload: errorMessage
    };

    const expectedState: initialState = {
      ...initialState,
      error: errorMessage,
      wsConnected: false
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for WS_CONNECTION_CLOSE_ALL_ORDERS action
  it('should handle WS_CONNECTION_CLOSE_ALL_ORDERS action', () => {
    const action: TWSAllOrdersActions = {
      type: WS_CONNECTION_CLOSE_ALL_ORDERS
    };

    const expectedState: initialState = {
      ...initialState,
      wsConnected: false
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for WS_ON_MESSAGE_ALL_ORDERS action
  it('should handle WS_ON_MESSAGE_ALL_ORDERS action', () => {
    const message = { id: 1, text: 'New message' };
    const action: TWSAllOrdersActions = {
      type: WS_ON_MESSAGE_ALL_ORDERS,
      payload: message
    };

    const expectedState: initialState = {
      ...initialState,
      lastMessage: message
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for unknown action
  it('should return the current state for unknown action', () => {
    const unknownAction: TWSAllOrdersActions = {
      type: 'UNKNOWN_ACTION'
    };

    expect(wsAllOrdersReducer(initialState, unknownAction)).toEqual(initialState);
  });
});
