/* eslint-disable react/prop-types */

import { useState } from "react";

// Recibe la función "createTask" desde el componente "App" para asignarle el valor
function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Le asigna el valor a ser usado por la función "createTask" del componente "App"
    createTask(title);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
      />
      <button>Agregar</button>
    </form>
  );
}

export default TaskForm;
