/* eslint-disable react/prop-types */

import TaskCard from "./TaskCard";
import { useContext } from "react";
//Se importa el contexto a usar con el nombre del contexto del generador de contexto
import { TaskContext } from "../context/TareaContext";

function ListaTareas() {
  // Recibe el valor/estado "taskList" desde el el contexto importado
  // Se invoca del objeto del contexto el valor/estado o función necesaria a usar
  const { taskList } = useContext(TaskContext);

  if (taskList.length === 0) {
    return <h1>No hay tareas aún</h1>;
  }

  return (
    <div>
      {taskList.map((task) => (
        // Se envía la tarea el valor de "task" como propiedad "tarea" al componente "taskCard"
        <TaskCard key={task.id} tarea={task} />
      ))}
    </div>
  );
}

export default ListaTareas;
