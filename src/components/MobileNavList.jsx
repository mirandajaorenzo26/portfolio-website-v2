import { NavLink } from "react-router-dom";
function MobileNavList() {
  return (
    <ul className="grid text-center uppercase">
      <li className="my-2">
        <NavLink to="#home">Home</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="#about">About</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="#skills">Skills</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="#projects">Projects</NavLink>
      </li>
      <li className="my-2">
        <NavLink to="#contacts">Get In Touch</NavLink>
      </li>
    </ul>
  );
}

export default MobileNavList;
