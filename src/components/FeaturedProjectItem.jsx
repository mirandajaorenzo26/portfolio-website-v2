import Button from "./shared/Button";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
function FeaturedProjectItem({ project }) {
  return (
    <div className=" flex min-w-[320px] flex-1 flex-col justify-between">
      <div className=" mb-5">
        <img
          src={`${project.image}`}
          alt="project-image"
          className=" object-fill "
        />
        <div className="mt-5">
          <p className="mb-2 font-medium">{project.category}</p>
          <p className="mb-5 font-schabo text-5xl">{project.title}</p>
          <p>{project.desc}</p>
        </div>
      </div>
      <div>
        <div className="my-5 flex gap-5 font-bold">
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
            className={"text-sm"}
          />
          <Button
            text={"Live Site"}
            to={project.liveLink}
            icon={<FiExternalLink size={20} />}
            target={"_blank"}
            buttonType={"secondary-btn-inverted"}
            className={"text-sm"}
          />
        </div>
      </div>
    </div>
  );
}

export default FeaturedProjectItem;
