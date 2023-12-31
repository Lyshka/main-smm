import { Carousel } from "@material-tailwind/react";
import { useEffect, useState } from "react";

import ModalSliderMobile from "./ModalSliderMobile";

const SliderMobile = () => {
  let a = null;
  let b = null;
  let c = null;
  let d = null;
  let e = null;

  const [modal, setModal] = useState(false);

  const handleModal = () => {
    setModal((prv) => !prv);
  };

  useEffect(() => {
    if (e - 1 === d) {
      c(0);
    }
  }, [d]);

  return (
    <div>
      <Carousel
        className="overflow-hidden h-screen"
        autoplay
        autoplayDelay={10000}
        navigation={({ setActiveIndex, activeIndex, length }) => {
          c = setActiveIndex;
          d = activeIndex;
          e = length;

          return (
            <div className="absolute bottom-32 left-2/4 z-[999] flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <div
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  className={`rounded-full select-none cursor-pointer ${
                    activeIndex === i ? "bg-white" : "bg-[#bfbfbf]"
                  } bg-[#E5E5E5] w-4 h-4`}
                >
                  &nbsp;
                </div>
              ))}
            </div>
          );
        }}
        prevArrow={({ handlePrev }) => {
          a = handlePrev;
        }}
        nextArrow={({ handleNext }) => {
          b = handleNext;
        }}
      >
        <div className="relative w-screen h-[calc(100vh-90px)] duration-500 text-black flex justify-center items-center">
          <img
            src="https://smm-ibis.by/wp-content/uploads/2023/11/5-mobile.webp"
            className="w-screen h-full relative"
            alt=""
          />

          <div className="absolute p-6 rounded-2xl flex justify-start items-start flex-col gap-y-5 backdrop-blur bg-black/20 w-[calc(100%-32px)]">
            <div className="w-60">
              <span className="font-light text-white leading-4 text-sm uppercase">
                Ибис маркетинг
              </span>
              <h1 className="leading-8 text-white text-[26px]">
                SMM продвижение для лидеров рынка
              </h1>
            </div>
            <p className="text-white leading-4 tracking-[1%] text-sm">
              Начните продвижение с нами и получите первый месяц по СПЕЦИАЛЬНОЙ
              ЦЕНЕ!
            </p>
            <div className="flex justify-center w-full items-center flex-col gap-y-4">
              <button
                onClick={handleModal}
                className="px-4 py-2 text-white w-full bg-[#FF3A2D] rounded-[100px] text-xs leading-6 uppercase"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          <div className="flex w-full justify-between items-center absolute px-2">
            <div
              onClick={() => a()}
              className="w-8 h-8 cursor-pointer rounded-full flex justify-center items-center bg-black/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={() => b()}
              className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center bg-black/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative w-screen h-[calc(100vh-90px)] duration-500 text-black flex justify-center items-center">
          <img
            src="https://smm-ibis.by/wp-content/uploads/2023/11/6-mobile.webp"
            className="w-screen h-full relative"
            alt=""
          />

          <div className="absolute p-6 rounded-2xl flex justify-start items-start flex-col gap-y-5 backdrop-blur bg-black/20 w-[calc(100%-32px)]">
            <div className="w-60">
              <span className="font-light text-white leading-4 text-sm uppercase">
                Ибис маркетинг
              </span>
              <h1 className="leading-8 text-white text-[26px]">
                Техническая поддержка сайта от 18 BYN
              </h1>
            </div>
            <p className="text-white leading-4 tracking-[1%] text-sm">
              Наш профессиональный подход обеспечит стабильность и доступность
              вашего ресурса для посетителей, техподдержка сайта в нашей
              компании осуществляется высококвалифицированными специалистами.
            </p>
            <div className="flex justify-center w-full items-center flex-col gap-y-4">
              <button
                onClick={handleModal}
                className="px-4 py-2 text-white w-full bg-[#FF3A2D] rounded-[100px] text-xs leading-6 uppercase"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          <div className="flex w-full justify-between items-center absolute px-2">
            <div
              onClick={() => a()}
              className="w-8 h-8 cursor-pointer rounded-full flex justify-center items-center bg-black/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={() => b()}
              className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center bg-black/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>

        <div className="relative w-screen h-[calc(100vh-90px)] duration-500 text-black flex justify-center items-center">
          <img
            src="https://smm-ibis.by/wp-content/uploads/2023/08/Frame-331.webp"
            className="w-screen h-full relative"
            alt=""
          />

          <div className="absolute p-6 rounded-2xl flex justify-start items-start flex-col gap-y-5 backdrop-blur bg-black/20 w-[calc(100%-32px)]">
            <div className="w-60">
              <span className="font-light text-white leading-4 text-sm uppercase">
                Ибис маркетинг
              </span>
              <h1 className="leading-8 text-white text-[26px]">
                Маркетинговый отдел на аутсорсе
              </h1>
            </div>
            <p className="text-white leading-4 tracking-[1%] text-sm">
              Уже Kia, JAC и JETOUR выбрали нашу услугу для своего успеха на
              аутсорсе, всего за 1100 BYN. Начнем прямо сейчас?
            </p>
            <div className="flex justify-center w-full items-center flex-col gap-y-4">
              <button
                onClick={handleModal}
                className="px-4 py-2 text-white w-full bg-[#FF3A2D] rounded-[100px] text-xs leading-6 uppercase"
              >
                Оставить заявку
              </button>
            </div>
          </div>

          <div className="flex w-full justify-between items-center absolute px-2">
            <div
              onClick={() => a()}
              className="w-8 h-8 cursor-pointer rounded-full flex justify-center items-center bg-black/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10 12L6 8L10 4"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
            <div
              onClick={() => b()}
              className="w-8 h-8 rounded-full cursor-pointer flex justify-center items-center bg-black/50"
            >
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M6 4L10 8L6 12"
                  stroke="white"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>
          </div>
        </div>
      </Carousel>

      <ModalSliderMobile modal={modal} handleModal={handleModal} />
    </div>
  );
};

export default SliderMobile;
