import * as api from '../../utils/api';
import { Dispatch } from 'redux';
import { SET_USER, 
         SET_IS_AUTH_CHECKED } from "../../constants";

interface User {
    // Define the structure of your user object
    // Add necessary properties here
}

interface UserInfo {
    user: User;
    accessToken: string;
    refreshToken: string;
}

interface Error {
    // Define the structure of your error object
    // Add necessary properties here
}

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
            .then((res: ApiResponse<UserInfo>) => {
                dispatch(setUser(res.data.user));
            })
            .catch((error: Error) => {
                console.error("Get user info failed:", error);
            });
    };
};

export const login = (email: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        return api.login(email, password)
            .then((res: ApiResponse<UserInfo>) => {
                localStorage.setItem("accessToken", res.data.accessToken);
                localStorage.setItem("refreshToken", res.data.refreshToken);
                dispatch(setUser(res.data.user));
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
            .then((res: ApiResponse<UserInfo>) => {
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
    return(dispatch: Dispatch<any>) => {
       if (localStorage.getItem("accessToken")) {
        dispatch(getUser())
            .catch(() => {
                localStorage.removeItem("accessToken");
                localStorage.removeItem("refreshToken");
                dispatch(setUser(null));
            })
            .finally(() => dispatch(setIsAuthChecked(true)));
       } else {
        dispatch(setIsAuthChecked(true))
       }
    }
}

export const updateUserInfo = (name: string, email: string, password: string) => {
    return (dispatch: Dispatch<any>) => {
        return api.updateUserInfo(name, email, password)
            .then((res: ApiResponse<UserInfo>) => {
                dispatch(setUser(res.data.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error: Error) => {
                console.error("Update user info failed:", error);
            });
    }
}
