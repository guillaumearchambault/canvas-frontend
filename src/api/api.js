import axios from "../middleware.js";

const getCurrentUser = () => {
  return axios.get("api/user/me");
};

const getHealthCheck = () => {
  return axios.get("api/health/check");
};

const login = () => {
  //return axios
  //.get("/oauth2/authorize/facebook?redirect_uri=http://localhost:3000")
  //.then((response) => response.json());
  window.location = "/api/oauth2/authorize/facebook?redirect_uri=http://localhost";
};

export { getCurrentUser, getHealthCheck, login };
