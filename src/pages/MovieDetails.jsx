import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import omdb from "../api/omdb";

const MovieDetails = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    const fetchMovie = async () => {
      const res = await omdb.get("", {
        params: { i: id, plot: "full" },
      });
      setMovie(res.data);
    };

    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="movie-details">
      <img src={movie.Poster} alt={movie.Title} />
      <div>
        <h2>{movie.Title}</h2>
        <p>{movie.Plot}</p>
        <p>⭐ {movie.imdbRating}</p>
        <p>🎭 {movie.Genre}</p>
        <p>📅 {movie.Released}</p>
      </div>
    </div>
  );
};

export default MovieDetails;
