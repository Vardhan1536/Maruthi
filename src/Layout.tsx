import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Footer from "./Pages/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Home />
      <About />
      {children}
      <Contact />
      <Footer />
    </>
  );
}
