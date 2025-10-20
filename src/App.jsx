import { useState, useEffect } from "react";
import Navmenu from "./components/Nav";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";

function App() {
  const [habits, setHabits] = useState(() => {
    const saved = localStorage.getItem("habits");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("habits", JSON.stringify(habits));
  }, [habits]);

  const addHabit = (habit) => setHabits([...habits, habit]);
  const deleteHabit = (habitId) => {
    const updated = habits.filter((h) => h.id !== habitId);
    setHabits(updated);
  };

  return (
    <div className="">
      <Navmenu />
      <div className="w-full container px-6 mx-auto">
        <HabitForm onAdd={addHabit} />
        <HabitList
          habits={habits}
          setHabits={setHabits}
          onDelete={deleteHabit}
        />
      </div>
    </div>
  );
}

export default App;
