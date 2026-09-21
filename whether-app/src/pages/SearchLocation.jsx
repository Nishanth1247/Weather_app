import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchLocation = () => {
  const [location, setLocation] = useState("");
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    if (!location.trim()) {
      return;
    }
    console.log("Searching for:", location);

  };

  return (
    <div>
      <header>
        <button onClick={() => navigate("/")}>
          Back
        </button>

        <h1>Search Location</h1>
      </header>

      <main>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            placeholder="Enter Your Location"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />

          <button type="submit">
            Search
          </button>
        </form>

        <button>
          Use My Current Location
        </button>
      </main>
    </div>
  );
};

export default SearchLocation;

