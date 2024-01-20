import { request, checkResponse } from "./check-response";

export const refreshToken = (): Promise<any> => {
  return request('auth/token', {
    method: "POST",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify({
      token: localStorage.getItem("refreshToken"),
    }),
  }).then(checkResponse);
};

export const fetchWithRefresh = async (url: string, options: RequestInit): Promise<any> => {
  try {
    const res = await request(url, options);
    return await checkResponse(res);
  } catch (err) {
    if ((err as Error).message === "jwt expired") {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem("refreshToken", refreshData.refreshToken);
      localStorage.setItem("accessToken", refreshData.accessToken);

      // Explicitly cast options.headers to Headers
      const headers = options.headers as Headers;
      if (headers) {
        // Modify the 'authorization' property
        headers.set("authorization", refreshData.accessToken);
      }

      const res = await request(url, options);
      return await checkResponse(res);
    } else {
      return Promise.reject(err);
    }
  }
};

export const register = (email: string, password: string, name: string): Promise<any> => {
  return request('auth/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password, name }),
  });
};

export const login = (email: string, password: string): Promise<any> => {
  return request('auth/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email, password }),
  });
};

export const forgotPassword = (email: string): Promise<any> => {
  return request('password-reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });
};

export const resetPassword = (password: string, token: string): Promise<any> => {
  return request('password-reset/reset', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ password, token }),
  });
};

export const getUserInfo = (): Promise<any> => {
  return fetchWithRefresh('auth/user', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || '',
    },
  });
};

export const updateUserInfo = (email: string, password: string, name: string): Promise<any> => {
  return fetchWithRefresh('auth/user', {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      authorization: localStorage.getItem('accessToken') || '',
    },
    body: JSON.stringify({ email, password, name }),
  });
};

export const logout = (): Promise<any> => {
  return fetchWithRefresh('auth/logout', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });
};