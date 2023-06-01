import FeaturedProjectItem from "../components/FeaturedProjectItem";

function FeaturedProjects({ projects }) {
  return (
    <>
      <div className="mt-5 h-[2px] w-full bg-gray-200 px-20"></div>
      <div className="pt-5">
        <h2>Featured Projects</h2>

        <div className="my-10 flex flex-wrap gap-20">
          {projects
            .filter((project) => project.type == "featured")
            .map((project) => (
              <FeaturedProjectItem
                key={crypto.randomUUID()}
                project={project}
              />
            ))}
        </div>
      </div>
    </>
  );
}

export default FeaturedProjects;
