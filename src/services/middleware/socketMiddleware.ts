import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { wsConnectionSuccess, wsConnectionError, wsGetMessage, wsConnectionClosed } from '../actions/ws';

export const socketMiddleware = (wsUrl: string): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === 'WS_CONNECTION_START' && !socket) {
        socket = new WebSocket(`${wsUrl}`);
        console.log("socket.start", socket);
      }

      if (socket) {
        // функция, которая вызывается при открытии сокета
        socket.onopen = event => {
          console.log("socket.onopen", event);
          dispatch(wsConnectionSuccess(event));
        };

        // функция, которая вызывается при ошибке соединения
        socket.onerror = (error) => {
          dispatch(wsConnectionError(error));
        };

        // функция, которая вызывается при получения события от сервера
        socket.onmessage = event => {
          const { data } = event;
          console.log("socket.onmessage", JSON.parse(data));
          dispatch(wsGetMessage(JSON.parse(data)));
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