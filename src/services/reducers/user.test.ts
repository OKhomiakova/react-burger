import userReducer, { UserState } from './user';
import { CLEAR_ORDER, SET_IS_AUTH_CHECKED, SET_USER } from '../../constants';

import { TUserActionTypes } from '../actions/user';
import { TApplicationActions } from '../types';

describe('userReducer', () => {
  const initialState: UserState = {
    user: null,
    isAuthChecked: false,
  };

  it('should handle SET_USER action', () => {
    const action: TUserActionTypes = {
      type: SET_USER,
      payload: {
         name: 'Test user',
         email: 'example@gmail.com',
         password: '12345',
      }
    };

    const expectedState: UserState = {
      ...initialState,
      user: action.payload
    };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle SET_IS_AUTH_CHECKED action', () => {
    const action: TUserActionTypes = {
      type: SET_IS_AUTH_CHECKED,
      payload: true
    };

    const expectedState: UserState = {
      ...initialState,
      isAuthChecked: true
    };

    expect(userReducer(initialState, action)).toEqual(expectedState);
  });

  it('should return the current state for unknown action', () => {
    const unknownAction: TApplicationActions = {
      type: CLEAR_ORDER,
    };

    expect(userReducer(initialState, unknownAction)).toEqual(initialState);
  });
});
