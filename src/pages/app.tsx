import { lazy } from "react";
import { Routes, Route } from "react-router-dom";

const HomePage = lazy(() =>
  import("@/pages/home").then((module) => ({ default: module.HomePage }))
);

const AboutPage = lazy(() =>
  import("@/pages/about").then((module) => ({ default: module.AboutPage }))
);

const ContactPage = lazy(() =>
  import("@/pages/contact").then((module) => ({ default: module.ContactPage }))
);

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
    </Routes>
  );
};
