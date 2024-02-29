import { Reducer } from 'redux';
import { TMessageType } from '../../utils/types';
import {
  WS_CONNECTION_START_ALL_ORDERS,
  WS_ON_ERROR_ALL_ORDERS,
  WS_CONNECTION_CLOSE_ALL_ORDERS,
  WS_ON_MESSAGE_ALL_ORDERS,
} from '../types/wsActionTypes';

import { TApplicationActions } from '../types';

export type TWSAllOrdersState = {
  wsConnected: boolean,
  lastMessage: TMessageType | null,
  error: string | undefined;
}

export const initialState: TWSAllOrdersState = {
  wsConnected: false,
  lastMessage: null,
  error: undefined,
};

const wsAllOrdersReducer: Reducer<TWSAllOrdersState, TApplicationActions> = (state = initialState, action: TApplicationActions) => {
  switch (action.type) {
    case WS_CONNECTION_START_ALL_ORDERS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_ON_ERROR_ALL_ORDERS:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSE_ALL_ORDERS:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_ON_MESSAGE_ALL_ORDERS:
      return {
        ...state,
        error: undefined,
        lastMessage: action.payload,
      };
    default:
      return state;
  }
};

export default wsAllOrdersReducer;
