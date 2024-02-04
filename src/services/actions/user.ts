import * as api from '../../utils/api';
import { Dispatch } from 'redux';
import { SET_USER, 
         SET_IS_AUTH_CHECKED } from "../../constants";
import { SOMETHING_FAILED } from "../middleware/logger";

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

export const setUser = (user: User | null) => ({
    type: SET_USER,
    payload: user,
});

export const setIsAuthChecked = (value: boolean) => ({
    type: SET_IS_AUTH_CHECKED,
    payload: value,
});

export const getUser = () => {
    return (dispatch: Dispatch<any>) => {
        return api.getUserInfo()
            .then((response: { data: UserInfo }) => {
                dispatch(setUser(response.data.user));
            })
            .catch((error: Error) => {
                console.error("Get user info failed:", error);
            });
    };
};

export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        return api.login(email, password)
            .then((response: { data: UserInfo }) => {
                localStorage.setItem("accessToken", response.data.accessToken);
                localStorage.setItem("refreshToken", response.data.refreshToken);
                dispatch(setUser(response.data.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error: Error) => {
                console.error("Login failed:", error);
            });
    }
}

export const register = (name: string, email: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        return api.register(name, email, password)
            .then((res: { data: UserInfo }) => {
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("refreshToken", res.data.refreshToken);
                dispatch(setUser(res.data.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error: Error) => {
                console.error("Registration failed:", error);
            });
    }
}

export const logout = () => {
    return(dispatch: Dispatch<any>) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser(null));
    }
}

export const checkUserAuth = () => {
    return async (dispatch: Dispatch<any>) => {
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

export const updateUserInfo = (name: string, email: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        return api.updateUserInfo(name, email, password)
            .then((response: { data: UserInfo }) => {
                dispatch(setUser(response.data.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error: Error) => {
                console.error("Update user info failed:", error);
            });
    }
}
