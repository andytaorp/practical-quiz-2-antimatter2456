import React, { useState } from "react";
import AddHabitForm from "./AddHabitForm";
import HabitList from "./HabitList";

function App() {
  const [habits, setHabits] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleAddHabit = (habitName) => {
    const existingHabit = habits.find((habit) => habit.name === habitName);
    if (existingHabit) {
      alert("Habit already exists");
      return;
    }
    const newHabit = { id: nextId, name: habitName, completed: false };
    setHabits([...habits, newHabit]);
    setNextId(nextId + 1);
  };

  const handleToggleHabit = (id) => {
    try {
      const updatedHabits = habits.map((habit) =>
        habit.id === id ? { ...habit, completed: !habit.completed } : habit
      );
      setHabits(updatedHabits);
    } catch (error) {
      console.error(error);
    }
  };

  const handleDeleteHabit = (id) => {
    try {
      const updatedHabits = habits.filter((habit) => habit.id !== id);
      setHabits(updatedHabits);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Habit Tracker</h1>
      <AddHabitForm onAddHabit={handleAddHabit} />
      <HabitList habits={habits} onToggleHabit={handleToggleHabit} onDeleteHabit={handleDeleteHabit} />
    </div>
  );
}

export default App;