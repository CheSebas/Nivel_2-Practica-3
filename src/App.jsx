import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import Services from "./pages/Services";
import Details from "./pages/Details";
import Features from "./pages/Features";
import Projects from "./pages/Projects";
import Team from "./pages/Team";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/details" element={<Details />} />
        <Route path="/features" element={<Features />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}
