import Button from "./shared/Button";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
function FeaturedProjectItem({ project }) {
  return (
    <div className="grid min-w-[320px] items-center gap-10 py-10 text-white lg:grid-cols-2">
      <img
        src={`${project.image}`}
        alt="project-image"
        className="object-fill"
      />

      <div>
        <div className="mt-5">
          <p className="mb-2 text-xl font-medium">{project.category}</p>
          <p className="mb-10 font-schabo text-7xl">{project.title}</p>
          <p className="text-xl text-gray-300">{project.desc}</p>
        </div>

        <div>
          <div className="my-5 flex gap-5 text-xl font-bold">
            {project.techs.map((tech) => (
              <div key={tech}>
                <p>{tech}</p>
              </div>
            ))}
          </div>
          <div className="flex gap-5">
            <Button
              text={"View Code"}
              to={project.repoLink}
              icon={<AiFillGithub size={20} />}
              target={"_blank"}
              buttonType={"primary-btn-inverted"}
              className={"text-sm hover:text-black"}
            />
            <Button
              text={"Live Site"}
              to={project.liveLink}
              icon={<FiExternalLink size={20} />}
              target={"_blank"}
              buttonType={"secondary-btn-inverted"}
              className={"text-sm hover:text-white"}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectItem;
