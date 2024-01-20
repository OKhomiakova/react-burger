import { BASE_URL } from "../constants";

export const request = (endpoint: string, options?: RequestInit): Promise<any> =>
  fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse);

export const checkResponse = (response: Response): Promise<any> => {
  if (response.ok) {
    return response.json();
  } else if (response.status >= 200 && response.status < 300) {
    return Promise.resolve(response);
  } else {
    return Promise.reject(`Ошибка ${response.status}`);
  }
};
