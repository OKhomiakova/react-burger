import { Reducer } from 'redux';
import { TMessageType } from '../../utils/types';
import { TWSActions } from '../actions/ws';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ALL_ORDERS,
  WS_GET_MY_ORDERS,
} from '../types/wsActionTypes';

type TWSState = {
  wsConnected: boolean,
  allOrders: TMessageType | null,
  myOrders: TMessageType | null,
  error?: Event;
}

const initialState: TWSState = {
  wsConnected: false,
  allOrders: null,
  myOrders: null,
};

// Создадим редьюсер для WebSocket
export const wsReducer: Reducer<TWSState, TWSActions> = (state = initialState, action: TWSActions) => {
  switch (action.type) {
    // Опишем обработку экшена с типом WS_CONNECTION_SUCCESS
    // Установим флаг wsConnected в состояние true
    case WS_CONNECTION_SUCCESS:
      return {
        ...state,
        error: undefined,
        wsConnected: true
      };

    // Опишем обработку экшена с типом WS_CONNECTION_ERROR
    // Установим флаг wsConnected в состояние false и передадим ошибку из action.payload
    case WS_CONNECTION_ERROR:
      return {
        ...state,
        error: action.payload,
        wsConnected: false
      };

    // Опишем обработку экшена с типом WS_CONNECTION_CLOSED, когда соединение закрывается
    // Установим флаг wsConnected в состояние false
    case WS_CONNECTION_CLOSED:
      return {
        ...state,
        error: undefined,
        wsConnected: false
      };

    // Опишем обработку экшена с типом WS_GET_MESSAGE
    // Обработка происходит, когда с сервера возвращаются данные
    // В messages передадим данные, которые пришли с сервера
    case WS_GET_ALL_ORDERS:
      console.log("WS_GET_ALL_ORDERS", action.payload);
      return {
        ...state,
        error: undefined,
        allOrders: action.payload,
      };
    case WS_GET_MY_ORDERS:
      console.log("WS_GET_MY_ORDERS", action.payload);
      return {
        ...state,
        error: undefined,
        myOrders: action.payload,
      };
    default:
      return state;
  }
};
