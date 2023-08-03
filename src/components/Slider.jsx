import { Carousel, IconButton } from "@material-tailwind/react";

const Slider = () => {
  let a = null;
  let b = null;

  return (
    <Carousel
    className="mt-24"
      autoplay
      autoplayDelay={10000}
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
      <div className="relative min-w-max h-[calc(100vh-96px)] duration-500 text-black flex justify-start items-center">
        <img
          src="https://smm-ibis.by/wp-content/uploads/2023/04/5314559233188965801.webp"
          className="w-screen h-full relative"
          alt=""
        />

        <div className="absolute ml-[310px] p-10 rounded-2xl flex justify-start items-start flex-col gap-y-10 bg-black/20 w-[749px]">
          <div>
            <span className="font-light text-white leading-8 text-xl uppercase">
              Ибис маркетинг
            </span>
            <h1 className="leading-[58px] text-[50px] text-white">
              Создание и<br /> продвижение сайтов
            </h1>
          </div>
          <p className="text-white leading-6 tracking-[1%]">
            Создание сайтов полного цикла, от разработки карты сайта, до
            продвижения и внедрения новых возможностей!
          </p>
          <div className="flex justify-center items-center gap-x-8">
            <button className="px-6 py-4 bg-white rounded-[100px] text-lg leading-6 uppercase">
              Узнать больше
            </button>
            <button className="px-6 py-4 text-white bg-[#FF3A2D] rounded-[100px] text-lg leading-6 uppercase">
              Начать продвижение бизнеса
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
          src="https://smm-ibis.by/wp-content/uploads/2023/04/5314342852736594003.webp"
          className="w-screen relative h-full"
          alt=""
        />

        <div className="absolute ml-[310px] p-10 rounded-2xl flex justify-start items-start flex-col gap-y-10 bg-black/20 w-[749px]">
          <div>
            <span className="font-light text-white leading-8 text-xl uppercase">
              Ибис маркетинг
            </span>
            <h1 className="leading-[58px] text-[50px] text-white">
              Создание и<br /> продвижение сайтов
            </h1>
          </div>
          <p className="text-white leading-6 tracking-[1%]">
            Создание сайтов полного цикла, от разработки карты сайта, до
            продвижения и внедрения новых возможностей!
          </p>
          <div className="flex justify-center items-center gap-x-8">
            <button className="px-6 py-4 bg-white rounded-[100px] text-lg leading-6 uppercase">
              Узнать больше
            </button>
            <button className="px-6 py-4 text-white bg-[#FF3A2D] rounded-[100px] text-lg leading-6 uppercase">
              Начать продвижение бизнеса
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
          src="https://smm-ibis.by/wp-content/uploads/2023/04/5314535331695962703.webp"
          className="w-screen h-full relative"
          alt=""
        />

        <div className="absolute ml-[310px] p-10 rounded-2xl flex justify-start items-start flex-col gap-y-10 bg-black/20 w-[749px]">
          <div>
            <span className="font-light text-white leading-8 text-xl uppercase">
              Ибис маркетинг
            </span>
            <h1 className="leading-[58px] text-[50px] text-white">
              Создание и<br /> продвижение сайтов
            </h1>
          </div>
          <p className="text-white leading-6 tracking-[1%]">
            Создание сайтов полного цикла, от разработки карты сайта, до
            продвижения и внедрения новых возможностей!
          </p>
          <div className="flex justify-center items-center gap-x-8">
            <button className="px-6 py-4 bg-white rounded-[100px] text-lg leading-6 uppercase">
              Узнать больше
            </button>
            <button className="px-6 py-4 text-white bg-[#FF3A2D] rounded-[100px] text-lg leading-6 uppercase">
              Начать продвижение бизнеса
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
          src="https://smm-ibis.by/wp-content/uploads/2023/04/Desktop.webp"
          className="w-screen h-full relative"
          alt=""
        />

        <div className="absolute ml-[310px] p-10 rounded-2xl flex justify-start items-start flex-col gap-y-10 bg-black/20 w-[749px]">
          <div>
            <span className="font-light text-white leading-8 text-xl uppercase">
              Ибис маркетинг
            </span>
            <h1 className="leading-[58px] text-[50px] text-white">
              Создание и<br /> продвижение сайтов
            </h1>
          </div>
          <p className="text-white leading-6 tracking-[1%]">
            Создание сайтов полного цикла, от разработки карты сайта, до
            продвижения и внедрения новых возможностей!
          </p>
          <div className="flex justify-center items-center gap-x-8">
            <button className="px-6 py-4 bg-white rounded-[100px] text-lg leading-6 uppercase">
              Узнать больше
            </button>
            <button className="px-6 py-4 text-white bg-[#FF3A2D] rounded-[100px] text-lg leading-6 uppercase">
              Начать продвижение бизнеса
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
  );
};
export default Slider;
