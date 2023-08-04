import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

import ModalMobile from "./ModalMobile";
import useOutSideAlerter from "../../hooks/useOutSideAlerter";

const WorkMobile = () => {
  const { ref, isShow, setIsShow } = useOutSideAlerter(false);

  const [chooseSite, setChooseSite] = useState(false);
  const [chooseSmm, setChooseSmm] = useState(false);

  const [chooseCategory, setChooseCategory] = useState("");

  const [works, setWorks] = useState([]);
  const [url, setUrl] = useState("");

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

  useEffect(() => {
    getWorks();
  }, [chooseCategory]);

  return (
    <div
      id="portf"
      className="flex flex-col gap-y-4 w-full max-w-[1300px] py-6"
    >
      <div className="flex w-full justify-between items-center">
        <div className="flex w-full flex-col gap-y-4 justify-center items-center">
          <h1 className="leading-6 text-center text-lg">Проекты</h1>
          <div className="border border-[#F4F4F4] rounded-[30px] px-2">
            <button
              onClick={hanldeAll}
              className={`px-4 text-[10px] rounded-[30px] py-1 leading-4 ${
                !chooseSmm && !chooseSite ? "bg-[#FF3A2D] text-white" : ""
              }`}
            >
              All
            </button>
            <button
              onClick={handleSmm}
              className={`px-4 text-[10px] rounded-[30px] py-1 leading-4 ${
                chooseSmm ? "bg-[#FF3A2D] text-white" : ""
              }`}
            >
              SMM
            </button>
            <button
              onClick={handleSite}
              className={`px-4 text-[10px] rounded-[30px] py-1 leading-4 ${
                chooseSite ? "bg-[#FF3A2D] text-white" : ""
              }`}
            >
              Сайты
            </button>
          </div>
        </div>
      </div>
      <div className="flex px-4 overflow-hidden overflow-x-scroll gap-x-4 justify-start items-center">
        {works.map(({ yoast_head_json }, idx) => (
          <img
            key={idx}
            src={yoast_head_json.og_image[0].url}
            alt="T1"
            className="w-[272px] shadowWork h-[272px] hover:scale-105 cursor-pointer"
            onClick={() => {
              setIsShow((prv) => !prv);
              setUrl(yoast_head_json.og_image[0].url);
            }}
          />
        ))}
      </div>

      <ModalMobile refs={ref} setModal={setIsShow} modal={isShow} url={url} />
    </div>
  );
};
export default WorkMobile;
