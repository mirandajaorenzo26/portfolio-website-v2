import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Skills from "./pages/Skills";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

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
    <>
      <div className="bg"></div>
      <Header />
      <Home />
      <About />
      <Skills />
    </>
  );
}

export default App;
