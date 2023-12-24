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
    return(dispatch) => {
        return api.getUserInfo().then((res) => {
            dispatch(setUser(res.user));
        });
    };
};

export const login = (email, password) => {
    return (dispatch) => {
        return api.login(email, password).then((res) => {
            console.log('action/user/login');
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(setUser(res.user));
            dispatch(setIsAuthChecked(true));
        })
    }
}

export const register = (name, email, password) => {
    return(dispatch) => {
        return api.register(name, email, password).then((res) => {
            console.log('action/user/register');
            localStorage.setItem("accessToken", res.accessToken);
            localStorage.setItem("refreshToken", res.refreshToken);
            dispatch(setUser(res.user));
            dispatch(setIsAuthChecked(true));
        })
    }
}

export const checkUserAuth = () => {
    return(dispatch) => {
        console.log('localStorage.getItem("accessToken")', localStorage.getItem("accessToken"));
       if (localStorage.getItem("accessToken")) {
        dispatch(getUser())
            .catch((error) => {
                console.log(error);
                console.log('checkUserAuth');
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
