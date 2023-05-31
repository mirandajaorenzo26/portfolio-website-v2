import "../assets/styles/horizontalScrollLayout.css";

function OtherProjectItem({ project }) {
  return (
    <div className="scroll-item flex flex-col justify-between">
      <p className="mb-14 font-schabo text-5xl">{project.title}</p>
      <p>{project.desc}</p>
      <div className="my-5 flex gap-5 font-bold">
        {project.techs.map((tech) => (
          <div key={tech}>
            <p>{tech}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default OtherProjectItem;
