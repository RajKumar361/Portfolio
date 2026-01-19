import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";

// ✅ Import HashRouter instead of BrowserRouter
import { HashRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <Router>
    <App />
  </Router>
);
