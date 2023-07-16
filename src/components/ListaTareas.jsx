/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard";

// Recibe el valor/estado desde el componente "App"
function ListaTareas({ tasks }) {
  if (tasks.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }

  return (
    <div>
      {tasks.map((task) => (
        // Se envía la tarea el valor de "task" como propiedad "tarea" al componente "taskCard"
        <TaskCard key={task.id} tarea={task} />
      ))}
    </div>
  );
}

export default ListaTareas;
