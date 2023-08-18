import axios from "axios";
import { useEffect, useState } from "react";

const Agent = () => {
  const [agents, setAgents] = useState([]);
  const [translate, setTranslate] = useState(0);

  const trans = 1315;
  const newsLength = agents.length;

  const getAgents = async () => {
    const { data } = await axios.get(
      "https://smm-ibis.by//wp-json/wp/v2/agent?per_page=100"
    );

    setAgents(data);
  };

  const handleLeft = () => {
    if (translate === 0) return;

    setTranslate((prv) => prv + trans);
  };

  const handleRight = () => {
    console.log(translate * Math.round(newsLength / 4));

    if (
      -(Math.round(newsLength / 4) * trans) ===
        translate * Math.round(newsLength / 4) ||
      newsLength === 2
    ) {
      return;
    }

    setTranslate((prv) => prv - trans);
  };

  useEffect(() => {
    getAgents();
  }, []);

  return (
    <div className="flex flex-col justify-start items-start gap-y-16">
      <h1 className="leading-10 text-[32px]">С кем мы сотрудничаем</h1>
      <div className="flex relative justify-start items-center gap-x-6">
        <div className="w-[1300px] flex relative justify-start items-center gap-x-6 overflow-hidden">
          <div className="flex w-full justify-start px-1 items-center gap-x-6 py-2">
            {agents.map((el, idx) => (
              <div
                key={idx}
                className={`flex min-w-[305px] h-[176px] rounded-lg shadowPrice transition-all duration-500 flex-col justify-center items-center gap-y-4`}
                style={{ translate: `${translate}px` }}
              >
                <img
                  className="w-[192px] h-[139px] object-contain"
                  src={el.yoast_head_json.og_image[0].url}
                  alt="qqq"
                />
              </div>
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
    </div>
  );
};
export default Agent;
