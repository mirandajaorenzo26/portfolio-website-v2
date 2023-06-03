import EmailForm from "../components/EmailForm";
import { AiFillGithub, AiFillLinkedin, AiTwotoneMail } from "react-icons/ai";

function GetInTouch() {
  return (
    <section id="contacts" className="bg-black py-16 text-white">
      <div className="grid gap-5 lg:grid-cols-2">
        <div className="space-y-5">
          <h2 className="mb-5 text-8xl font-bold uppercase tracking-wide lg:mt-5">
            Love to hear from you, <br />
            Get In Touch!
          </h2>
          <div className="flex flex-wrap justify-start gap-5 font-semibold md:flex-col">
            <p className="text-gray-500">Reach me out</p>
            <a
              className="hover-underline-animation-inverted flex w-max gap-2"
              href="mailto:mirandajaorenzo@gmail.com"
            >
              <AiTwotoneMail size={24} />
              mirandajaorenzo@gmail.com
            </a>
            <a
              href="https://linkedin.com/in/mirandajaorenzo"
              target="_blank"
              rel="noreferrer"
              className="hover-underline-animation-inverted flex w-max gap-2"
            >
              <AiFillLinkedin size={24} />
              LinkedIn
            </a>
            <a
              href="https://github.com/mirandajaorenzo26"
              target="_blank"
              rel="noreferrer"
              className="hover-underline-animation-inverted flex w-max gap-2"
            >
              <AiFillGithub size={24} />
              GitHub
            </a>
          </div>
        </div>
        <div className="grid items-center">
          <EmailForm />
        </div>
      </div>
    </section>
  );
}

export default GetInTouch;
