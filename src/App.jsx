import ListaTareas from "./components/ListaTareas";
import TaskForm from "./components/TaskForm";

function App() {
  return (
    <main className="bg-zinc-900 min-h-screen">
      <div className="container mx-auto p-10">
        <TaskForm />
        <ListaTareas />
      </div>
    </main>
  );
}

export default App;
