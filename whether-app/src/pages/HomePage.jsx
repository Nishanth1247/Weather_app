import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  return (
    <div>
      <header className="p-8 justify-content-between">
        <h1>Weather App</h1>
        <button onClick={() => navigate("/search")}>
          Search Location
        </button>
      </header>

      <main className="p-6">
        <h2>Your Current Location's Weather</h2>
        <p> Sathyamangalam, Erode</p>

        <div>
            <h2>Location Name : Sathyamangalam</h2>
            <p>Temperature : 25'C</p>
            <p>Climate : Normal</p>
        </div>

      </main>
    </div>
  );
};

export default HomePage;

