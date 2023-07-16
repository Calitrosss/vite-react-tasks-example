import { useState, useEffect } from "react";
import ListaTareas from "./ListaTareas";
import TaskForm from "./TaskForm";
import { tareas as data } from "./tareas";

function App() {
  // Variable/estado que se pasará como propiedad al componente "ListaTareas"
  const [tasks, setTasks] = useState([]);

  // Se asigna a la variable/estado "tasks" el valor importado del arreglo nombrado como "data"
  useEffect(() => {
    setTasks(data);
  }, []);

  // Función que se pasará como propiedad al componente "TaskForm"
  function crearTarea(tareaTitulo) {
    const newTask = {
      title: tareaTitulo,
      id: tasks.length,
      description: "Nueva tarea " + (tasks.length + 1),
    };

    // console.log(newTask);

    // [...tasks, newTask] nuevo array con contenido completo de variable/estado "tasks" y agrega elemento "newTask"
    setTasks([...tasks, newTask]);
  }

  return (
    <>
      {/* Envía función "crearTarea" como propiedad "crearTarea" al componente "TaskForm" */}
      <TaskForm createTask={crearTarea} />

      {/* Envía el valor de la variable/estado "tasks" importado del arreglo nombrado como "data" con el parámetro "tasks" */}
      <ListaTareas tasks={tasks} />
    </>
  );
}

export default App;
