import {
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_MESSAGE,
  WS_SEND_MESSAGE
} from '../types/wsActionTypes';

export const wsConnectionStart = () => ({
  type: WS_CONNECTION_START,
});

export const wsConnectionSuccess = (event: Event) => ({
  type: WS_CONNECTION_SUCCESS,
  payload: event,
});

export const wsConnectionError = (event: Event) => ({
  type: WS_CONNECTION_ERROR,
  payload: event,
});

export const wsConnectionClosed = (event: Event) => ({
  type: WS_CONNECTION_CLOSED,
  payload: event,
});

export const wsGetMessage = (message: string) => ({
  type: WS_GET_MESSAGE,
  payload: message,
});

export const wsSendMessage = (message: string) => ({
  type: WS_SEND_MESSAGE,
  payload: message,
});

interface IWSConnectionStart {
  type: typeof WS_CONNECTION_START;
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
  payload: Event,
}

interface IWSConnectionGetMessage {
  type: typeof WS_GET_MESSAGE;
  payload: String,
}
      
interface IWSConnectionSendMessage {
  type: typeof WS_SEND_MESSAGE;
  payload: String,
}

export type TWSActions =
          | IWSConnectionStart
          | IWSConnectionSuccess
          | IWSConnectionError
          | IWSConnectionClosed
          | IWSConnectionGetMessage
          | IWSConnectionSendMessage;