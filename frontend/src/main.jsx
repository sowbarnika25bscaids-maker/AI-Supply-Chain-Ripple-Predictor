import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "leaflet/dist/leaflet.css";
import ErrorBoundary from "./components/ErrorBoundary";
import "./styles/background.css";
import "./styles/theme.css";
import "./styles/animation.css";
import "./styles/cursor.css";
import "./styles/dashboard.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </StrictMode>
);