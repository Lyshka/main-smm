import { useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";

import InputMobile from "./InputMobile";
import { useState } from "react";

const ModalSliderMobile = ({ modal, handleModal }) => {
  const form = useRef();

  const [push, setPush] = useState(false);

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
          setPush(true);
          handleModal();
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  useEffect(() => {
    const id = setTimeout(() => {
      setPush(false);
    }, 5000);

    return () => clearTimeout(id);
  }, [push]);

  return (
    <>
      {modal && (
        <div className="w-full h-full flex justify-center items-center absolute bg-black/50 top-0">
          <div className="relative flex flex-col justify-center items-center rounded-lg bg-white">
            <img
              src="https://smm-ibis.by/wp-content/uploads/2023/08/Frame-243.png"
              alt="modalSlide"
              className="h-64 w-full"
            />
            <div className="flex p-6 flex-col justify-center items-center gap-y-14">
              <div className="flex justify-start items-start gap-y-2 flex-col">
                <h1 className="leading-6 text-lg">Форма обратной связи</h1>
                <p className="leading-4 text-sm">
                  Отставьте заявки и мы Вам перезвоним!
                </p>
              </div>

              <form
                ref={form}
                onSubmit={sendEmail}
                className="flex w-[307px] flex-col gap-y-4 justify-center items-center"
              >
                <InputMobile name="name" text={"Имя"} />
                <InputMobile name="tel" text={"Телефон"} type={"tel"} />
                <InputMobile name="email" text={"Email"} type={"email"} />
                <button
                  type="submit"
                  className="bg-[#FF3A2D] rounded-[100px] shadowMailButton text-white leading-6 text-lg px-6 py-4 w-full text-center uppercase"
                >
                  Отправить
                </button>
              </form>
            </div>
            <svg
              onClick={handleModal}
              className="cursor-pointer absolute top-2 right-2"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="x">
                <path
                  id="Vector"
                  d="M12 4L4 12"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  id="Vector_2"
                  d="M4 4L12 12"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
            </svg>
          </div>
        </div>
      )}

      {push && (
        <div className="absolute duration-500 transition-all w-[263px] bg-[#66BB6A] top-0 left-1/2 -translate-x-1/2 px-12 py-8 flex flex-col justify-center items-center gap-y-2 rounded-lg">
          <h2 className="font-bold leading-6 text-lg text-center text-white">
            Заявка отправлена
          </h2>
          <p className="text-center font-light leading-4 text-white text-sm">
            В скором времени с вами свяжется наш сотрудник!
          </p>
        </div>
      )}
    </>
  );
};
export default ModalSliderMobile;
