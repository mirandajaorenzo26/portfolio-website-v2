import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import GetInTouch from "./pages/GetInTouch";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  useEffect(() => {
    const { hash } = location;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <main>
      <div className="bg"></div>
      <Header />
      <Home />
      <About />
      <Skills />
      <Projects />
      <GetInTouch />
      <Footer />
    </main>
  );
}

export default App;
