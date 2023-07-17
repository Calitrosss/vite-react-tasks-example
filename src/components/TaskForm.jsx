/* eslint-disable react/prop-types */

import { useState, useContext } from "react";
//Se importa el contexto a usar con el nombre del contexto del generador de contexto
import { TaskContext } from "../context/TareaContext";

// Recibe la función "createTask" desde el componente "App" para asignarle el valor
function TaskForm() {
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");

  // Recibe la función "createTask" desde el el contexto importado
  // Se invoca del objeto del contexto el valor/estado o función necesaria a usar
  const { createTask } = useContext(TaskContext);

  const handleSubmit = (e) => {
    //Previene la ejecución predeterminado del submit del form
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
