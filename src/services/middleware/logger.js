export const SOMETHING_FAILED = 'SOMETHING_FAILED';

export const actionLogger = store => next => action => {
  return next(action);
};

export const errorLogger = store => next => action => {
  if (action.type === SOMETHING_FAILED) {
    console.error(`Произошла ошибка: ${JSON.stringify(action)}`)
  }
  return next(action);
};