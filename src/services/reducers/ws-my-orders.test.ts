import wsMyOrdersReducer, { TWSMyOrdersState } from './ws-my-orders';
import { WS_CONNECTION_START_MY_ORDERS, WS_ON_ERROR_MY_ORDERS, WS_CONNECTION_CLOSE_MY_ORDERS, WS_ON_MESSAGE_MY_ORDERS } from '../types/wsActionTypes';
import { TWSMyOrdersActions } from '../actions/ws-my-orders';

describe('wsMyOrdersReducer', () => {
  const initialState: TWSMyOrdersState = {
    wsConnected: false,
    lastMessage: null,
    error: undefined,
  };

  // Test case for WS_CONNECTION_START_MY_ORDERS action
  it('should handle WS_CONNECTION_START_MY_ORDERS action', () => {
    const action: TWSMyOrdersActions = {
      type: WS_CONNECTION_START_MY_ORDERS
    };

    const expectedState: TWSMyOrdersState = {
      ...initialState,
      wsConnected: true
    };

    expect(wsMyOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for WS_ON_ERROR_MY_ORDERS action
  it('should handle WS_ON_ERROR_MY_ORDERS action', () => {
    const errorMessage = 'Connection error';
    const action: TWSMyOrdersActions = {
      type: WS_ON_ERROR_MY_ORDERS,
      payload: errorMessage
    };

    const expectedState: TWSMyOrdersState = {
      ...initialState,
      error: errorMessage,
      wsConnected: false
    };

    expect(wsMyOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for WS_CONNECTION_CLOSE_MY_ORDERS action
  it('should handle WS_CONNECTION_CLOSE_MY_ORDERS action', () => {
    const action: TWSMyOrdersActions = {
      type: WS_CONNECTION_CLOSE_MY_ORDERS
    };

    const expectedState: TWSMyOrdersState = {
      ...initialState,
      wsConnected: false
    };

    expect(wsMyOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for WS_ON_MESSAGE_MY_ORDERS action
  it('should handle WS_ON_MESSAGE_MY_ORDERS action', () => {
    const message = { id: 1, text: 'New message' };
    const action: TWSMyOrdersActions = {
      type: WS_ON_MESSAGE_MY_ORDERS,
      payload: message
    };

    const expectedState: TWSMyOrdersState = {
      ...initialState,
      lastMessage: message
    };

    expect(wsMyOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  // Test case for unknown action
  it('should return the current state for unknown action', () => {
    const unknownAction: TWSMyOrdersActions = {
      type: 'UNKNOWN_ACTION'
    };

    expect(wsMyOrdersReducer(initialState, unknownAction)).toEqual(initialState);
  });
});
