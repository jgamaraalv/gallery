import axios from "axios";
import configFile from "../config";

const api = axios.create({
  baseURL: `https://api.dribbble.com/v2/`
});

api.interceptors.request.use(config => {
  const token = `Bearer ${configFile.accessToken}`;
  const headers = { ...config.headers };

  if (token) {
    headers.Authorization = token;
  }

  return { ...config, headers };
});

export default api;
