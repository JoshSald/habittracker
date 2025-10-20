import HabitListItem from "./HabitListItem";

export default function HabitList({ habits }) {
  return (
    <div className="flex flex-col gap-3 mt-4">
      {habits.length === 0 ? (
        <p className="text-center text-gray-500">No habits yet. Add one!</p>
      ) : (
        habits.map((habit) => <HabitListItem key={habit.id} habit={habit} />)
      )}
    </div>
  );
}
