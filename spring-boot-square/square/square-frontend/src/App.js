import logo from './logo.svg';
import './App.css';

import React, { useState } from "react";
import "./App.css";

function App() {
  const [side, setSide] = useState("");
  const [area, setArea] = useState("");

  const calculateArea = async () => {
    const response = await fetch(
      `http://localhost:8080/area?side=${side}`
    );
    const result = await response.text();
    setArea(result);
  };

  return (
    <div className="container">
      <h2>Square Area Calculator</h2>

      <input
        type="number"
        placeholder="Enter side"
        value={side}
        onChange={(e) => setSide(e.target.value)}
      />

      <br />

      <button onClick={calculateArea}>
        Calculate
      </button>

      {area && (
        <div className="result">
          Area: {area}
        </div>
      )}
    </div>
  );
}

export default App;