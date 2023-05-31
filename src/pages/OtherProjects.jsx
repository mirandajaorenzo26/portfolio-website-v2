import { useEffect, useState } from "react";
import OtherProjectsLayout from "../layouts/OtherProjectsLayout";
function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("/src/data/projects.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section className="min-w-screen overflow-x-visible ">
      <OtherProjectsLayout projects={data} />
    </section>
  );
}

export default Projects;
