import React from "react";
import { useNavigate } from "react-router-dom";

const Result = () => {
  const result = localStorage.getItem("result");
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/");
  };

  return (
    <div className="flex flex-col items-center gap-4 bg-white p-6 rounded shadow">
      <h2 className="text-2xl font-bold text-green-600">Your Personality Type</h2>
      <p className="text-xl">{result}</p>
      <button
        onClick={handleBack}
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Take Quiz Again
      </button>
    </div>
  );
};

export default Result;
