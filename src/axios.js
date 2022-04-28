import axios from "axios";

const instance = axios.create({
  // baseURL: 'http://127.0.0.1:8000',
  baseURL: 'https://setcookie-backend.herokuapp.com',
  timeout: 5000,
  headers: { 'Content-Type': 'application/json' },
  withCredentials: true, // XMLHttpRequest from a different domain enable set cookie
});

function request(method, url, data = null, config = null) {
  method = method.toLowerCase();
  if (data)
    data = JSON.stringify(data);
  switch (method) {
    case "post":
      return instance.post(url, data, config);
    case "get":
      return instance.get(url, { params: data });
    case "delete":
      return instance.delete(url, { params: data });
    case "put":
      return instance.put(url, data);
    case "patch":
      return instance.patch(url, data, config);
    default:
      console.log(`未知的 method: ${method}`);
      return false;
  }
}

/** example */
export async function cookieTest() {
  try {
    const response = await request("get", "/api")
    return response
  }
  catch (error) {
    console.error("cookieTest() error: ", error)
    return error
  }
}