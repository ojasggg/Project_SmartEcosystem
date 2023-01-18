import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { ThemeContext } from "./components/ThemeContext";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeContext>
      <App />
    </ThemeContext>
  </React.StrictMode>
);
