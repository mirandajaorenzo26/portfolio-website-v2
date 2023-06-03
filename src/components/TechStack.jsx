import { useEffect, useState } from "react";
function TechStack() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("./data/techstack.json");
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <div className="flex items-center justify-center gap-2 font-bold lg:justify-start">
      <p className="whitespace-nowrap">Tech Stack |</p>
      <div className="flex gap-2 md:gap-4">
        {data.map((tech) => (
          <img
            key={tech.name}
            src={`${tech.url}`}
            className="w-10 transition-all duration-300 hover:scale-110"
          />
        ))}
      </div>
    </div>
  );
}

export default TechStack;
1;
