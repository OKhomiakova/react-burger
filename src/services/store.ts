import { compose, createStore, applyMiddleware } from 'redux';
import { rootReducer } from './reducers/root';
import { actionLogger, errorLogger } from './middleware/logger';
import { thunk } from 'redux-thunk';
import { socketMiddleware } from '../services/middleware/socketMiddleware';

const composeEnhancers =
  typeof window === 'object' && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;

const enhancer = composeEnhancers(applyMiddleware(thunk, actionLogger, errorLogger, (socketMiddleware('wss://echo.websocket.org'))));

const store = createStore(rootReducer, enhancer);

export default store;
