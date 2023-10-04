import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { DateTime } from "luxon";

const NewsMobile = () => {
  const [newsLisst, setNewsLisst] = useState([]);
  const [translate, setTranslate] = useState(0);
  const [dots, setDots] = useState(0);

  const ref = useRef();

  const trans = 246;
  const newsLength = newsLisst.length;

  const getNews = async () => {
    const { data } = await axios.get(
      "https://smm-ibis.by//wp-json/wp/v2/posts"
    );

    setNewsLisst(data);
  };

  const handleDots = (idx) => {
    // setTranslate(idx * -trans);
    setDots(idx);
    document.getElementById("scroll").scrollLeft = idx * 260
  };

  useEffect(() => {
    getNews();
  }, []);
    // ref?.current?.scrollLeft += 80;

  return (
    <div id="newsMobile" className="flex flex-col gap-y-6 w-full py-6">
      <div className="flex w-full justify-between items-center px-4">
        <h1 className="leading-6 text-lg">Статьи</h1>
      </div>

      <div className="flex relative justify-start items-center gap-x-6">
        <div className="w-full flex relative justify-start items-center gap-x-6 overflow-hidden">
          <div
            ref={ref}
            id="scroll"
            className="flex w-full scroll-smooth transition-all duration-500 overflow-hidden overflow-x-scroll justify-start px-4 items-center gap-x-6"
          >
            {newsLisst.map((el, idx) => (
              <a
                href={el.link}
                key={idx}
                className={`flex min-w-[246px] py-2 transition-all duration-500 flex-col justify-center items-center gap-y-4`}
                style={{ translate: `${translate}px` }}
              >
                <div className="w-full flex justify-center items-start">
                  <h1 className="leading-4 w-[189px] text-xs h-16 flex justify-center items-start">
                    {el.title.rendered}
                  </h1>
                  <span className="text-[#999999] text-right leading-4 text-[10px] h-16 flex justify-center items-start ">
                    {DateTime.fromISO(el.date)
                      .setLocale("ru")
                      .toFormat("d MMMM y")}
                  </span>
                </div>

                <img
                  className="w-[246px] rounded-lg h-[144px] object-cover"
                  src={el.yoast_head_json.og_image[0].url}
                  alt="qqq"
                />
                <div className="flex flex-col justify-center gap-y-2 items-center w-full">
                  <p className="w-[246px] obrez h-10 leading-4 text-xs">
                    {el.content.rendered.slice(0, 80)}...
                  </p>

                  <button className="text-white w-full text-xs leading-4 px-6 py-2 bg-[#FF3A2D] rounded-[100px]">
                    Подробнее
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default NewsMobile;
