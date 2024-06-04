import axios from "axios";
import { isBadRequest } from "../lib/Http";
import { API_URL, DEFAULT_API_KEY } from "../configs";
// History
import history from "../history";
// Cookie
import { COOKIE_SESSION_TOKEN } from "../lib/Cookie";
// Helper
import { getCookie } from "../lib/Helper";

export const apiClient = axios.create({
  baseURL: API_URL,
  timeout: 50000,
  headers: {
    "Content-Type": "application/json",
    common: {
      //set token for authorization
      Authorization: getCookie(COOKIE_SESSION_TOKEN),
    },
  },
});

export function get(url, callback) {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: getCookie(COOKIE_SESSION_TOKEN),
      Pragma: "no-cache",
    },
  })
    .then((response) => {
      if (!response.ok) {
        throw Error(response.status);
      }
      return response.json();
    })
    .then((result) => callback(null, result))
    .catch((err) => callback(err));
}

// Call Post API Public API
export function apiClientPostPublic(apiUrl, data, callback) {
  apiClient.defaults.headers.common.Authorization = DEFAULT_API_KEY;
  apiClient
    .post(`${apiUrl}`, data)
    .then((response) => {
      let token;
      let userId;
      let role;
      let successMessage;
      if (response && response.data) {
        successMessage = response.data.message;
        token = response.data.token;
        userId = response.data.userId;
        role = response.data.role;
      }
      return callback(null, token, role, userId);
    })
    .catch((error) => {
      let errorMessage;
      if (error && error.response && error.response.status === 401) {
        history.push("/login");
      } else if (isBadRequest(error)) {
        const errorRequest = error.response.request;
        if (errorRequest && errorRequest.response) {
          errorMessage = JSON.parse(errorRequest.response).message;
        }
        console.error(errorMessage);
        return callback(errorMessage);
      }
    });
}

// Call Get Api
export function apiClientGet(apiUrl, callback) {
  apiClient
    .get(`${apiUrl}`)
    .then((response) => {
      return callback(null, response);
    })
    .catch((error) => {
      let errorMessage;
      if (error && error.response && error.response.status === 401) {
        window.location.replace("/login");
      } else if (isBadRequest(error)) {
        const errorRequest = error.response.request;
        if (errorRequest && errorRequest.response) {
          errorMessage = JSON.parse(errorRequest.response).message;
        }
        console.error(errorMessage);
        return callback(errorMessage);
      }
    });
}
