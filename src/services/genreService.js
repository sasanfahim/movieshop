import http from "../services/httpService";
//import { apiUrl } from "../config.json";
export function getGenres() {
  return http.get("/genres");
}
