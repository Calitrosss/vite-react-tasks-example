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
    <div className="bg-gray-800 text-white p-4 rounded-md">
      <h1 className="text-xl font-bold capitalize">{tarea.title}</h1>
      <p className="text-gray-500 text-sm ">{tarea.description}</p>
      <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(tarea.id)}
      >
        Eliminar tarea <BiTrash className="inline" />
      </button>
    </div>
  );
}

export default TaskCard;
