import React from "react";
import "../App.css";

function Tile({ title, desc }) {
  return (
    <div className="tile">
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
}

export default Tile;
