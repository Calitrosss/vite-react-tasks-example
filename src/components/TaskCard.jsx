/* eslint-disable react/prop-types */

import { BiTrash } from "react-icons/bi";

// Se recibe el valor de la tarea con la propiedad "tarea" desde el componente "ListaTareas"
// Se recibe la función con la propiedad "deleteItem" desde el componente "ListaTareas"
function TaskCard({ tarea, deleteItem }) {
  return (
    <div>
      <h1>{tarea.title}</h1>
      <p>{tarea.description}</p>
      <button onClick={() => deleteItem(tarea.id)}>
        Eliminar tarea <BiTrash />
      </button>
    </div>
  );
}

export default TaskCard;
