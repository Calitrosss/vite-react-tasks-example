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
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="bg-slate-800 p-10 mb-4 rounded-md">
        <h1 className="text-2xl font-bold text-white mb-3">Crea tu tarea</h1>
        <input
          placeholder="Escribe tu tarea"
          onChange={(e) => setTitle(e.target.value)}
          value={title}
          className="bg-slate-300 p-3 w-full mb-2"
          autoFocus
        />
        <textarea
          placeholder="Escribe la descripción de la tarea"
          onChange={(e) => setdescription(e.target.value)}
          value={description}
          className="bg-slate-300 p-3 w-full mb-2"
        ></textarea>
        <button className="bg-indigo-500 px-3 py-1 text-white hover:bg-indigo-400 rounded-md">
          Agregar
        </button>
      </form>
    </div>
  );
}

export default TaskForm;
