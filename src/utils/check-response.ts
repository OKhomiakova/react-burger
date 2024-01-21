import { BASE_URL } from "../constants";

type TRequest = {
  endpoint: string;
  options?: RequestInit;
};

export const request = ({ endpoint, options }: TRequest): Promise<any> => {
  return fetch(`${BASE_URL}${endpoint}`, options).then(checkResponse); 
}

export const checkResponse = <T>(response: Response): Promise<T> => {
  console.log(response);
  return response.ok ? response.json() : response.json().then((error) => Promise.reject(error));
};
