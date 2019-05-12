import http from "./httpService";
//import { apiUrl } from "../config.json";
import jwtDecode from "jwt-decode";
const apiEndpoint = "/auth";
const tokenKey = "token";
http.setJwt(getJwt());
function getJwt() {
  return localStorage.getItem(tokenKey);
}
async function login(email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { email, password });
  localStorage.setItem(tokenKey, jwt);
}
function logout() {
  localStorage.removeItem(tokenKey);
}
export function loginWithJwt(jwt) {
  localStorage.setItem(tokenKey, jwt);
}
function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    return jwtDecode(jwt);
  } catch (error) {
    return null;
  }
}

export default { login, logout, getCurrentUser, loginWithJwt, getJwt };
