import axios from "axios";

const api = axios.create({
  baseURL: "",
});

api.interceptors.request.use(
  function (config) {
    const token = localStorage.getItem("token")
      ? "Bearer " + localStorage.getItem("token")
      : "";
    const lang = localStorage.getItem("locale") || "en";

    config.headers["Authorization"] = token;
    config.headers["Accept-Language"] = lang;
    config.headers["ngrok-skip-browser-warning"] = true;
    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { api };
