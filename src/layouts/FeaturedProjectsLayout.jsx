import { Carousel } from "antd";
import FeaturedProjectItem from "../components/FeaturedProjectItem";

function FeaturedProjects({ projects }) {
  return (
    <>
      <div>
        <div className="my-5 h-[2px] w-full bg-gray-200 px-20"></div>
        <h2>Featured Projects</h2>
        <Carousel autoplay effect="fade" className="py-10">
          {projects
            .filter((project) => project.type == "featured")
            .map((project) => (
              <FeaturedProjectItem
                key={crypto.randomUUID()}
                project={project}
              />
            ))}
        </Carousel>
      </div>
    </>
  );
}

export default FeaturedProjects;
