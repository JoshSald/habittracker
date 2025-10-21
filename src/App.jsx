import { useState, useEffect } from "react";
import Navmenu from "./components/Nav";
import HabitForm from "./components/HabitForm";
import HabitList from "./components/HabitList";
import DailyProgress from "./components/Progress";
import { BackgroundLines } from "./components/ui/background-lines";

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
  const addProgress = (id) => {
    setHabits((prev) =>
      prev.map((h) =>
        h.id === id
          ? {
              ...h,
              count: (h.count || 0) + 1,
              completed: (h.count || 0) + 1 >= h.goal,
            }
          : h
      )
    );
  };
  const total = habits.length;
  const completed = habits.filter((h) => h.completed).length;
  const progressAmount = total === 0 ? 0 : (completed / total) * 100;

  return (
    <div className="relative">
      {progressAmount > 99 && (
        <div className="absolute inset-0 z-0 pointer-events-none">
          <BackgroundLines className="bg-transparent" />
        </div>
      )}
      <Navmenu />
      <div className="w-full container px-6 mx-auto">
        <DailyProgress habits={habits} progress={progressAmount} />
        <HabitForm onAdd={addHabit} />
        <HabitList
          habits={habits}
          setHabits={setHabits}
          onDelete={deleteHabit}
          onAddProgress={addProgress}
        />
      </div>
    </div>
  );
}

export default App;
