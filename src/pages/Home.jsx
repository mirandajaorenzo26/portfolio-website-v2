import { NavLink } from "react-router-dom";
import MyPicture from "../assets/images/mirandajaorenzo.png";
import Button from "../components/shared/Button";

function Home() {
  return (
    <section
      id="home"
      className="flex min-h-screen items-center justify-center gap-5 md:flex-col"
    >
      <div className="flex h-full w-full flex-col justify-end gap-2 lg:flex-row lg:items-center lg:gap-20">
        <div className="mt-[80px] grid h-fit flex-1 items-center justify-center gap-2 text-center lg:mt-0 lg:justify-start lg:gap-5 lg:text-left">
          <div className="space-y-1">
            <p className="uppercase text-gray-700 md:text-3xl lg:text-4xl ">
              Hello! I&apos;m{" "}
              <span className=" font-bold text-black">Jao Renzo Miranda,</span>
            </p>
            <p className=" font-schabo text-6xl uppercase md:text-7xl xl:text-8xl 2xl:text-9xl">
              A Front-end Developer.
            </p>
          </div>

          <p className="max-w-4xl pb-5 text-gray-500 lg:my-0">
            A graduating student who&apos;s passionate about web development and
            programming. I&apos;ve spent countless hours studying and perfecting
            my skills in programming, web development and web design. I&apos;m
            excited to take my skills to the next level as I start on my career
            in the field, and I can&apos;t wait to see what the future holds!
          </p>

          <div className=" flex flex-wrap justify-between gap-5 lg:w-fit lg:justify-start">
            <NavLink className={"flex-1"}>
              <Button
                text={"Contact Me"}
                buttonType={"primary-btn"}
                className={"w-full lg:w-fit"}
                to={"#contacts"}
              />
            </NavLink>
            <NavLink className={"flex-1"}>
              <Button
                text={"Know more"}
                buttonType={"secondary-btn"}
                className={"w-full lg:w-fit"}
                to={"#about"}
              />
            </NavLink>
            <NavLink className={"flex-1"}>
              <Button
                text={"View Projects"}
                buttonType={"tertiary-btn"}
                className={"w-full lg:w-fit"}
                to={"#projects"}
              />
            </NavLink>
          </div>
        </div>
        <div className="relative m-auto w-[70%] max-w-xs lg:w-[30vw] lg:max-w-full">
          <img
            src={MyPicture}
            alt="Jao Renzo Miranda"
            className="relative z-10 w-full "
          />
          <div className="bg-dark-neutral-white dark:bg-neutral-black  absolute bottom-0 z-0 h-[70%] w-full shadow-inner"></div>
        </div>
      </div>
    </section>
  );
}

export default Home;
