"use client";

import { Button } from "./ui/button";

export default function HabitListItem({
  habit,
  onToggleComplete,
  onAddProgress,
  onDelete,
}) {
  const isComplete = habit.completed || false;
  const remaining = habit.goal - (habit.count || 0);

  return (
    <div className="relative flex items-center group">
      {/* Main card */}
      <div
        className={`p-4 border rounded-2xl flex-1 flex justify-between items-center shadow-sm transition-all cursor-pointer ${
          isComplete
            ? "bg-green-100 border-green-400"
            : "bg-white hover:bg-gray-50"
        }`}
      >
        {/* Habit info */}
        <div className="flex flex-col">
          <h3 className="font-semibold">{habit.name}</h3>
          <p className="text-sm text-gray-500">
            {habit.goal} per day
            {habit.goal > 1 ? ` — ${habit.count || 0} done` : ""}
          </p>
        </div>

        {/* Action button */}
        {habit.goal === 1 ? (
          <Button
            variant={isComplete ? "default" : "outline"}
            onClick={() => onToggleComplete(habit.id)}
          >
            {isComplete ? "Complete" : "Add Progress"}
          </Button>
        ) : (
          <Button
            variant={isComplete ? "default" : "outline"}
            onClick={() => onAddProgress(habit.id)}
            disabled={isComplete}
          >
            {isComplete ? "Complete" : `Add Progress (${remaining} left)`}
          </Button>
        )}
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
