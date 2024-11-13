import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "@/components/app.tsx";
import { SidebarProvider } from "./hooks/use-side-bar.tsx";
import { AppLayout } from "@/components/layout.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <SidebarProvider>
      <AppLayout>
        <App />
      </AppLayout>
    </SidebarProvider>
  </StrictMode>
);
