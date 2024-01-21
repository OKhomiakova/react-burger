import { request, checkResponse } from "./check-response";
import { BASE_URL } from "../constants";


type TRefreshToken = {
  success: boolean;
  accessToken: string;
  refreshToken: string;
};

type TFetchWithRefresh = {
  endpoint: string;
  options: RequestInit & { headers: HeadersInit & { authorization?: string } };
};

export const refreshToken = async (): Promise<TRefreshToken> => {
  const response = await fetch(`${BASE_URL}/auth/token`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      token: localStorage.getItem('refreshToken'),
    }),
  });
  return checkResponse(response);
};

export const fetchWithRefresh = async <T>({ endpoint, options }: TFetchWithRefresh): Promise<T> => {
  try {
    const response = await fetch(`${BASE_URL}${endpoint}`, options);
    return await checkResponse(response);
  } catch (err) {
    if (err instanceof Object && 'message' in err && err.message === 'jwt expired') {
      const refreshData = await refreshToken();
      if (!refreshData.success) {
        return Promise.reject(refreshData);
      }
      localStorage.setItem('refreshToken', refreshData.refreshToken);
      localStorage.setItem('accessToken', refreshData.accessToken);
      options.headers.authorization = refreshData.accessToken;
      const response = await fetch(endpoint, options); //повторяем запрос
      return await checkResponse(response);
    } else {
      return Promise.reject(err);
    }
  }
};

export const register = (email: string, password: string, name: string): Promise<any> => {
  return request({
    endpoint: 'auth/register',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password, name }),
    }
  });
};

export const login = (email: string, password: string): Promise<any> => {
  return request({
    endpoint: 'auth/login',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    }
  })
};

export const forgotPassword = (email: string): Promise<any> => {
  return request({
    endpoint: 'password-reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email }),
    }
  })
};

export const resetPassword = (password: string, token: string): Promise<any> => {
  return request({
    endpoint: 'password-reset/reset',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ password, token }),
    }
  });
};

export const getUserInfo = (): Promise<any> => {
  return fetchWithRefresh({
    endpoint: 'auth/user',
    options: {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken') || '',
      }
    }
  })
};

export const updateUserInfo = (email: string, password: string, name: string): Promise<any> => {
  return fetchWithRefresh({
    endpoint: 'auth/user',
    options: {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        authorization: localStorage.getItem('accessToken') || '',
      },
      body: JSON.stringify({ email, password, name }),
    }
  })
};

export const logout = (): Promise<any> => {
  return fetchWithRefresh({
    endpoint: 'auth/logout',
    options: {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token: localStorage.getItem('refreshToken'),
      }),
    }
  })
};