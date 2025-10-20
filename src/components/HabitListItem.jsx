"use client";

import { Button } from "./ui/button";

export default function HabitListItem({ habit, onToggleComplete, onDelete }) {
  const isComplete = habit.completed || false;

  return (
    <div className="relative flex items-center group">
      <div
        className={`p-4 border rounded-2xl flex-1 flex justify-between items-center shadow-sm transition-all cursor-pointer ${
          isComplete
            ? "bg-green-100 border-green-400"
            : "bg-white hover:bg-gray-50"
        }`}
      >
        <div className="flex flex-col">
          <h3 className="font-semibold">{habit.name}</h3>
          <p className="text-sm text-gray-500">{habit.goal} per day</p>
        </div>

        <Button
          className={isComplete && "bg-green-500 hover:bg-green-700"}
          variant={isComplete ? "default" : "outline"}
          onClick={() => onToggleComplete(habit.id)}
        >
          {isComplete ? "Complete" : "Incomplete"}
        </Button>
      </div>

      <Button
        variant="destructive"
        className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
        onClick={() => onDelete(habit.id)}
      >
        Delete
      </Button>
    </div>
  );
}
