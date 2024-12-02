import React from "react";

const Habit = ({ habit, onToggleHabit, onDeleteHabit }) => {
  const handleToggleHabit = () => {
    onToggleHabit(habit.id);
  };

  const handleDeleteHabit = () => {
    onDeleteHabit(habit.id);
  };

  return (
    <li>
      <span style={{ textDecoration: habit.completed ? "line-through" : "none" }}>
        {habit.name}
      </span>
      <button onClick={handleToggleHabit}>
        {habit.completed ? "Not Done" : "Done"}
      </button>
      <button onClick={handleDeleteHabit}>Delete Habit</button>
    </li>
  );
};

export default Habit;


/**
 * Habit component that displays a habit, allows the user to toggle
 * the habit's completed state, and delete the habit.
 *
 * TODO: implement the Habit component here
 */