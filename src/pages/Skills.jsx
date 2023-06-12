import { useEffect, useState } from "react";

function Skills() {
  const [skills, setSkills] = useState([]);
  const [otherTech, setOtherTech] = useState([]);

  useEffect(() => {
    fetchSkills();
    fetchOtherTech();
  }, []);

  const fetchSkills = async () => {
    try {
      const response = await fetch("./data/skills.json");
      const jsonData = await response.json();
      setSkills(jsonData);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const fetchOtherTech = async () => {
    try {
      const response = await fetch("./data/otherTechs.json");
      const jsonData = await response.json();
      setOtherTech(jsonData.technologies);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  return (
    <section id="skills" className=" bg-white py-10">
      <div className="mb-5 h-[2px] w-full bg-gray-200 px-20"></div>

      <h2 className="mb-5">Skills</h2>
      <div className="my-10 flex w-full flex-col gap-10 md:flex-row lg:gap-20">
        {skills &&
          skills.map((skill) => (
            <div className="flex flex-1 flex-col" key={crypto.randomUUID()}>
              <div className="mb-10 flex-1">
                <h3>{skill.skillName}</h3>
                <p>{skill.desc}</p>
              </div>
              <div className="flex-1">
                {skill.skillName === "Programming" && (
                  <p className="font-bold">Programming Languages I know:</p>
                )}
                {skill.skillName === "UI/UX Design" && (
                  <p className="font-bold">UI/UX Tools I know:</p>
                )}
                {skill.skillName === "Web Development" && (
                  <p className="font-bold">
                    Languages, Technologies and Tools I know:
                  </p>
                )}
                <ul className="mt-5 flex flex-wrap gap-4">
                  {skill.technologies.map((tech) => (
                    <li
                      key={tech}
                      className="relative border border-black px-5 py-3 text-sm font-bold"
                    >
                      {tech}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
      </div>
      <div className="mb-5 h-[2px] w-full bg-gray-200 px-20"></div>

      <h3 className="mt-10 uppercase">Other Technologies I Use</h3>
      <ul className="mt-5 flex flex-wrap gap-4">
        {otherTech.map((tech) => (
          <li
            key={tech}
            className="relative border border-black px-5 py-3 text-sm font-bold"
          >
            {tech}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
