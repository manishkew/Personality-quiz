import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../apirequest/apiRequest";

const personalities = ["Explorer", "Thinker", "Leader", "Dreamer", "Visionary", "Adventurer"];

const QuizForm = () => {
  const [form, setForm] = useState({ name: "", dob: "", color: "", luckyNumber: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const idRes = await API.post("/generate-id", form);
    const userId = idRes.data.userId; 

    try {
      const res = await API.get(`/result?userId=${userId}`);
      localStorage.setItem("userId", userId);
      localStorage.setItem("result", res.data.result);
      navigate("/result");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        const randomPersonality = personalities[Math.floor(Math.random() * personalities.length)];
        await API.post("/result", { userId, result: randomPersonality });
        localStorage.setItem("userId", userId);
        localStorage.setItem("result", randomPersonality);
        navigate("/result");
      } else {
        console.error("Error checking result:", error);
      }
    }
  } catch (err) {
    console.error("Error generating ID:", err);
  }
};

  return (
    <>
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-full max-w-sm bg-white p-6 rounded shadow"
    >
    <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">Personality Quiz</h1>
      <input
        type="text"
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="date"
        name="dob"
        value={form.dob}
        onChange={handleChange}
        required
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="text"
        name="color"
        placeholder="Favorite Color"
        value={form.color}
        onChange={handleChange}
        required
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <input
        type="number"
        name="luckyNumber"
        placeholder="Lucky Number"
        value={form.luckyNumber}
        onChange={handleChange}
        required
        className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-300"
      />
      <button
        type="submit"
        className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition"
      >
        Submit
      </button>
    </form>
    </>
  );
};

export default QuizForm;
