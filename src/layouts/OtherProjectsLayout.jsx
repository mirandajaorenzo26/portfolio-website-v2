import { useState, useRef, useEffect } from "react";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";
import "../assets/styles/horizontalScrollLayout.css";
import OtherProjectItem from "../components/OtherProjectItem";

let startX;
let scrollLeft;

function OtherProjectsLayout({ projects }) {
  const [isDown, setIsDown] = useState(false);
  const [isShown, setIsShown] = useState(false);

  const sliderRef = useRef();
  const sliderElement = sliderRef.current;
  const cursorRef = useRef();
  const cursorElement = cursorRef.current;

  const handleMouseDown = (e) => {
    if (isShown) {
      setIsDown(true);
      startX = e.pageX - sliderElement.offsetLeft;
      scrollLeft = sliderElement.scrollLeft;
    }
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    setIsDown(false);
  };

  const handleMouseLeave = (e) => {
    e.preventDefault();

    setIsShown(false);
    setIsDown(false);
  };

  const handleMouseEnter = (e) => {
    e.preventDefault();

    setIsShown(true);
  };

  const handleMouseMove = (e) => {
    e.preventDefault();
    if (isShown) {
      const height = cursorElement.offsetHeight;
      const width = cursorElement.offsetWidth;
      setTimeout(() => {
        cursorElement.style.left = `${e.pageX - width / 2}px`;
        cursorElement.style.top = `${e.pageY - height / 2}px`;
      }, 200);
    }

    if (!isDown) return;
    const x = e.pageX - sliderElement.offsetLeft;
    const walk = (x - startX) * 2;
    sliderElement.scrollLeft = scrollLeft - walk;
  };

  useEffect(() => {
    if (isShown) {
      setTimeout(() => {
        cursorElement.classList.remove("scale-0");
        cursorElement.classList.add("scale-100");
      }, 200);
    } else {
      setTimeout(() => {
        cursorElement.classList.remove("scale-100");
        cursorElement.classList.add("scale-0");
      }, 200);
    }
  }, [isShown]);

  useEffect(() => {
    if (isDown && isShown) {
      setTimeout(() => {
        cursorElement.classList.remove("scale-100");
        cursorElement.classList.add("scale-50");
      });
    } else {
      setTimeout(() => {
        cursorElement.classList.remove("scale-50");
        cursorElement.classList.add("scale-100");
      }, 200);
    }
  }, [isDown]);

  return (
    <>
      <div
        className="cursor scale-0 bg-black font-bold text-white transition-transform  duration-300  "
        ref={cursorRef}
      >
        {isDown === false ? (
          <p className="text-sm font-bold">DRAG</p>
        ) : (
          <div className="flex gap-32 text-black">
            <AiFillCaretLeft size={64} />
            <AiFillCaretRight size={64} />
          </div>
        )}
      </div>
      <div className="mt-5 h-[2px] w-full bg-gray-200 px-20"></div>
      <div className="pt-5">
        <h2>Other Projects</h2>
        <div
          className="scroll-container  my-10 border-x-2 border-gray-200 pb-20 pt-10"
          onMouseDown={handleMouseDown}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          ref={sliderRef}
        >
          <div className="scroll-content ">
            {projects
              .filter((project) => project.type == "other-project")
              .map((project) => (
                <OtherProjectItem
                  key={crypto.randomUUID()}
                  project={project}
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default OtherProjectsLayout;
