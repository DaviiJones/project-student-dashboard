import React from "react";
import "./Cohorts.css";

export default function Cohorts({ cohortCodes, handleButtonClick }) {
  return (
    <div className="cohortContainer">
      <h1>List of Cohort Codes</h1>
      <div className="button-container">
        {cohortCodes.map((cohortCode, index) => (
          <button
            key={index}
            id={`button${index}`}
            onClick={() => handleButtonClick(cohortCode)}
          >
            {cohortCode}
          </button>
        ))}
      </div>
    </div>
  );
}
