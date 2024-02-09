import { TMessageType } from '../../utils/types';

import { WS_CONNECTION_CLOSE_MY_ORDERS, WS_CONNECTION_START_MY_ORDERS, WS_ON_ERROR_MY_ORDERS, WS_ON_MESSAGE_MY_ORDERS } from '../types/wsActionTypes';

export interface IWSConnectionStartMyOrders {
  type: typeof WS_CONNECTION_START_MY_ORDERS;
  payload: string;
}

export interface IWSOnErrorMyOrders {
  type: typeof WS_ON_ERROR_MY_ORDERS;
  payload: string,
}
      
export interface IWSConnectionCloseMyOrders {
  type: typeof WS_CONNECTION_CLOSE_MY_ORDERS;
}

export interface IWSOnMessageMyOrders {
  type: typeof WS_ON_MESSAGE_MY_ORDERS;
  payload: TMessageType,
}

export type TWSMyOrdersActions =
          | IWSConnectionStartMyOrders
          | IWSOnErrorMyOrders
          | IWSConnectionCloseMyOrders
          | IWSOnMessageMyOrders;

export const wsConnectionStartMyOrders = (url: string) => ({
  type: WS_CONNECTION_START_MY_ORDERS,
  payload: url,
});

export const wsOnErrorMyOrders = (error: string) => ({
  type: WS_ON_ERROR_MY_ORDERS,
  payload: error,
});

export const wsConnectionCloseMyOrders = () => ({
  type: WS_CONNECTION_CLOSE_MY_ORDERS,
});

export const wsOnMessageMyOrders = (message: TMessageType) => ({
  type: WS_ON_MESSAGE_MY_ORDERS,
  payload: message,
});

