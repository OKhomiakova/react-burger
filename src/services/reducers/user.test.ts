import userReducer, { UserState } from './user';
import { SET_IS_AUTH_CHECKED, SET_USER } from '../../constants';
import { TUserActionTypes } from '../actions/user';

describe('userReducer', () => {
  const initialState: UserState = {
    user: null,
    isAuthChecked: false,
  };

  // Test cases for SET_USER action
  it('should handle SET_USER action', () => {
    const action: TUserActionTypes = {
      type: SET_USER,
      payload: {
         name: 'Test user',
         email: 'example@gmail.com',
         password: '12345' }
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

  // Test case for unknown action
  it('should return the current state for unknown action', () => {
    const unknownAction: TUserActionTypes = {
      type: 'UNKNOWN_ACTION',
      payload: null
    };

    expect(userReducer(initialState, unknownAction)).toEqual(initialState);
  });
});
