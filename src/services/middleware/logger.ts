import { Middleware, Dispatch, AnyAction } from 'redux';

// Define action types
export const SOMETHING_FAILED = 'SOMETHING_FAILED';

// Define action logger middleware
export const actionLogger: Middleware = (store) => (next) => (action) => {
  return next(action);
};

// Define error logger middleware
export const errorLogger: Middleware = (store) => (next) => (action) => {
  if (action.type === SOMETHING_FAILED) {
    console.error(`An error occurred: ${JSON.stringify(action)}`);
  }
  return next(action);
};