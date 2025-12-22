import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import tmdb from "../api/tmdb";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await tmdb.get(`/movie/${id}`);
      setMovie(res.data);
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <div>
        <h2>{movie.title}</h2>
        <p>{movie.overview}</p>
        <p>⭐ Rating: {movie.vote_average}</p>
        <p>📅 Release Date: {movie.release_date}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
