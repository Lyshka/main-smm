import { useState, useEffect } from "react";
import axios from "axios";

import useOutSideAlerter from "../../hooks/useOutSideAlerter";
import ModalMobile from "./ModalMobile";

const WorkMobile = () => {
  const { ref, isShow, setIsShow } = useOutSideAlerter(false);
  const [url, setUrl] = useState("");
  const [work, setWork] = useState([]);

  const getWorkHalf = async () => {
    const { data } = await axios.get(
      `https://smm-ibis.by//wp-json/wp/v2/portfolio?per_page=100`
    );

    const jac = data.filter(el => el.title.rendered === "JAC")

    setWork(jac);
  };

  useEffect(() => {
    getWorkHalf();
  }, []);

  return (
    <div className="mt-28">
      <div>
        <h2 className="px-4">Наши работы</h2>

        <div className="mt-6 flex gap-y-6  justify-center items-center">
          <div
            className={`flex flex-row gap-6 items-center overflow-x-auto justify-between px-4`}
          >
            {work.map(({ yoast_head_json }, idx) => (
              <img
                key={idx}
                src={yoast_head_json.og_image[0].url}
                alt="T1"
                className="w-[317px] shadowWork h-[317px] hover:scale-105 cursor-pointer"
                onClick={() => {
                  setIsShow((prv) => !prv);
                  setUrl(yoast_head_json.og_image[0].url);
                }}
              />
            ))}
          </div>
        </div>
      </div>

      <ModalMobile refs={ref} setModal={setIsShow} modal={isShow} url={url} />
    </div>
  );
};
export default WorkMobile;
