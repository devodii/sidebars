import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { App } from "@/pages/app.tsx";
import { SidebarProvider } from "./hooks/use-side-bar.tsx";
import { AppLayout } from "@/components/layout.tsx";
import { BrowserRouter as Router } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Router>
      <SidebarProvider>
        <AppLayout>
          <Suspense fallback={<div>Loading...</div>}>
            <App />
          </Suspense>
        </AppLayout>
      </SidebarProvider>
    </Router>
  </StrictMode>
);
