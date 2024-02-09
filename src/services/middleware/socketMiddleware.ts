import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { wsActions } from '../types/wsActionTypes';

export const socketMiddleware = (wsActions: wsActions): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socket: WebSocket | null = null;

    return next => (action: TApplicationActions) => {
      const { dispatch } = store;
      const { type } = action;

      if (type === wsActions.wsConnect && !socket) {
        socket = new WebSocket(action.payload);
        console.log("socket.start", socket);

        socket.onerror = () => {
          dispatch(wsActions.onError('Error'));
        };

        socket.onmessage = event => {
          const { data } = event;
          console.log("socket.onmessage", JSON.parse(data));
          dispatch(wsActions.onMessage(JSON.parse(data)));
        };
      }

      if (type === wsActions.wsDisconnect && socket && socket.readyState === socket.OPEN) {
        socket.close();
      }

      next(action);
    };
  }) as Middleware;
};