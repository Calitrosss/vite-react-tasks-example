import { useState, useEffect } from "react";
import ListaTareas from "./components/ListaTareas";
import TaskForm from "./components/TaskForm";
import { tareas as data } from "./data/tareas";

function App() {
  // Variable/estado que se pasará como propiedad al componente "ListaTareas"
  const [tasks, setTasks] = useState([]);

  // Se asigna a la variable/estado "tasks" el valor importado del arreglo nombrado como "data"
  useEffect(() => {
    setTasks(data);
  }, []);

  // Función que se pasará como propiedad al componente "TaskForm"
  function crearTarea(task) {
    const newTask = {
      id: tasks.length,
      title: task.title,
      description: task.description,
    };

    // console.log(newTask);

    // [...tasks, newTask] nuevo array con contenido completo de variable/estado "tasks" y agrega elemento "newTask"
    setTasks([...tasks, newTask]);
  }

  // Función que se pasará como propiedad al componente "ListaTareas"
  const eliminarTarea = (taskId) => {
    // console.log(taskId);
    setTasks(tasks.filter((item) => item.id !== taskId));
  };

  return (
    <>
      {/* Envía función "crearTarea" como propiedad "createTask" al componente "TaskForm" */}
      <TaskForm createTask={crearTarea} />

      {/* Envía variable/estado "tasks" importado del arreglo nombrado como "data" con el parámetro "tasks"
      al componente "TaskForm" */}
      {/* Envía función "eliminarTarea" como propiedad "deleteTask" al componente "ListaTareas" */}
      <ListaTareas tasks={tasks} deleteTask={eliminarTarea} />
    </>
  );
}

export default App;
