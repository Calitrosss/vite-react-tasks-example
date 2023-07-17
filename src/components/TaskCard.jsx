/* eslint-disable react/prop-types */

import { BiTrash } from "react-icons/bi";
import { useContext } from "react";
//Se importa el contexto a usar con el nombre del contexto del generador de contexto
import { TaskContext } from "../context/TareaContext";

// Se recibe el valor de la tarea con la propiedad "tarea" desde el componente "ListaTareas"
function TaskCard({ tarea }) {
  // Recibe la función "deleteTask" desde el el contexto importado
  // Se invoca del objeto del contexto el valor/estado o función necesaria a usar
  const { deleteTask } = useContext(TaskContext);

  return (
    <div>
      <h1>{tarea.title}</h1>
      <p>{tarea.description}</p>
      <button onClick={() => deleteTask(tarea.id)}>
        Eliminar tarea <BiTrash />
      </button>
    </div>
  );
}

export default TaskCard;
