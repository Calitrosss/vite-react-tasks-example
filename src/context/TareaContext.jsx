/* eslint-disable react/prop-types */

// El contexto se coloca para ser usado desde el main.jsx para que esté disponible para todos los componentes

import { useState, useEffect, createContext } from "react";
import { tareas as data } from "../data/tareas";

// Nombre del contexto
export const TaskContext = createContext();

// Generador del contexto
export function TareaContextProvider(props) {
  // Variable/estado que se retornará como parte del objeto de la propieada "value"
  const [tasks, setTasks] = useState([]);

  // Función que se retornará como parte del objeto de la propieada "value"
  function crearTarea(task) {
    const newTask = {
      id: tasks.length,
      title: task.title,
      description: task.description,
    };

    // [...tasks, newTask] nuevo array con contenido completo de variable/estado "tasks" y agrega elemento "newTask"
    setTasks([...tasks, newTask]);

    // Se podría también crear directo sin nevesidad de una variable newTask
    // setTasks([
    //   ...tasks,
    //   {
    //     id: tasks.length,
    //     title: task.title,
    //     description: task.description,
    //   },
    // ]);
  }

  // Función que se retornará como parte del objeto de la propiedad "value"
  const eliminarTarea = (taskId) => {
    // console.log(taskId);
    setTasks(tasks.filter((item) => item.id !== taskId));
  };

  // Se asigna a la variable/estado "tasks" el valor importado del arreglo nombrado como "data"
  // una sola vez al cargarse el componente
  useEffect(() => {
    setTasks(data);
  }, []);

  // Se retorna el valor de la variable/estado declarado y las funciones deseadas
  // a través de un objeto con la propiedad "value"
  return (
    <TaskContext.Provider
      value={{
        taskList: tasks,
        createTask: crearTarea,
        deleteTask: eliminarTarea,
      }}
    >
      {props.children}
    </TaskContext.Provider>
  );
}
