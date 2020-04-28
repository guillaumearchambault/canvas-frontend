import axios from "axios";

axios.defaults.baseURL = "http://localhost:8080";

const ACCESS_TOKEN = "access_token";
// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token) {
      config.headers = {
        Authorization: `Bearer ${token}`,
      };
    }
    console.log(config);
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axios.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

export default axios;
