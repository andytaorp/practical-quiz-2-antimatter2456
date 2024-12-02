import React, { useState } from "react";

export default function AddHabitForm({ onAddHabit }) {
  const [habitName, setHabitName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault(); // prevent default form submission behavior
    onAddHabit(habitName); // call the onAddHabit callback
    setHabitName(""); // reset the input field
  };

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h2>Input New Habit</h2>
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