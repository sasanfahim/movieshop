import { toast } from "react-toastify";
import axios from "axios";
import logger from "./logService";

//import * as Sentry from "@sentry/browser";

axios.defaults.baseURL = process.env.REACT_APP_API_URL;
axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;
  if (!expectedError) {
    // Sentry.captureException(error);
    logger.log(error);
    console.log(error);
    toast("unexpected error");
  }
  return Promise.reject(error);
});

function setJwt(jwt) {
  axios.defaults.headers.common["x-auth-token"] = jwt;
}
export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete,
  setJwt
};
