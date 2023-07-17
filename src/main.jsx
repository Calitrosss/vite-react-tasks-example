import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
// Se importa el generador del contexto a usar
import { TareaContextProvider } from "./context/TareaContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {/* Se aplica el generador de contexto a usar */}
    <TareaContextProvider>
      <App />
    </TareaContextProvider>
  </React.StrictMode>
);
