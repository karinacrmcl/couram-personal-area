import axios from "axios";
const api = axios.create({
  baseURL: process.env.API_URL,
});

api.interceptors.request.use((config) => {
  config.url = config.url + `?access_key=${process.env.COUNTRYLAYER_API_KEY}`;
  return config;
});

export default api;
