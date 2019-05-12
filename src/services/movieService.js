import http from "./httpService";
//import { apiUrl } from "../config.json";

export function getMovies() {
  return http.get("/movies");
}
export function getMovie(movieId) {
  return http.get("/movies/" + movieId);
}
export function deleteMovie(movieId) {
  return http.delete("/movies/" + movieId);
}
export function saveMovie(movie) {
  if (movie._id) {
    const copy = { ...movie };
    delete copy._id;
    console.log(copy);
    return http.put("/movies/" + movie._id, copy);
  }

  return http.post("/movies/", movie);
}
