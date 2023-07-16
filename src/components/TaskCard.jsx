/* eslint-disable react/prop-types */

// Se recibe el valor de la tarea con la propiedad "tarea" desde el componente "ListaTareas"
function TaskCard({ tarea }) {
  return (
    <div>
      <h1>{tarea.title}</h1>
      <p>{tarea.description}</p>
    </div>
  );
}

export default TaskCard;
