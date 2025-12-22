import { useContext } from "react";
import { FavoritesContext } from "../context/FavoritesContext";
import MovieCard from "../components/MovieCard";

const Favorites = () => {
  const { favorites } = useContext(FavoritesContext);

  if (favorites.length === 0) {
    return (
      <div className="favorites-empty">
        <h2>⭐ No favourites yet</h2>
        <p>Start adding movies you love!</p>
      </div>
    );
  }

  return (
    <div className="favorites-page">
      <h2 className="favorites-title">⭐ Your Favourites</h2>

      <div className="movie-grid">
        {favorites.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default Favorites;
