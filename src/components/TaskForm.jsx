/* eslint-disable react/prop-types */

import { useState } from "react";

// Recibe la función "createTask" desde el componente "App" para asignarle el valor
function TaskForm({ createTask }) {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Le asigna el valor a ser usado por la función "createTask" del componente "App"
    createTask({ title, description });

    // Se limpian los valores de la variable/estado luego de la creación de la nueva tarea
    setTitle("");
    setdescription("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Escribe tu tarea"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
        autoFocus
      />
      <textarea
        placeholder="Escribe la descripción de la tarea"
        onChange={(e) => setdescription(e.target.value)}
        value={description}
      ></textarea>
      <button>Agregar</button>
    </form>
  );
}

export default TaskForm;
