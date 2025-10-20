export default function HabitListItem({ habit }) {
  return (
    <div className="p-4 border rounded-2xl flex justify-between items-center shadow-sm transition-all bg-white hover:bg-gray-50">
      <div className="flex flex-col">
        <h3 className="font-semibold">{habit.name}</h3>
        <p className="text-sm text-gray-500">{habit.goal} per day</p>
      </div>
    </div>
  );
}
