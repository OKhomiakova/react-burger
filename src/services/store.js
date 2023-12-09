import { compose, createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/root.js';
import { actionLogger, errorLogger } from './middleware/logger.js';
import { thunk } from 'redux-thunk';

const composeEnhancers =
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;
  
const enhancer = composeEnhancers(applyMiddleware(thunk, actionLogger, errorLogger));

const store = createStore(rootReducer, enhancer);
    
export default store;