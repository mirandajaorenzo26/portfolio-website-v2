import React from "react";
import Logo from "./shared/Logo";
import { NavLink } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer flex flex-col  bg-very-dark-black text-white md:flex-row md:justify-between">
      <div className="mb-5 text-center md:text-left">
        <Logo />
        <div className="my-2 text-sm">
          <p className="text-gray-400 ">Copyright © 2023 Jao Renzo Miranda.</p>
          <p className="text-gray-400 ">All rights reserved.</p>
        </div>
      </div>
      <div className="flex flex-col gap-5 md:flex-row md:gap-20">
        <div className="grid text-center text-sm  md:text-right">
          <p className="text-sm text-gray-400 ">Quick Links</p>
          <ul>
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
        </div>
        <div className="space-y-2 text-center md:text-right">
          <p className="text-sm text-gray-400">Created and Developed by:</p>
          <p className="font-schabo text-4xl">Jao Renzo Miranda</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
