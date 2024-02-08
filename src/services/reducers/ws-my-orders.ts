import { Reducer } from 'redux';
import { TMessageType } from '../../utils/types';
import { TWSMyOrdersActions } from '../actions/ws-my-orders';
import {
  WS_CONNECTION_START_MY_ORDERS,
  WS_ON_ERROR_MY_ORDERS,
  WS_CONNECTION_CLOSE_MY_ORDERS,
  WS_ON_MESSAGE_MY_ORDERS,
} from '../types/wsActionTypes';

type TWSMyOrdersState = {
  wsConnected: boolean,
  lastMessage: TMessageType | null,
  error: string | undefined;
}

const initialState: TWSMyOrdersState = {
  wsConnected: false,
  lastMessage: null,
  error: undefined,
};

const wsMyOrdersReducer: Reducer<TWSMyOrdersState, TWSMyOrdersActions> = (state = initialState, action: TWSMyOrdersActions) => {
  switch (action.type) {
    case WS_CONNECTION_START_MY_ORDERS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    case WS_ON_ERROR_MY_ORDERS:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    case WS_CONNECTION_CLOSE_MY_ORDERS:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    case WS_ON_MESSAGE_MY_ORDERS:
      return {
        ...state,
        error: undefined,
        lastMessage: action.payload,
      };
    default:
      return state;
  }
};

export default wsMyOrdersReducer;

