import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "./App.tsx";
import { SidebarProvider } from "./hooks/use-side-bar.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <App />
    </SidebarProvider>
  </StrictMode>
);
