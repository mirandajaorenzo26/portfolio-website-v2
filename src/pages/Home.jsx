import { NavLink } from "react-router-dom";
import MyPicture from "../assets/images/mirandajaorenzo.png";
import TechStack from "../components/TechStack";
import Button from "../components/shared/Button";
function Home() {
  return (
    <section id="home" className="grid min-h-screen items-center">
      <div className="flex h-full flex-col justify-end gap-2 md:flex-row md:items-center">
        <div className="mt-[80px] grid h-fit flex-1 items-center justify-center gap-2 text-center md:gap-5 md:text-left">
          <div className="space-y-1">
            <p className="text-2xl">
              Hello! I&apos;m{" "}
              <span className="font-schabo text-3xl">Jao Renzo Miranda,</span>
            </p>
            <p className="font-schabo text-8xl uppercase">
              A Front-end Developer.
            </p>
          </div>

          <TechStack />

          <p className=" text-gray-500">
            A graduating student who&apos;s passionate about all things web
            development and programming. I&apos;ve spent countless hours
            studying and perfecting my skills in front-end development and web
            design. I&apos;m excited to take my skills to the next level as I
            start on my career in the field, and I can&apos;t wait to see what
            the future holds!
          </p>

          <div className=" flex flex-wrap justify-between gap-5 lg:w-fit lg:justify-start">
            <NavLink className={"flex-1"}>
              <Button
                text={"Contact Me"}
                buttonType={"primary-btn"}
                className={"w-full lg:w-fit"}
              />
            </NavLink>
            <NavLink className={"flex-1"}>
              <Button
                text={"Know more"}
                buttonType={"secondary-btn"}
                className={"w-full lg:w-fit"}
              />
            </NavLink>
            <NavLink className={"flex-1"}>
              <Button
                text={"View Projects"}
                buttonType={"tertiary-btn"}
                className={"w-full lg:w-fit"}
              />
            </NavLink>
          </div>
        </div>
        <div className="relative m-auto w-[80%] md:w-[30vw]">
          <img
            src={MyPicture}
            alt="Jao Renzo Miranda"
            className="relative z-10 w-full"
          />
          <div className="bg-dark-neutral-white dark:bg-neutral-black absolute bottom-0 z-0 h-[70%] w-full shadow-inner"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
