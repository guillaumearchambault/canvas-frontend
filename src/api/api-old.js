export const API_BASE_URL = "http://127.0.0.1:8080zzz";
export const ACCESS_TOKEN = "access_token";

const getOptions = (params) => {
  const headers = new Headers();
  if (params.method === "POST" || params.method === "PUT") {
    // headers.append("Content-Type", "application/json");
  }
  if (localStorage.getItem(ACCESS_TOKEN) && params.secured) {
    headers.append(
      "Authorization",
      "Bearer " + localStorage.getItem(ACCESS_TOKEN)
    );
  }
  let options = { headers: headers };
  options = Object.assign({}, { method: params.method }, options);
  return options;
};

const request = async (url, method) => {
  try {
    const options = getOptions(method);
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.error(error);
  }
};

export function getCurrentUser() {
  return request("/user/me", { method: "GET", secured: true });
}

export const login = () => {
  return request(
    "/oauth2/authorize/facebook?redirect_uri=http://localhost:3000",
    { method: "GET", secured: false }
  );
};
// export function signup(signupRequest) {
//   return request({
//     url: API_BASE_URL + "/auth/signup",
//     method: "POST",
//     body: JSON.stringify(signupRequest)
//   });
// }
