import { useEffect, useState } from "react";
import omdb from "../api/omdb";
import Navbar from "../components/Navbar";
import MovieCard from "../components/MovieCard";
import GenreFilter from "../components/GenreFilter";

const POPULAR_KEYWORDS = ["Avengers", "Batman", "Spider", "Harry Potter"];

const Home = () => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("");
  const [selectedGenre, setSelectedGenre] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchMovies = async () => {
      setLoading(true);

      try {
        let response;

        // 🔹 If search bar is empty → show popular movies
        if (!search.trim()) {
          const randomKeyword =
            POPULAR_KEYWORDS[
              Math.floor(Math.random() * POPULAR_KEYWORDS.length)
            ];

          response = await omdb.get("", {
            params: { s: randomKeyword },
          });
        } 
        // 🔹 Live search (each letter typed)
        else {
          response = await omdb.get("", {
            params: { s: search },
          });
        }

        if (response.data.Search) {
          setMovies(response.data.Search);
        } else {
          setMovies([]);
        }
      } catch (error) {
        console.error("Error fetching movies", error);
      }

      setLoading(false);
    };

    // Small delay to avoid API spam
    const timer = setTimeout(fetchMovies, 400);
    return () => clearTimeout(timer);

  }, [search]);

  return (
    <>
      <Navbar search={search} setSearch={setSearch} />
      <GenreFilter
        selectedGenre={selectedGenre}
        setSelectedGenre={setSelectedGenre}
      />

      {loading && <p className="status-text">Loading movies...</p>}

      {!loading && movies.length === 0 && (
        <p className="status-text">No movies found</p>
      )}

      <div className="movie-grid">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>
    </>
  );
};

export default Home;
