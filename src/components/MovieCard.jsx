import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";

const MovieCard = ({ movie }) => {
  const { toggleFavorite, isFavorite } = useContext(FavoritesContext);

  const favorite = isFavorite(movie.imdbID);

  return (
    <div className="movie-card-wrapper">
      <button
        className={`star-btn ${favorite ? "active" : ""}`}
        onClick={() => toggleFavorite(movie)}
      >
        ★
      </button>

      <Link to={`/movie/${movie.imdbID}`} className="movie-card">
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/300x450"
          }
          alt={movie.Title}
        />
        <h3>{movie.Title}</h3>
      </Link>
    </div>
  );
};

export default MovieCard;
