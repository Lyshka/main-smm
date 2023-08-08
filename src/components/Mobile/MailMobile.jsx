import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

import InputMobile from "./InputMobile";

const MailMobile = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyeuhmr",
        "template_luykcfl",
        form.current,
        "dcOlQT0d4xOkMtoc_"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Ваше сообщение успешно отправлено");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contactMobile"
      className="flex flex-col gap-y-6 justify-center items-center w-full py-6 px-4"
    >
      <div className="flex w-full justify-center items-center">
        <h1 className="leading-6 text-lg w-full">
          Давайте создадим что-то прекрасное вместе!
        </h1>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full gap-y-4 justify-center items-center"
      >
        <InputMobile name="name" text={"Имя"} />

        <InputMobile name="tel" text={"Телефон"} type={"tel"} />

        <InputMobile name="email" text={"Email"} type={"email"} />
        <button
          type="submit"
          className="bg-[#FF3A2D] rounded-[100px] shadowMailButton text-white leading-6 text-xs px-4 py-2 w-full text-center uppercase"
        >
          Отправить
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default MailMobile;
