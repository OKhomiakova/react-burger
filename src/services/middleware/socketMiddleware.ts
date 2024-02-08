import type { Middleware, MiddlewareAPI } from 'redux';
import type { TApplicationActions, AppDispatch, RootState } from '../types';
import { wsConnectionSuccess, wsConnectionError, wsGetAllOrders, wsGetMyOrders, wsConnectionClosed } from '../actions/ws';
import { WS_API_URL } from '../../constants';
import { WS_CONNECTION_CLOSED } from '../types/wsActionTypes';

export const socketMiddleware = (): Middleware => {
  return ((store: MiddlewareAPI<AppDispatch, RootState>) => {
    let socketMyOrders: WebSocket | null = null;
    let socketAllOrders: WebSocket | null = null;    

    return next => (action: TApplicationActions) => {
      const { dispatch, getState } = store;
      const { type } = action;

      const user = getState().user.user;
      if (type === 'WS_CONNECTION_START' && action.payload === WS_API_URL && !socketMyOrders && user) {
        socketMyOrders = new WebSocket(`${action.payload}?token=${localStorage.getItem('accessToken')?.split('Bearer ')[1]}`);
        console.log("socket.start", socketMyOrders);

        socketMyOrders.onopen = event => {
          dispatch(wsConnectionSuccess(event));
        };

        socketMyOrders.onerror = (error) => {
          dispatch(wsConnectionError(error));
        };

        socketMyOrders.onmessage = event => {
          const { data } = event;
          console.log("socket.onmessage", JSON.parse(data));
          dispatch(wsGetMyOrders(JSON.parse(data)));
        };

        socketMyOrders.onclose = () => {
          dispatch(wsConnectionClosed());
        };
      }

      if (type === 'WS_CONNECTION_START' && action.payload === `${WS_API_URL}/all` && !socketAllOrders) {
        socketAllOrders = new WebSocket(`${action.payload}`);
        console.log("socket.start", socketAllOrders);

        socketAllOrders.onopen = event => {
          dispatch(wsConnectionSuccess(event));
        };

        socketAllOrders.onerror = (error) => {
          dispatch(wsConnectionError(error));
        };

        socketAllOrders.onmessage = event => {
          const { data } = event;
          console.log("socket.onmessage", JSON.parse(data));
          dispatch(wsGetAllOrders(JSON.parse(data)));
        };

        socketAllOrders.onclose = () => {
          dispatch(wsConnectionClosed());
        };
      }

      if (type === WS_CONNECTION_CLOSED) {
        if (socketMyOrders?.readyState === WebSocket.OPEN) {
          socketMyOrders.close();
          socketMyOrders = null;
        }
        if (socketAllOrders?.readyState === WebSocket.OPEN) {
          socketAllOrders.close();
          socketAllOrders = null;
        }
      }

      next(action);
    };
  }) as Middleware;
};