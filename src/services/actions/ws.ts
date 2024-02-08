import { TMessageType } from '../../utils/types';
import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_SEND_MESSAGE,
  WS_GET_MY_ORDERS,
  WS_GET_ALL_ORDERS
} from '../types/wsActionTypes';

export const wsConnectionStart = (url: string) => ({
  type: WS_CONNECTION_START,
  payload: url,
});

export const wsConnectionSuccess = (event: Event) => ({
  type: WS_CONNECTION_SUCCESS,
  payload: event,
});

export const wsConnectionError = (event: Event) => ({
  type: WS_CONNECTION_ERROR,
  payload: event,
});

export const wsConnectionClosed = () => ({
  type: WS_CONNECTION_CLOSED,
});

export const wsGetMyOrders = (message: TMessageType) => ({
  type: WS_GET_MY_ORDERS,
  payload: message,
});

export const wsGetAllOrders = (message: TMessageType) => ({
  type: WS_GET_ALL_ORDERS,
  payload: message,
});

export const wsSendMessage = (message: Event) => ({
  type: WS_SEND_MESSAGE,
  payload: message,
});

interface IWSConnectionStart {
  type: typeof WS_CONNECTION_START;
  payload: string;
}
      
interface IWSConnectionSuccess {
  type: typeof WS_CONNECTION_SUCCESS;
  payload: Event,
}

interface IWSConnectionError {
  type: typeof WS_CONNECTION_ERROR;
  payload: Event,
}
      
interface IWSConnectionClosed {
  type: typeof WS_CONNECTION_CLOSED;
}

interface IWSConnectionGetAlllOrders {
  type: typeof WS_GET_ALL_ORDERS;
  payload: TMessageType,
}

interface IWSConnectionGetMyOrders {
  type: typeof WS_GET_MY_ORDERS;
  payload: TMessageType,
}
      
interface IWSConnectionSendMessage {
  type: typeof WS_SEND_MESSAGE;
  payload: string,
}

export type TWSActions =
          | IWSConnectionStart
          | IWSConnectionSuccess
          | IWSConnectionError
          | IWSConnectionClosed
          | IWSConnectionGetMyOrders
          | IWSConnectionGetAlllOrders
          | IWSConnectionSendMessage;