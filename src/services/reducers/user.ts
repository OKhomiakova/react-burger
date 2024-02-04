import { Reducer } from 'redux';
import { SET_IS_AUTH_CHECKED, SET_USER, UserActionTypes } from '../actions/user';

// Define the shape of the User state
export interface UserState {
    user: any; // Update this with the actual user type
    isAuthChecked: boolean;
}

// Define initial state
const initialState: UserState = {
    user: null,
    isAuthChecked: false,
};

// Define the user reducer
const userReducer: Reducer<UserState, UserActionTypes> = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            };
        case SET_IS_AUTH_CHECKED:
            return {
                ...state,
                isAuthChecked: action.payload,
            };
        default:
            return state;
    }
};

export default userReducer;
