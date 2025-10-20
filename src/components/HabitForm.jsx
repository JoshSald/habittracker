import { useState } from "react";

export default function HabitForm({ onAdd }) {
  const [name, setName] = useState("");
  const [goal, setGoal] = useState(1);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name.trim()) return;
    onAdd({ id: Date.now(), name, goal, count: 0 });
    setName("");
    setGoal(1);
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 items-center mt-4">
      <input
        type="text"
        placeholder="New habit (e.g. Drink Water)"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-48"
      />
      <input
        type="number"
        min="1"
        value={goal}
        onChange={(e) => setGoal(Number(e.target.value))}
        className="border p-2 rounded w-16 text-center"
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Add
      </button>
    </form>
  );
}
