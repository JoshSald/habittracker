import HabitListItem from "./HabitListItem";

export default function HabitList({
  habits,
  setHabits,
  onDelete,
  onAddProgress,
}) {
  const toggleComplete = (id) => {
    setHabits((prev) =>
      prev.map((h) => (h.id === id ? { ...h, completed: !h.completed } : h))
    );
  };

  return (
    <div className="flex flex-col gap-3 mt-4">
      {habits.length === 0 ? (
        <p className="text-center text-gray-500">No habits yet. Add one!</p>
      ) : (
        habits.map((habit) => (
          <HabitListItem
            key={habit.id}
            habit={habit}
            onToggleComplete={toggleComplete}
            onDelete={onDelete}
            onAddProgress={onAddProgress}
          />
        ))
      )}
    </div>
  );
}
