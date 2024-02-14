import wsAllOrdersReducer from './ws-all-orders';
import { WS_CONNECTION_START_ALL_ORDERS, WS_ON_ERROR_ALL_ORDERS, WS_CONNECTION_CLOSE_ALL_ORDERS, WS_ON_MESSAGE_ALL_ORDERS } from '../types/wsActionTypes';
import { TWSAllOrdersActions } from '../actions/ws-all-orders';
import { CLEAR_BURGER_CONSTRUCTOR } from '../../constants';
import { TApplicationActions } from '../types';

import type { TWSAllOrdersState } from './ws-all-orders';

describe('wsAllOrdersReducer', () => {
  const initialState: TWSAllOrdersState = {
    wsConnected: false,
    lastMessage: null,
    error: undefined,
  };

  it('should handle WS_CONNECTION_START_ALL_ORDERS action', () => {
    const action: TWSAllOrdersActions = {
      type: WS_CONNECTION_START_ALL_ORDERS,
      payload: 'wss://example.com'
    };

    const expectedState: TWSAllOrdersState = {
      ...initialState,
      wsConnected: true
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle WS_ON_ERROR_ALL_ORDERS action', () => {
    const errorMessage = 'Connection error';
    const action: TWSAllOrdersActions = {
      type: WS_ON_ERROR_ALL_ORDERS,
      payload: errorMessage
    };

    const expectedState: TWSAllOrdersState = {
      ...initialState,
      error: errorMessage,
      wsConnected: false
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle WS_CONNECTION_CLOSE_ALL_ORDERS action', () => {
    const action: TWSAllOrdersActions = {
      type: WS_CONNECTION_CLOSE_ALL_ORDERS
    };

    const expectedState: TWSAllOrdersState = {
      ...initialState,
      wsConnected: false
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle WS_ON_MESSAGE_ALL_ORDERS action', () => {
    const message = {
      orders: [],
      success: true,
      total: 0,
      totalToday: 0,
    };
    const action: TWSAllOrdersActions = {
      type: WS_ON_MESSAGE_ALL_ORDERS,
      payload: message
    };

    const expectedState: TWSAllOrdersState = {
      ...initialState,
      lastMessage: message
    };

    expect(wsAllOrdersReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the current state for unknown action', () => {
    const unknownAction: TApplicationActions = {
      type: CLEAR_BURGER_CONSTRUCTOR
    };

    expect(wsAllOrdersReducer(initialState, unknownAction)).toEqual(initialState);
  });
});
