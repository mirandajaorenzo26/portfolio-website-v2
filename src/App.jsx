import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Projects from "./pages/Projects";

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
    </main>
  );
}

export default App;
