import Navmenu from "./components/Nav";
import HabitForm from "./components/HabitForm";

function App() {
  return (
    <div className="">
      <Navmenu />
      <div className="w-full container px-6 mx-auto">
        <HabitForm />
      </div>
    </div>
  );
}

export default App;
