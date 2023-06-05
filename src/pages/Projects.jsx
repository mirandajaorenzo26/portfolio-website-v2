import { useEffect, useState } from "react";
import OtherProjectsLayout from "../layouts/OtherProjectsLayout";
import FeaturedProjectsLayout from "../layouts/FeaturedProjectsLayout";
import WebDesignProjectsLayout from "../layouts/WebDesignProjectsLayout";
function Projects() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("./data/projects.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <>
      <section
        id="projects"
        className="m-h-screen w-full overflow-x-visible bg-black py-10 text-white"
      >
        <FeaturedProjectsLayout projects={data} />
      </section>
      <section id="other-projects" className="w-full overflow-x-visible py-10">
        <OtherProjectsLayout projects={data} />
      </section>
      <section
        id="web-design-projects"
        className="w-full overflow-x-visible py-10"
      >
        <WebDesignProjectsLayout projects={data} />
      </section>
    </>
  );
}

export default Projects;
