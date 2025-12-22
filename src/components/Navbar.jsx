import React from "react";

const Navbar = ({ searchTerm, setSearchTerm }) => {
  return (
    <nav className="navbar">
      <h1>🎬 Movie Explorer</h1>
      <input
        type="text"
        placeholder="Search movies..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
    </nav>
  );
};

export default Navbar;
