import * as api from '../../../src/utils/api';

export const SET_USER = 'SET_USER';
export const SET_IS_AUTH_CHECKED = 'SET_IS_AUTH_CHECKED';

export const setUser = (user) => ({
    type: SET_USER,
    payload: user,
});

export const setIsAuthChecked = (value) => ({
    type: SET_IS_AUTH_CHECKED,
    payload: value,
});

export const getUser = () => {
    return (dispatch) => {
        return api.getUserInfo()
            .then((res) => {
                dispatch(setUser(res.user));
            })
            .catch((error) => {
                console.error("Get user info failed:", error);
            });
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        return api.login(email, password)
            .then((res) => {
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);
                dispatch(setUser(res.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error) => {
                console.error("Login failed:", error);
            });
    }
}

export const register = (name, email, password) => {
    return (dispatch) => {
        return api.register(name, email, password)
            .then((res) => {
                localStorage.setItem("accessToken", res.accessToken);
                localStorage.setItem("refreshToken", res.refreshToken);
                dispatch(setUser(res.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error) => {
                console.error("Registration failed:", error);
            });
    }
}

export const logout = () => {
    return(dispatch) => {
        localStorage.removeItem("accessToken");
        localStorage.removeItem("refreshToken");
        dispatch(setUser(null));
    }
}


export const checkUserAuth = () => {
    return(dispatch) => {
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

export const updateUserInfo = (name, email, password) => {
    return (dispatch) => {
        return api.updateUserInfo(name, email, password)
            .then((res) => {
                dispatch(setUser(res.user));
                dispatch(setIsAuthChecked(true));
            })
            .catch((error) => {
                console.error("Update user info failed:", error);
            });
    }
}
