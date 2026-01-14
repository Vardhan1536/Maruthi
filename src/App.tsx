import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Others from "./Pages/Others";
import Photographs from "./Pages/Photographs";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";
import Projects from "./Pages/Projects";
import ProjectDetail from "./Pages/ProjectDetails";

import WithNavbarLayout from "../src/layouts/Navbarlayout";
import NoNavbarLayout from "../src/layouts/NoNavbarLayout";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ROUTES WITH NAVBAR */}
        <Route element={<WithNavbarLayout />}>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Others />
                <Contact />
                <Footer />
              </>
            }
          />
          <Route path="/projects/:slug" element={<ProjectDetail />} />
        </Route>

        {/* ROUTES WITHOUT NAVBAR */}
        <Route element={<NoNavbarLayout />}>
          <Route path="/projects" element={<Projects />} />
          <Route path="/photographs" element={<Photographs />} />
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
