import { Middleware } from 'redux';

export const SOMETHING_FAILED: 'SOMETHING_FAILED' = 'SOMETHING_FAILED';


// Define action logger middleware
export const actionLogger: Middleware = (store) => (next) => (action) => {
  return next(action);
};

// Define error logger middleware
export const errorLogger: Middleware = (store) => (next) => (action: any) => {
  if (action.type === SOMETHING_FAILED) {
    console.error(`An error occurred: ${JSON.stringify(action)}`);
  }
  return next(action);
};