/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard";

// Recibe el valor/estado "tasks" desde el componente "App"
// Recibe la función "deleteTask" desde el componente "App" para asignarle el valor
function ListaTareas({ tasks, deleteTask }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        // Se envía la tarea el valor de "task" como propiedad "tarea" al componente "taskCard"
        // Se envía la función "deleteTask" como propiedad "deleteItem" al componente "taskCard"
        <TaskCard key={task.id} tarea={task} deleteItem={deleteTask} />
      ))}
    </div>
  );
}

export default ListaTareas;
