import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { wsConnectionSuccess, wsConnectionError, wsGetMessage, wsConnectionClosed } from '../actions/ws';

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      const { dispatch, getState } = store;
      const { type } = action;

      const { user } = getState().user;
      if (type === 'WS_CONNECTION_START' && user) {
        socket = new WebSocket(`${wsUrl}?token=${localStorage.getItem('accessToken')}`);
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          dispatch(wsConnectionSuccess(event));
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = event => {
          dispatch(wsConnectionError(event));
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          dispatch(wsGetMessage(data));
        };
        // функция, которая вызывается при закрытии соединения
        socket.onclose = event => {
          dispatch(wsConnectionClosed(event));
        };

        if (type === 'WS_SEND_MESSAGE') {
          const message = action.payload;
          // функция для отправки сообщения на сервер
          socket.send(JSON.stringify(message));
        }
      }
      next(action);
    };
  }) as Middleware;
};