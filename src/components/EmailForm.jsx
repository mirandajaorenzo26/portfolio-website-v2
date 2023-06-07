import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Button from "./shared/Button";

export default function Form() {
  const form = useRef();
  const name = useRef();
  const email = useRef();
  const subject = useRef();
  const message = useRef();

  const notifySuccess = () =>
    toast.success("Message sent successfully!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyError = () =>
    toast.error("Something went wrong!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const notifyInputRequired = () =>
    toast.error("All fields are required!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

  const sendEmail = (e) => {
    e.preventDefault();
    if (
      name.current.value !== "" &&
      email.current.value !== "" &&
      subject.current.value !== "" &&
      message.current.value !== ""
    ) {
      emailjs
        .sendForm(
          "service_b30iz8u",
          "template_zfr8ein",
          form.current,
          "L6biK_Bt62NjZSWxf"
        )
        .then(
          (result) => {
            console.log(result.text);
            notifySuccess();
            setTimeout(() => {
              name.current.value = "";
              email.current.value = "";
              subject.current.value = "";
              message.current.value = "";
            }, 300);
          },
          (error) => {
            console.log(error.text);
            notifyError();
          }
        );
    } else {
      notifyInputRequired();
    }
  };
  return (
    <>
      <form ref={form} className="h-fit">
        <div className="my-5 grid items-center gap-5 md:grid-cols-2 ">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              ref={name}
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 dark:focus:border-neutral-white focus:border-light-neutral-black peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:outline-0 disabled:border-0"
              placeholder=" "
              name="user_name"
            />
            <label className="after:content[' '] text-blue-gray-500 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 after:border-light-neutral-black peer-focus:text-light-neutral-black peer-focus:after:border-light-neutral-black dark:after:border-neutral-white dark:peer-focus:text-neutral-white dark:peer-focus:after:border-neutral-white pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-disabled:text-transparent">
              Your name
            </label>
          </div>
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              ref={email}
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 dark:focus:border-neutral-white focus:border-light-neutral-black peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:outline-0 disabled:border-0"
              placeholder=" "
              name="user_email"
            />
            <label className="after:content[' '] text-blue-gray-500 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 after:border-light-neutral-black peer-focus:text-light-neutral-black peer-focus:after:border-light-neutral-black dark:after:border-neutral-white dark:peer-focus:text-neutral-white dark:peer-focus:after:border-neutral-white pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-normal leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-disabled:text-transparent">
              Your email
            </label>
          </div>
        </div>
        <div className="my-5 space-y-5">
          <div className="relative h-11 w-full min-w-[200px]">
            <input
              ref={subject}
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 dakr:focus:border-neutral-white focus:border-light-neutral-black peer h-full w-full border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:outline-0 disabled:border-0"
              placeholder=" "
              name="subject"
            />
            <label className="after:content[' '] text-blue-gray-500 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 after:border-light-neutral-black peer-focus:text-light-neutral-black peer-focus:after:border-light-neutral-black dark:after:border-neutral-white dark:peer-focus:text-neutral-white dark:peer-focus:after:border-neutral-white pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-bold leading-tight transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-disabled:text-transparent">
              Subject
            </label>
          </div>
          <div className="relative w-full min-w-[200px]">
            <textarea
              ref={message}
              className="border-blue-gray-200 text-blue-gray-700 placeholder-shown:border-blue-gray-200 disabled:bg-blue-gray-50 focus:border-light-neutral-black dark:focus:border-light-neutral-black peer h-full min-h-[100px] w-full resize-none border-b bg-transparent pb-1.5 pt-4 font-sans text-sm font-normal outline outline-0 transition-all focus:outline-0 disabled:resize-none disabled:border-0"
              placeholder=" "
              name="message"
            ></textarea>
            <label className="after:content[' '] text-blue-gray-500 peer-placeholder-shown:text-blue-gray-500 peer-disabled:peer-placeholder-shown:text-blue-gray-500 after:border-light-neutral-black peer-focus:text-light-neutral-black peer-focus:after:border-light-neutral-black dark:after:border-neutral-white dark:peer-focus:text-neutral-white dark:peer-focus:after:border-neutral-white pointer-events-none absolute -top-1.5 left-0 flex h-full w-full select-none text-[11px] font-bold leading-tight transition-all after:absolute after:-bottom-0 after:block after:w-full after:scale-x-0 after:border-b-2 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-focus:text-[11px] peer-focus:leading-tight peer-focus:after:scale-x-100 peer-disabled:text-transparent">
              Message
            </label>
            <small className="hidden text-red-700">Error message</small>
          </div>
        </div>
        <Button
          buttonType={"primary-btn-inverted"}
          text={"Send"}
          onClick={(e) => sendEmail(e)}
        >
          Send
        </Button>
      </form>
      <ToastContainer />
    </>
  );
}
