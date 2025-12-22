import { Link } from "react-router-dom";

const Navbar = ({ search, setSearch }) => {
  return (
    <nav className="navbar">
      <h1 className="logo">🎬 Movie Explorer</h1>

      <input
        className="search-input"
        placeholder="Search movies..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <Link to="/favorites" className="fav-link">
        ⭐ Favourites
      </Link>
    </nav>
  );
};

export default Navbar;
