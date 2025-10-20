import { Button } from "./ui/button";

export default function HabitForm() {
  return (
    <form className="flex gap-2 items-center mt-4">
      <input
        type="text"
        placeholder="New habit (e.g. Drink Water)"
        value={name}
        className="border p-2 rounded w-48"
      />
      <input
        type="number"
        min="1"
        value="1"
        className="border p-2 rounded w-16 text-center"
      />
      <Button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700"
      >
        Add
      </Button>
    </form>
  );
}
