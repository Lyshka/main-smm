const AddressMobile = () => {
  return (
    <div className="mt-12 w-full flex flex-col">
      <div className="flex">
        <div className="px-8 w-full py-10 border-t border-r border-[#BBBBBB]">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <svg
              version="1.1"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
              x="0px"
              y="0px"
              width="64px"
              height="64px"
              viewBox="0 0 64 64"
              enableBackground="new 0 0 64 64"
              xmlSpace="preserve"
              className="h-8 w-8"
              stroke="red"
            >
              <g>
                <rect x="36" y="8" width="9" height="2" />
                <rect x="19" y="16" width="26" height="2" />
                <rect x="19" y="24" width="26" height="2" />
                <path
                  d="M54,0H10v21.142L0,25.335V64h64V25.335l-10-4.193V0z M52,2v29.716L32,44.253L12,31.716V2H52z M10,30.462l-6.835-4.285
		L10,23.311V30.462z M2,62V27.807l30,18.807l30-18.807V62H2z M60.835,26.177L54,30.462v-7.151L60.835,26.177z"
                />
              </g>
            </svg>

            <div className="flex w-full flex-col gap-y-2 justify-center items-center">
              <h3 className="uppercase">email</h3>
              <span className="text-sm text-[#A7A7A7]">mail@smm-ibis.by</span>
            </div>
          </div>
        </div>

        <div className="px-8 w-full py-10 border-t border-r border-[#BBBBBB]">
          <div className="flex flex-col gap-y-4 justify-center items-center">
            <svg
              enableBackground="new 0 0 64 64"
              height="64"
              viewBox="0 0 64 64"
              width="64"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8"
            >
              <g fill="none" stroke="red" strokeMiterlimit="10" strokeWidth="2">
                <circle cx="32" cy="19.001" r="4" />
                <path d="m45 21.023c-.032-7.747-5.819-14.023-13-14.023s-13 6.276-13 14.023c0 10.023 12.979 25.977 12.979 25.977s13.064-15.954 13.021-25.977z" />
                <path d="m21 37h-9l-11 20h31 31l-11-20h-9" />
              </g>
            </svg>

            <div className="flex flex-col gap-y-2 justify-center items-center">
              <h3 className="uppercase">Адрес</h3>
              <span className="text-sm text-[#A7A7A7] text-center">
                г. Могилев, ул. Ленинская 11
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="px-8 w-full py-10 border-t border-r border-[#BBBBBB]">
        <div className="flex flex-col gap-y-4 justify-center items-center">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            width="64px"
            height="64px"
            viewBox="0 0 64 64"
            enableBackground="new 0 0 64 64"
            xmlSpace="preserve"
            className="w-8 h-8"
            stroke="red"
          >
            <g>
              <path
                d="M53,27h-1v-5c0-0.17-0.229-17-20-17S12,21.83,12,22v5h-1C4.935,27,0,31.935,0,38s4.935,11,11,11h3V31v-4v-5
		c0-0.612,0.205-15,18-15c17.739,0,17.998,14.389,18,15v5v1v20v1v3.323l-13,5.2V54H27v6h9.192L52,53.677V49h1
		c6.065,0,11-4.935,11-11S59.065,27,53,27z M12,47h-1c-4.963,0-9-4.038-9-9s4.037-9,9-9h1v2V47z M29,58v-2h6v2H29z M53,47h-1V29h1
		c4.963,0,9,4.038,9,9S57.963,47,53,47z"
              />
            </g>
          </svg>

          <div className="flex flex-col gap-y-2 justify-center items-center">
            <h3 className="uppercase">Телефоны</h3>

            <span className="text-sm text-[#A7A7A7]">+375 (29) 630-89-99</span>

            <span className="text-sm text-[#A7A7A7]">+375 (29) 853-88-72</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default AddressMobile;
