import { BASE_URL } from "../constants";

export const request = (endpoint, options) => fetch(BASE_URL + endpoint, options).then(checkResponse);

export const checkResponse = (response) => {
    console.log('checkResponse response', response)
    if (response.ok) {
        return response.json();
    }
    return Promise.reject(`Ошибка ${response.status}`);
};
