
  import { createRoot } from "react-dom/client";
  import { HelmetProvider } from 'react-helmet-async';
  import App from "./App.tsx";
  import { AuthProvider } from "./contexts/AuthContext";
  import "./index.css";

  createRoot(document.getElementById("root")!).render(
    <HelmetProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </HelmetProvider>
  );
  