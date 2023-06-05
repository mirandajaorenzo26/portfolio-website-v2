import Button from "./shared/Button";
import { FiFigma } from "react-icons/fi";
function WebDesignProjectItem({ project }) {
  return (
    <>
      <div className=" h-[2px] w-full bg-gray-200 px-20"></div>
      <div className="gap-5 lg:flex">
        <img src={project.image} className="lg:max-w-md" />
        <div className="space-y-5">
          <div>
            <p className="my-5 font-schabo text-5xl">{project.title}</p>
            <p className=" w-full ">{project.desc}</p>
          </div>
          <Button
            text={"View in Figma"}
            to={project.link}
            icon={<FiFigma size={20} />}
            target={"_blank"}
            buttonType={"primary-btn"}
            className={"w-fit text-sm"}
          />
        </div>
      </div>
    </>
  );
}

export default WebDesignProjectItem;
