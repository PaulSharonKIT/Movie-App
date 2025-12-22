import axios from "axios";

const API_KEY = "9747c40db9fc95896cbdacf4ffc3bb65";

const tmdb = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  params: {
    api_key: API_KEY,
    language: "en-US",
  },
});

export default tmdb;
