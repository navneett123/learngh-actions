import React from "react";
import Tile from "./components/Tile";
import tilesData from "./data/tilesData";
import "./App.css";

function App() {
  return (
    <div className="app-container">
      <h1>🚀 GitHub Actions Guide</h1>
      <p className="subhead">Explore the building blocks of GitHub automation</p>
      <div className="grid">
        {tilesData.map((tile, index) => (
          <Tile key={index} title={tile.title} desc={tile.desc} />
        ))}
      </div>
      <button className="learn-btn">Learn More</button>
    </div>
  );
}

export default App;
