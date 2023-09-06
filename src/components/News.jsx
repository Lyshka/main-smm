import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { DateTime } from "luxon";

const News = () => {
  const [newsLisst, setNewsLisst] = useState([]);
  const [translate, setTranslate] = useState(0);
  const [dots, setDots] = useState(0);

  const trans = 662;
  const newsLength = newsLisst.length;

  const getNews = async () => {
    const { data } = await axios.get(
      "https://smm-ibis.by//wp-json/wp/v2/posts"
    );

    setNewsLisst(data);
  };

  const handleLeft = () => {
    if (translate === 0) return;

    setTranslate((prv) => prv + trans);
    setDots(prv => prv - 1)
  };

  const handleRight = () => {
    if (-((newsLength - 1) * trans) === translate || newsLength === 2) {
      return;
    }

    setTranslate((prv) => prv - trans);
    setDots(prv => prv + 1)
  };

  const handleDots = (idx) => {
    setTranslate(idx * -trans);
    setDots(idx);
  };

  useEffect(() => {
    getNews();
  }, []);

  return (
    <div id="news" className="flex flex-col gap-y-10 w-full max-w-[1300px] py-[104px]">
      <div className="flex w-full justify-between items-center">
        <h1 className="leading-10 text-[32px]">Статьи</h1>
      </div>

      <div className="flex relative justify-start items-center gap-x-6">
        <div className="w-[1300px] flex relative justify-start items-center gap-x-6 overflow-hidden">
          <div className="flex w-full justify-start items-center gap-x-6">
            {newsLisst.map((el, idx) => (
              <a
                href={el.link}
                key={idx}
                className={`flex min-w-[638px] transition-all duration-500 flex-col justify-center items-center gap-y-4`}
                style={{ translate: `${translate}px` }}
              >
                <div className="w-full flex justify-between items-center">
                  <h1 className="leading-6 text-xl">{el.title.rendered}</h1>
                  <span className="text-[#999999] text-right text-xs">
                    {DateTime.fromISO(el.date)
                      .setLocale("ru")
                      .toFormat("d MMMM y")}
                  </span>
                </div>

                <img
                  className="w-[638px] rounded-lg h-[320px] object-cover"
                  src={el.yoast_head_json.og_image[0].url}
                  alt="qqq"
                />
                <div className="flex justify-between items-start w-full">
                  <p className="w-[417px] obrez h-20 leading-4 text-sm">
                    {el.content.rendered.slice(0, 80)}...
                  </p>

                  <button className="text-white text-sm leading-6 px-6 py-2 bg-[#FF3A2D] rounded-[100px]">
                    Подробнее
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="absolute left-0 flex justify-between w-full items-center">
          <div
            onClick={handleLeft}
            className="w-8 relative h-8 -left-4 cursor-pointer rounded-full flex justify-center items-center bg-black/50"
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
            onClick={handleRight}
            className="w-8 h-8 relative rounded-full -right-4 cursor-pointer flex justify-center items-center bg-black/50"
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

      {newsLength === 2 ? (
        ""
      ) : (
        <div className="flex justify-end -mt-5 items-center gap-x-2">
          {newsLisst.map((_, idx) => (
            <div
            key={idx}
              onClick={() => handleDots(idx)}
              className={`cursor-pointer transition-all duration-500 h-2 rounded-[7px] ${
                dots === idx ? "bg-black w-4" : "bg-[#A7A7A7] w-2"
              }`}
            >
              &nbsp;
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
export default News;
