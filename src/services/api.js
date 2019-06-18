import axios from "axios";
import store from "../store";

const api = axios.create({
  baseURL: `https://api.dribbble.com/v2/`
});

api.interceptors.request.use(config => {
  const { token } = store.getState().auth;
  const headers = { ...config.headers };

  if (token) {
    headers.Autorizhation = token;
  }

  return { ...config, headers };
});

export default api;
