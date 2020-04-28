import axios from "../middleware.js";

const getCurrentUser = () => {
  return axios.get("/user/me");
};

const login = () => {
  //return axios
  //.get("/oauth2/authorize/facebook?redirect_uri=http://localhost:3000")
  //.then((response) => response.json());
  window.location =
    "http://localhost:8080/oauth2/authorize/facebook?redirect_uri=http://localhost";
};

export { getCurrentUser, login };
