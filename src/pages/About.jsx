import GradPic from "../assets/images/gradpic.png";
function About() {
  return (
    <section
      id="about"
      className="grid min-h-screen items-center bg-black py-20 text-white"
    >
      <div className="grid items-center gap-10 md:grid-cols-4">
        <img
          className="hidden h-full w-full object-cover md:block"
          src={GradPic}
        />
        <div className="space-y-5 md:col-span-3">
          <div className="space-y-1">
            <p className="uppercase text-gray-400">About Me</p>
            <p className="font-schabo text-7xl uppercase tracking-wide">
              I&apos;m a Front-end Developer and an aspiring Software Engineer.
            </p>
          </div>

          <p className="line text-xl font-bold">
            I absolutely love programming and building awesome applications that
            not only look beautiful but also make people&apos;s lives better.
            It&apos;s my passion to create functional and user-friendly software
            that leaves a positive impact on people&apos;s lives.
          </p>

          <p>
            On June 20, 2023, I&apos;m about to graduate with a degree in&nbsp;
            <span className="font-bold">
              Bachelor of Science in Information Technology
            </span>
            , earning a latin honor of{" "}
            <span className="whitespace-nowrap font-bold">Magna Cum Laude</span>
            .
          </p>
          <p>
            I can&apos;t wait to kickstart my career in the industry! Though I
            may not have professional experience just yet, I&apos;ve spent
            countless hours honing my skills and building my own projects to
            showcase my abilities.
          </p>
          <p>
            I&apos;m always excited to learn new technologies and take on more
            challenges to grow as a developer. I am committed to continuous
            learning and growth; and eager to join a company that values
            innovation and creativity.
          </p>
          <p>
            Thank you for taking the time to get to know me a bit better. Have a
            great day!
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
