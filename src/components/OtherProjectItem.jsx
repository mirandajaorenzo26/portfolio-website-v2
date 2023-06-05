import "../assets/styles/horizontalScrollLayout.css";
import Button from "./shared/Button";

import { AiFillGithub } from "react-icons/ai";
import { FiExternalLink } from "react-icons/fi";
function OtherProjectItem({ project, onMouseEnter, onMouseLeave, index }) {
  return (
    <div className="scroll-item flex flex-col justify-between">
      <div>
        <p className="font-schabo text-xl">#{index + 1}</p>
        <p className="mb-2 font-medium">{project.category}</p>
        <p className="mb-14 font-schabo text-5xl">{project.title}</p>
        <p className=" w-[300px] ">{project.desc}</p>
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
            buttonType={"primary-btn"}
            onMouseEnter={onMouseLeave}
            onMouseLeave={onMouseEnter}
            className={"text-sm"}
          />
          <Button
            text={"Live Site"}
            to={project.liveLink}
            icon={<FiExternalLink size={20} />}
            target={"_blank"}
            buttonType={"secondary-btn"}
            onMouseEnter={onMouseLeave}
            onMouseLeave={onMouseEnter}
            className={"text-sm"}
          />
        </div>
      </div>
    </div>
  );
}

export default OtherProjectItem;
