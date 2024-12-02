import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!habitName.trim()) {
      setError("Habit name cannot be empty");
      return;
    }
    onAddHabit(habitName);
    setHabitName("");
    setError(null);
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Input New Habit</h2>
      {error && <div style={{ color: "red" }}>{error}</div>}
      <input
        type="text"
        placeholder="Item…"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />
      <button type="submit">Add Habit</button>
    </form>
  );
}