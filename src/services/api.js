import axios from "axios";
import store from "../store";
import configA from "../config";

const api = axios.create({
  baseURL: `https://api.dribbble.com/v2/`
});

api.interceptors.request.use(config => {
  console.log(config);
  const token = `Bearer ${config.accessToken}`;
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = token;
  }

  return { ...config, headers };
});

export default api;
