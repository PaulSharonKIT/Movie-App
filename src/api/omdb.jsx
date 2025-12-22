import axios from "axios";

const API_KEY = "be59b0a7";

const omdb = axios.create({
  baseURL: "https://www.omdbapi.com/",
  params: {
    apikey: API_KEY,
  },
});

export default omdb;
