import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Others from "./Pages/Others";
import Photographs from "./Pages/Photographs";
import Layout from "./Layout";

export default function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <Layout>
              <Others />
            </Layout>
          }
        />
        <Route
          path="/photographs"
          element={
            <Layout>
              <Photographs />
            </Layout>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}
