import { useState } from "react";

const PriceBlockMobile = ({ priceByn, priceRub, services }) => {
  const [block, setblock] = useState(false);

  const handleBlock = () => {
    setblock((prv) => !prv);
  };

  return (
    <div className="min-w-[264px] shadowPrice rounded-2xl">
      <h3 className="px-6 py-4">Функциональный отдел маркетинга</h3>

      <div className="bg-[#FF3A2D] p-6 text-white w-full">
        <div className="flex text-lg flex-col gap-y-4">
          <p className="font-bold text-center">
            от <span className="font-black text-[40px]">{priceByn}</span> BYN
          </p>

          <p className="font-bold text-center">
            от <span className="font-black text-[40px]">{priceRub}</span> RUB
          </p>
        </div>
      </div>

      <div className="flex flex-col">
        <div
          onClick={handleBlock}
          className="flex gap-x-2 justify-center cursor-pointer items-center w-full h-14"
        >
          <span className="font-bold">Подробнее</span>

          <svg
            className={`${!block ? "block" : "hidden"}`}
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M4.5 6L8.5 10L12.5 6"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>

          <svg
            className={`${block ? "block" : "hidden"}`}
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12 10L8 6L4 10"
              stroke="#333333"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {block && (
          <div className="flex flex-col">
            {block && (
              <div className="flex flex-col">
                {services.map((el, idx) => (
                  <span
                    className={`px-6 py-4 ${idx % 2 !== 0 && "bg-[#F4F4F4]"}`}
                  >
                    {el}
                  </span>
                ))}
              </div>
            )}
          </div>
        )}
      </div>

      <div className="flex justify-center items-center p-6">
        <a href="#form">
          <button className="mt-6 border-2 rounded-full px-6 py-3 w-full hover:bg-[#FF3A2D] hover:text-white border-[#FF3A2D] font-extrabold text-sm">
            ПОЛУЧИТЬ КП
          </button>
        </a>
      </div>
    </div>
  );
};
export default PriceBlockMobile;
