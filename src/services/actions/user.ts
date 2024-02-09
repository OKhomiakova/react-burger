import * as api from '../../utils/api';
import { SET_USER, 
         SET_IS_AUTH_CHECKED } from "../../constants";
import { SOMETHING_FAILED } from "../middleware/logger";
import { AppDispatch } from '../types';
import { AppThunk } from '../types';

interface User {
    name: string;
    email: string;
    password: string;
}

interface UserInfo {
    user: User;
    accessToken: string;
    refreshToken: string;
}

interface ISetIsAuthChecked {
    type: typeof SET_IS_AUTH_CHECKED;
    payload: boolean,
}

interface ISetUser {
    type: typeof SET_USER;
    payload: User | null,
}

export type TUserActionTypes =
    | ISetIsAuthChecked
    | ISetUser
    | { type: typeof SOMETHING_FAILED; error: Error };

export const setUser = (user: User | null): ISetUser => ({
    type: SET_USER,
    payload: user,
});

export const setIsAuthChecked = (value: boolean): ISetIsAuthChecked => ({
    type: SET_IS_AUTH_CHECKED,
    payload: value,
});

export const getUser: AppThunk = () => {
    return (dispatch: AppDispatch) => {
        return api.getUserInfo()
            .then((response: UserInfo) => {
                dispatch(setUser(response.user));
            })
            .catch((error: Error) => {
                console.error("Get user info failed:", error);
            });
    };
};

export const login: AppThunk = (email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        return api.login(email, password)
            .then((response: UserInfo) => {
                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("refreshToken", response.refreshToken);
                dispatch(setUser(response.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error: Error) => {
                console.error("Login failed:", error);
            });
    }
}

export const register: AppThunk = (name: string, email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        return api.register(name, email, password)
            .then((response: UserInfo) => {
                localStorage.setItem("accessToken", response.accessToken);
                localStorage.setItem("refreshToken", response.refreshToken);
                dispatch(setUser(response.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error: Error) => {
                console.error("Registration failed:", error);
            });
    }
}

export const logout: AppThunk = () => {
    return(dispatch: AppDispatch) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser(null));
    }
}

export const checkUserAuth: AppThunk = () => {
    return async (dispatch: AppDispatch) => {
        try {
            if (localStorage.getItem("accessToken")) {
                await dispatch(getUser());
                dispatch(setIsAuthChecked(true));
            } else {
                dispatch(setIsAuthChecked(true));
            }
        } catch (error) {
            console.error("Error while checking user authentication:", error);
            localStorage.removeItem("accessToken");
            localStorage.removeItem("refreshToken");
            dispatch(setUser(null));
            dispatch(setIsAuthChecked(true));
        }
    }
}

export const updateUserInfo: AppThunk = (name: string, email: string, password: string) => {
    return (dispatch: AppDispatch) => {
        return api.updateUserInfo(name, email, password)
            .then((response: UserInfo) => {
                dispatch(setUser(response.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error: Error) => {
                console.error("Update user info failed:", error);
            });
    }
}
