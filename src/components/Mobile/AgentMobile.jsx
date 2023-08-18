import axios from "axios";
import { useEffect, useRef } from "react";
import { useState } from "react";
import { DateTime } from "luxon";

const AgentMobile = () => {
  const [newsLisst, setNewsLisst] = useState([]);
  const [translate, setTranslate] = useState(0);
  const [dots, setDots] = useState(0);

  const ref = useRef();

  const trans = 246;
  const newsLength = newsLisst.length;

  const getNews = async () => {
    const { data } = await axios.get(
      "https://smm-ibis.by//wp-json/wp/v2/agent?per_page=100"
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
    <div className="flex flex-col gap-y-6 w-full py-6">
      <div className="flex w-full justify-between items-center px-4">
        <h1 className="leading-6 text-lg">С кем мы сотрудничаем</h1>
      </div>

      <div className="flex relative justify-start items-center gap-x-6">
        <div className="w-full flex relative justify-start items-center gap-x-6 overflow-hidden">
          <div
            ref={ref}
            id="scroll"
            className="flex w-full scroll-smooth transition-all duration-500 overflow-hidden overflow-x-scroll justify-start py-1 px-4 items-center gap-x-6"
          >
            {newsLisst.map((el, idx) => (
              <div
                key={idx}
                className={`flex shadowPrice min-w-[253px] min-h-[145px] py-2 transition-all duration-500 flex-col justify-center rounded-lg items-center gap-y-4`}
                style={{ translate: `${translate}px` }}
              >
                <img
                  className="rounded-lg w-24 h-24 object-contain"
                  src={el.yoast_head_json.og_image[0].url}
                  alt="qqq"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
export default AgentMobile;
