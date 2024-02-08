import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/root';
import { actionLogger, errorLogger } from './middleware/logger';
import { thunk } from 'redux-thunk';
import { socketMiddleware } from '../services/middleware/socketMiddleware';
import { WS_CONNECTION_CLOSE_ALL_ORDERS, WS_CONNECTION_CLOSE_MY_ORDERS, WS_CONNECTION_START_ALL_ORDERS, WS_CONNECTION_START_MY_ORDERS } from './types/wsActionTypes';
import { wsOnErrorMyOrders, wsOnMessageMyOrders } from './actions/ws-my-orders';
import { wsOnErrorAllOrders, wsOnMessageAllOrders } from './actions/ws-all-orders';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const wsAllOrdersActions = {
  wsConnect: WS_CONNECTION_START_ALL_ORDERS,
  wsDisconnect: WS_CONNECTION_CLOSE_ALL_ORDERS,
  onError: wsOnErrorAllOrders,
  onMessage: wsOnMessageAllOrders,
}

const wsMyOrdersActions = {
  wsConnect: WS_CONNECTION_START_MY_ORDERS,
  wsDisconnect: WS_CONNECTION_CLOSE_MY_ORDERS,
  onError: wsOnErrorMyOrders,
  onMessage: wsOnMessageMyOrders,
}

const enhancer = composeEnhancers(
  applyMiddleware(
    thunk,
    actionLogger,
    errorLogger,
    socketMiddleware(wsAllOrdersActions),
    socketMiddleware(wsMyOrdersActions),
  ));

const store = createStore(rootReducer, enhancer);

export default store;
