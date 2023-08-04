import { Carousel, IconButton } from "@material-tailwind/react";

const SliderMobile = () => {
  let a = null;
  let b = null;

  return (
    <Carousel
      className="overflow-hidden"
      //   autoplay
      //   autoplayDelay={10000}
      navigation={({ setActiveIndex, activeIndex, length }) => (
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
      )}
      prevArrow={({ handlePrev }) => {
        a = handlePrev;
      }}
      nextArrow={({ handleNext }) => {
        b = handleNext;
      }}
    >
      <div className="relative min-w-max h-[calc(100vh-96px)] duration-500 text-black flex justify-center items-center">
        <img
          src="https://smm-ibis.by/wp-content/uploads/2023/04/1-Mobile.webp"
          className="w-screen h-full relative"
          alt=""
        />

        <div className="absolute p-6 rounded-2xl flex justify-start items-start flex-col gap-y-10 bg-black/20 w-[330px]">
          <div className="w-60">
            <span className="font-light text-white leading-4 text-sm uppercase">
              Ибис маркетинг
            </span>
            <h1 className="leading-8 text-[26px] text-white">
              Создание и<br /> продвижение сайтов
            </h1>
          </div>
          <div className="flex justify-center w-full items-center flex-col gap-y-4">
            <a className="w-full" href="https://smm-ibis.by/site-creation/">
              <button className="px-4 py-2 bg-white w-full rounded-[100px] text-xs leading-6 uppercase">
                Узнать больше
              </button>
            </a>

            <a className="w-full" href="#contact">
              <button className="px-4 py-2 text-white w-full bg-[#FF3A2D] rounded-[100px] text-xs leading-6 uppercase">
                Начать продвижение
              </button>
            </a>
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
      <div className="relative min-w-max h-[calc(100vh-96px)] duration-500 text-black flex justify-center items-center">
        <img
          src="https://smm-ibis.by/wp-content/uploads/2023/04/2-Mobile.webp"
          className="w-screen h-full relative"
          alt=""
        />

        <div className="absolute p-6 rounded-2xl flex justify-start items-start flex-col gap-y-10 bg-black/20 w-[330px]">
          <div className="w-60">
            <span className="font-light text-white leading-4 text-sm uppercase">
              Ибис маркетинг
            </span>
            <h1 className="leading-8 text-[26px] text-white">
              Создание и<br /> продвижение сайтов
            </h1>
          </div>
          <div className="flex justify-center w-full items-center flex-col gap-y-4">
            <a className="w-full" href="https://smm-ibis.by/site-creation/">
              <button className="px-4 py-2 bg-white w-full rounded-[100px] text-xs leading-6 uppercase">
                Узнать больше
              </button>
            </a>

            <a className="w-full" href="#contact">
              <button className="px-4 py-2 text-white w-full bg-[#FF3A2D] rounded-[100px] text-xs leading-6 uppercase">
                Начать продвижение
              </button>
            </a>
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
      <div className="relative min-w-max h-[calc(100vh-96px)] duration-500 text-black flex justify-center items-center">
        <img
          src="https://smm-ibis.by/wp-content/uploads/2023/04/3-Mobile.webp"
          className="w-screen h-full relative"
          alt=""
        />

        <div className="absolute p-6 rounded-2xl flex justify-start items-start flex-col gap-y-10 bg-black/20 w-[330px]">
          <div className="w-60">
            <span className="font-light text-white leading-4 text-sm uppercase">
              Ибис маркетинг
            </span>
            <h1 className="leading-8 text-[26px] text-white">
              Создание и<br /> продвижение сайтов
            </h1>
          </div>
          <div className="flex justify-center w-full items-center flex-col gap-y-4">
            <a className="w-full" href="https://smm-ibis.by/site-creation/">
              <button className="px-4 py-2 bg-white w-full rounded-[100px] text-xs leading-6 uppercase">
                Узнать больше
              </button>
            </a>

            <a className="w-full" href="#contact">
              <button className="px-4 py-2 text-white w-full bg-[#FF3A2D] rounded-[100px] text-xs leading-6 uppercase">
                Начать продвижение
              </button>
            </a>
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
  );
};

export default SliderMobile;
