import React, { useEffect, useState } from "react";
import tmdb from "../api/tmdb";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import GenreFilter from "../components/GenreFilter";

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [genres, setGenres] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);

  useEffect(() => {
    const fetchGenres = async () => {
      const res = await tmdb.get("/genre/movie/list");
      setGenres(res.data.genres);
    };
    fetchGenres();
  }, []);

  useEffect(() => {
    const fetchMovies = async () => {
      const endpoint = searchTerm
        ? "/search/movie"
        : "/discover/movie";

      const res = await tmdb.get(endpoint, {
        params: {
          query: searchTerm,
          with_genres: selectedGenre,
        },
      });

      setMovies(res.data.results);
    };

    fetchMovies();
  }, [searchTerm, selectedGenre]);

  return (
    <>
      <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <GenreFilter
        genres={genres}
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
