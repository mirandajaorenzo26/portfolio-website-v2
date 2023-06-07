import WebDesignProjectItem from "../components/WebDesignProjectItem";

function WebDesignProjectsLayout({ projects }) {
  return (
    <>
      <h2>Web/App Design Projects</h2>
      <div className="grid gap-5">
        {projects
          .filter((project) => project.type == "web-design")
          .map((project) => (
            <WebDesignProjectItem key={crypto.randomUUID()} project={project} />
          ))}
      </div>
      <div className="my-5 h-[2px] w-full bg-gray-200 px-20"></div>
    </>
  );
}

export default WebDesignProjectsLayout;
