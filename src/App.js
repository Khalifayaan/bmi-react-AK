

import React, { useState } from "react";

function BMIApp() {
  const [name, setName] = useState("");
  const [height, setHeight] = useState("");
  const [mass, setMass] = useState("");
  const [bmi, setBMI] = useState(null);

  function calculateBMI() {
    if (height && mass) {
      const bmiValue = (mass / (height / 100) ** 2).toFixed(2);
      setBMI(bmiValue);
    }
  }

  return (
    <div className="BMIApp">
      <h2>BMI Calculator</h2>
      <div className="input-container">
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Height (cm):</label>
        <input
          type="number"
          value={height}
          onChange={(e) => setHeight(e.target.value)}
        />
      </div>
      <div className="input-container">
        <label>Mass (kg):</label>
        <input
          type="number"
          value={mass}
          onChange={(e) => setMass(e.target.value)}
        />
      </div>
      <button onClick={calculateBMI}>Calculate BMI</button>
      {bmi && (
        <div className="result">
          <p>Name: {name}</p>
          <p>Height: {height} cm</p>
          <p>Mass: {mass} kg</p>
          <p>BMI: {bmi}</p>
        </div>
      )}
    </div>
  );
}

export default BMIApp;

