import React from "react";

const Habit = ({ habit, onToggleHabit, onDeleteHabit }) => {
  const handleToggle = () => {
    onToggleHabit(habit.id);
  };

  const handleDelete = () => {
    onDeleteHabit(habit.id);
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={habit.completed}
        onChange={handleToggle}
      />
      <span style={{ textDecoration: habit.completed ? "line-through" : "none" }}>
        {habit.name}
      </span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  );
};

export default Habit;