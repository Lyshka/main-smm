import { Carousel } from "@material-tailwind/react";
import { useState } from "react";
import { useEffect } from "react";
import ModalSlider from "./ModalSlider";

const Slider = () => {
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
    <div className="mt-24 w-screen relative">
      <Carousel
        autoplay
        autoplayDelay={10000}
        navigation={({ setActiveIndex, activeIndex, length }) => {
          c = setActiveIndex;
          d = activeIndex;
          e = length;

          return (
            <div className="absolute bottom-14 left-2/4 z-[999] flex -translate-x-2/4 gap-2">
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
        <div className="relative min-w-max h-[calc(100vh-96px)] duration-500 text-black flex justify-start items-center">
          <img
            src="https://smm-ibis.by/wp-content/uploads/2023/11/5.webp"
            className="w-screen h-full relative object-cover"
            alt=""
          />

          <div className="absolute ml-[310px] p-10 rounded-2xl flex justify-start items-start flex-col backdrop-blur gap-y-10 bg-black/[0.15] w-[749px]">
            <div>
              <span className="font-light text-white leading-8 text-xl uppercase">
                Ибис маркетинг
              </span>
              <h1 className="leading-[58px] text-[50px] text-white">
                SMM продвижение для лидеров рынка
              </h1>
            </div>
            <p className="text-white leading-6 tracking-[1%]">
              Начните продвижение с нами и получите первый месяц по СПЕЦИАЛЬНОЙ
              ЦЕНЕ!
            </p>
            <div className="flex justify-center items-center gap-x-8">
              <button
                onClick={handleModal}
                className="px-6 py-4 text-white bg-[#FF3A2D] rounded-[100px] text-lg leading-6 uppercase"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          <div className="flex w-full justify-between items-center absolute px-[238px]">
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

        <div className="relative min-w-max h-[calc(100vh-96px)] duration-500 text-black flex justify-start items-center">
          <img
            src="https://smm-ibis.by/wp-content/uploads/2023/11/5341514937564937131.webp"
            className="w-screen h-full relative object-cover"
            alt=""
          />

          <div className="absolute ml-[310px] p-10 rounded-2xl flex justify-start items-start flex-col backdrop-blur gap-y-10 bg-black/[0.15] w-[749px]">
            <div>
              <span className="font-light text-white leading-8 text-xl uppercase">
                Ибис маркетинг
              </span>
              <h1 className="leading-[58px] text-[44px] text-white">
                Техническая поддержка сайта от 18 BYN
              </h1>
            </div>
            <p className="text-white leading-6 tracking-[1%]">
              Наш профессиональный подход обеспечит стабильность и доступность
              вашего ресурса для посетителей, техподдержка сайта в нашей
              компании осуществляется высококвалифицированными специалистами.
            </p>
            <div className="flex justify-center items-center gap-x-8">
              <button
                onClick={handleModal}
                className="px-6 py-4 text-white bg-[#FF3A2D] rounded-[100px] text-lg leading-6 uppercase"
              >
                Рассчитать стоимость
              </button>
            </div>
          </div>

          <div className="flex w-full justify-between items-center absolute px-[238px]">
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

        <div className="relative min-w-max h-[calc(100vh-96px)] duration-500 text-black flex justify-start items-center">
          <img
            src="https://smm-ibis.by/wp-content/uploads/2023/08/Баннер-2.webp"
            className="w-screen h-full relative object-cover"
            alt=""
          />

          <div className="absolute ml-[310px] p-10 rounded-2xl flex justify-start items-start flex-col backdrop-blur gap-y-10 bg-black/[0.15] w-[749px]">
            <div>
              <span className="font-light text-white leading-8 text-xl uppercase">
                Ибис маркетинг
              </span>
              <h1 className="leading-[58px] text-[50px] text-white">
                Маркетинговый отдел на аутсорсе
              </h1>
            </div>
            <p className="text-white leading-6 tracking-[1%]">
              Уже Kia, JAC и JETOUR выбрали нашу услугу для своего успеха на
              аутсорсе, всего за 1100 BYN. Начнем прямо сейчас?
            </p>
            <div className="flex justify-center items-center gap-x-8">
              <button
                onClick={handleModal}
                className="px-6 py-4 text-white bg-[#FF3A2D] rounded-[100px] text-lg leading-6 uppercase"
              >
                Оставить заявку
              </button>
            </div>
          </div>

          <div className="flex w-full justify-between items-center absolute px-[238px]">
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
      <ModalSlider modal={modal} handleModal={handleModal} />
    </div>
  );
};
export default Slider;
