import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import { Modal } from "./";
import useOutSideAlerter from "../hooks/useOutSideAlerter";

const Work = () => {
  const { ref, isShow, setIsShow } = useOutSideAlerter(false);

  const [chooseSite, setChooseSite] = useState(false);
  const [chooseSmm, setChooseSmm] = useState(false);

  const [chooseCategory, setChooseCategory] = useState("");

  const [works, setWorks] = useState([]);
  const [url, setUrl] = useState("");

  const [worksLength, setWorksLength] = useState(6);
  const [workFull, setWorkFull] = useState(false);

  const getWorks = async () => {
    const { data } = await axios.get(
      `https://smm-ibis.by//wp-json/wp/v2/portfolio?per_page=100${
        !!chooseCategory ? `&categories=${chooseCategory}` : ""
      }`
    );

    setWorks(data);
  };

  const handleSmm = () => {
    setChooseSmm(true);
    setChooseSite(false);
    setChooseCategory(1);
  };

  const handleSite = () => {
    setChooseSmm(false);
    setChooseSite(true);
    setChooseCategory(3);
  };

  const hanldeAll = () => {
    setChooseSmm(false);
    setChooseSite(false);
    setChooseCategory(0);
  };

  const maxWorks = () => {
    setWorksLength(works.length);
    setWorkFull(true);
  };

  const minWorks = () => {
    setWorksLength(6);
    setWorkFull(false);
  };

  useEffect(() => {
    getWorks();
    setWorksLength(6);
    setWorkFull(false);
  }, [chooseCategory]);

  return (
    <div
      id="portf"
      className="flex flex-col gap-y-10 w-full max-w-[1300px] py-[104px]"
    >
      <div className="flex w-full justify-between items-center">
        <h1 className="leading-10 text-[32px]">Проекты</h1>
        <div className="">
          <button
            onClick={hanldeAll}
            className={`px-[14px] rounded-[30px] py-[6px] leading-6 ${
              !chooseSmm && !chooseSite ? "bg-[#FF3A2D] text-white" : ""
            }`}
          >
            All
          </button>
          <button
            onClick={handleSmm}
            className={`px-[14px] rounded-[30px] py-[6px] leading-6 ${
              chooseSmm ? "bg-[#FF3A2D] text-white" : ""
            }`}
          >
            SMM
          </button>
          <button
            onClick={handleSite}
            className={`px-[14px] rounded-[30px] py-[6px] leading-6 ${
              chooseSite ? "bg-[#FF3A2D] text-white" : ""
            }`}
          >
            Сайты
          </button>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {works.slice(0, worksLength).map(({ yoast_head_json }, idx) => {
          // console.log(yoast_head_json?.og_image[0].url)

          return (
            <img
              key={idx}
              src={yoast_head_json?.og_image[0].url}
              alt="T1"
              className="w-[417px] shadowWork h-[417px] hover:scale-105 cursor-pointer"
              onClick={() => {
                setIsShow((prv) => !prv);
                setUrl(yoast_head_json.og_image[0].url);
              }}
            />
          );
        })}
      </div>

      <div className="w-full flex justify-center items-center">
        {workFull ? (
          <button
            onClick={minWorks}
            className="px-6 py-4 bg-[#FF3A2D] rounded-[100px] text-center leading-4 font-medium text-white"
          >
            Свернуть проекты
          </button>
        ) : (
          <button
            onClick={maxWorks}
            className="px-6 py-4 bg-[#FF3A2D] rounded-[100px] text-center leading-4 font-medium text-white"
          >
            Смотреть все проекты
          </button>
        )}
      </div>

      <Modal refs={ref} setModal={setIsShow} modal={isShow} url={url} />
    </div>
  );
};
export default Work;
