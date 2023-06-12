import { useEffect, useRef, useState } from "react";

import Logo from "./shared/Logo";
import MobileNavList from "./MobileNavList";
import Button from "./shared/Button";

import { AiOutlineMenu } from "react-icons/ai";
import { NavLink } from "react-router-dom";

import downloadFile from "../utils/downloadFile";

function Header() {
  const [prevScrollPos, setPrevScrollPos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  const [isOpen, setIsOpen] = useState(false);
  const mobileNavRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      const isScrolledDown = prevScrollPos < currentScrollPos;

      setVisible(!isScrolledDown);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [prevScrollPos]);

  const handleOpen = () => {
    setIsOpen(true);
    mobileNavRef.current.classList.remove("close-nav");
  };

  const handleClose = () => {
    setIsOpen(false);
    mobileNavRef.current.classList.add("close-nav");
  };

  useEffect(() => {
    if (!visible) handleClose();
  }, [visible]);

  return (
    <header
      className="header"
      style={{ translate: visible ? "0" : "0 -100px" }}
    >
      <Logo />
      {/* mobile Nav */}
      <nav ref={mobileNavRef} className="mobile-nav close-nav text-center">
        <MobileNavList />
        <Button
          text="Download CV"
          buttonType="download-btn-inverted"
          className="mt-5"
          onClick={() => downloadFile()}
        />
      </nav>

      <button
        onClick={() => {
          if (isOpen) handleClose();
          else handleOpen();
        }}
        className="lg:hidden"
      >
        <AiOutlineMenu size={32} />
      </button>

      {/* Desktop Nav */}
      <nav className="desktop-nav">
        <ul className="flex gap-5 text-center uppercase lg:gap-10 ">
          <li>
            <NavLink to="#home">Home</NavLink>
          </li>
          <li>
            <NavLink to="#about">About</NavLink>
          </li>
          <li>
            <NavLink to="#skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="#projects">Projects</NavLink>
          </li>
          <li>
            <NavLink to="#contacts">Get In Touch</NavLink>
          </li>
        </ul>
      </nav>
      <Button
        text="Download CV"
        buttonType="download-btn"
        className="hidden lg:block"
        onClick={() => downloadFile()}
      />
    </header>
  );
}

export default Header;
