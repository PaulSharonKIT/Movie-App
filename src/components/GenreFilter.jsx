const genres = [
  "Action",
  "Comedy",
  "Drama",
  "Thriller",
  "Romance",
  "Sci-Fi",
  "Horror",
];

const GenreFilter = ({ selectedGenre, setSelectedGenre }) => (
  <div className="genre-filter">
    <button
      className={!selectedGenre ? "active" : ""}
      onClick={() => setSelectedGenre(null)}
    >
      All
    </button>

    {genres.map((g) => (
      <button
        key={g}
        className={selectedGenre === g ? "active" : ""}
        onClick={() => setSelectedGenre(g)}
      >
        {g}
      </button>
    ))}
  </div>
);

export default GenreFilter;
