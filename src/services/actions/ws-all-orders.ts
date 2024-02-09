import { TMessageType } from '../../utils/types';

import { WS_CONNECTION_CLOSE_ALL_ORDERS, WS_CONNECTION_START_ALL_ORDERS, WS_ON_ERROR_ALL_ORDERS, WS_ON_MESSAGE_ALL_ORDERS } from '../types/wsActionTypes';

export interface IWSConnectionStartAllOrders {
  type: typeof WS_CONNECTION_START_ALL_ORDERS;
  payload: string;
}

export interface IWSOnErrorAllOrders {
  type: typeof WS_ON_ERROR_ALL_ORDERS;
  payload: string,
}
      
export interface IWSConnectionCloseAllOrders {
  type: typeof WS_CONNECTION_CLOSE_ALL_ORDERS;
}

export interface IWSOnMessageAllOrders {
  type: typeof WS_ON_MESSAGE_ALL_ORDERS;
  payload: TMessageType,
}

export type TWSAllOrdersActions =
          | IWSConnectionStartAllOrders
          | IWSOnErrorAllOrders
          | IWSConnectionCloseAllOrders
          | IWSOnMessageAllOrders;

export const wsConnectionStartAllOrders = (url: string) => ({
  type: WS_CONNECTION_START_ALL_ORDERS,
  payload: url,
});

export const wsOnErrorAllOrders = (error: string) => ({
  type: WS_ON_ERROR_ALL_ORDERS,
  payload: error,
});

export const wsConnectionCloseAllOrders = () => ({
  type: WS_CONNECTION_CLOSE_ALL_ORDERS,
});

export const wsOnMessageAllOrders = (message: TMessageType) => ({
  type: WS_ON_MESSAGE_ALL_ORDERS,
  payload: message,
});

