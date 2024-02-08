import { wsOnErrorAllOrders, wsOnMessageAllOrders } from "../actions/ws-all-orders";
import { wsOnErrorMyOrders, wsOnMessageMyOrders } from "../actions/ws-my-orders";

export const WS_CONNECTION_START_ALL_ORDERS: 'WS_CONNECTION_START_ALL_ORDERS' = 'WS_CONNECTION_START_ALL_ORDERS';

export const WS_CONNECTION_START_MY_ORDERS: 'WS_CONNECTION_START_MY_ORDERS' = 'WS_CONNECTION_START_MY_ORDERS';

export const WS_ON_ERROR_ALL_ORDERS: 'WS_ON_ERROR_ALL_ORDERS' = 'WS_ON_ERROR_ALL_ORDERS';

export const WS_ON_ERROR_MY_ORDERS: 'WS_ON_ERROR_MY_ORDERS' = 'WS_ON_ERROR_MY_ORDERS';

export const WS_CONNECTION_CLOSE_ALL_ORDERS: 'WS_CONNECTION_CLOSE_ALL_ORDERS' = 'WS_CONNECTION_CLOSE_ALL_ORDERS';

export const WS_CONNECTION_CLOSE_MY_ORDERS: 'WS_CONNECTION_CLOSE_MY_ORDERS' = 'WS_CONNECTION_CLOSE_MY_ORDERS';

export const WS_ON_MESSAGE_ALL_ORDERS: 'WS_ON_MESSAGE_ALL_ORDERS' = 'WS_ON_MESSAGE_ALL_ORDERS';

export const WS_ON_MESSAGE_MY_ORDERS: 'WS_ON_MESSAGE_MY_ORDERS' = 'WS_ON_MESSAGE_MY_ORDERS';

export type wsActions = {
  wsConnect: typeof WS_CONNECTION_START_ALL_ORDERS | typeof WS_CONNECTION_START_MY_ORDERS,
  wsDisconnect: typeof WS_CONNECTION_CLOSE_ALL_ORDERS | typeof WS_CONNECTION_CLOSE_MY_ORDERS,
  onError: typeof wsOnErrorAllOrders | typeof wsOnErrorMyOrders,
  onMessage: typeof wsOnMessageAllOrders | typeof wsOnMessageMyOrders ,
}