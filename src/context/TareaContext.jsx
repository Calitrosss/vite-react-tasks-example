/* eslint-disable react/prop-types */

// El contexto se coloca para ser usado desde el main.jsx para que esté disponible para todos los componentes

import { createContext } from "react";

// Nombre del contexto
export const TaskContext = createContext();

// Generador del contexto
export function TareaContextProvider(props) {
  let x = 20;

  // Se retorna el valor de la variable/estado declarado a través de la propiedad "value"
  return <TaskContext.Provider value={x}>{props.children}</TaskContext.Provider>;
}
