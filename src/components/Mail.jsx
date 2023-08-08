import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Toaster, toast } from "react-hot-toast";

import Input from "./Input";

const Mail = () => {
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

  console.log(form?.current)

  return (
    <div
      id="contact"
      className="flex gap-x-6 justify-center items-start w-full max-w-[1300px] py-[104px]"
    >
      <div className="flex w-full justify-between items-center">
        <h1 className="leading-10 text-[32px] w-[528px]">
          Давайте создадим что-то прекрасное вместе!
        </h1>
      </div>

      <form
        ref={form}
        onSubmit={sendEmail}
        className="flex flex-col w-full gap-y-4 justify-center items-center"
      >
        <div className="flex justify-center w-full items-center gap-x-6">
          <div className="w-3/5">
            <Input name="name" text={"Имя"} />
          </div>
          <div className="w-2/5">
            <Input name="tel" text={"Телефон"} type={"tel"} />
          </div>
        </div>
        <Input name="email" text={"Email"} type={"email"} />
        <button
          type="submit"
          className="bg-[#FF3A2D] rounded-[100px] shadowMailButton text-white leading-6 text-lg px-6 py-4 w-full text-center uppercase"
        >
          Отправить
        </button>
      </form>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
};
export default Mail;
