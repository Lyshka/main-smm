import { useState } from "react";

const HeaderMobile = () => {
  const [menu, setmenu] = useState(false);
  const [subMenu, setSubMenu] = useState(false);

  const handleMenu = () => {
    setmenu((prv) => !prv);
  };

  const handleSubMenu = () => {
    setSubMenu((prv) => !prv);
  };

  return (
    <div className="flex flex-col border-b">
      <div className="flex justify-between items-center w-full pl-2 pr-4 md:hidden">
        <a href="/">
          <img
            src="https://smm-ibis.by/wp-content/uploads/2023/03/logo_100x100.svg"
            alt="logo"
          />
        </a>

        <div>
          {!menu ? (
            <svg
              onClick={handleMenu}
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_1609_217)">
                <path
                  d="M28 8H4"
                  stroke="#333333"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 16H4"
                  stroke="#333333"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M28 24H4"
                  stroke="#333333"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_1609_217">
                  <rect width="32" height="32" fill="white" />
                </clipPath>
              </defs>
            </svg>
          ) : (
            <svg
              width="32"
              height="32"
              onClick={handleMenu}
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.40039 9.40039L22.5997 22.5997"
                stroke="#333333"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M9.40039 22.5996L22.5997 9.40028"
                stroke="#333333"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
      </div>

      {menu && (
        <div className="px-8 flex flex-col gap-8">
          <ul className="flex flex-col gap-y-6 uppercase tracking-[1px]">
            <li>
              <a href="https://smm-ibis.by/">Главная</a>
            </li>
            <li>
              <a href="https://smm-ibis.by/#onas">О нас</a>
            </li>
            <li>
              <a href="https://smm-ibis.by/#portf">Портфолио</a>
            </li>
            <li>
              <div
                onClick={handleSubMenu}
                className="flex justify-start items-center gap-x-2"
              >
                <span>Услуги и цены</span>
                <span>
                  {!subMenu ? (
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 16 16"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M4 6L8 10L12 6"
                        stroke="#333333"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  ) : (
                    <svg
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
                  )}
                </span>
              </div>
            </li>
            {subMenu && (
              <ul className="text-sm flex flex-col gap-y-6 lowercase px-6">
                <a href="https://smm-ibis.by/site-creation/">
                  <li className="active:text-[#FF3A2D]">Разработка сайта</li>
                </a>
                <a href="https://smm-ibis.by/obsluzhivaniyesayta/">
                  <li className="active:text-[#FF3A2D]">Обслуживание сайта</li>
                </a>
                <a href="https://smm-ibis.by/kontekstnayareklama/">
                  <li className="active:text-[#FF3A2D]">Контекстная реклама</li>
                </a>
                <a href="https://smm-ibis.by/seo/">
                  <li className="active:text-[#FF3A2D]">SEO продвижение</li>
                </a>
                <a href="https://smm-ibis.by/smmprodvizheniye/">
                  <li className="active:text-[#FF3A2D]">SMM продвижение</li>
                </a>
                <a href="https://smm-ibis.by/targetedadvertising/">
                  <li className="active:text-[#FF3A2D]">
                    Таргетированная реклама
                  </li>
                </a>
                <a href="https://smm-ibis.by/tiktokpromotion/">
                  <li className="active:text-[#FF3A2D]">TikTok продвижение</li>
                </a>
                <a href="https://smm-ibis.by/prodvizheniyenamarketpleysakh/">
                  <li className="active:text-[#FF3A2D]">
                    Продвижение на маркетплейсах
                  </li>
                </a>
                <a href="https://smm-ibis.by/razrabotkaunikalnogodizayna/">
                  <li className="active:text-[#FF3A2D]">
                    Разработка уникального дизайна
                  </li>
                </a>
                <a href="https://smm-ibis.by/naruzhnayareklama/">
                  <li className="active:text-[#FF3A2D]">Наружная реклама</li>
                </a>
                <a href="https://smm-ibis.by/sluzhbavybora/">
                  <li className="active:text-[#FF3A2D]">Booking service</li>
                </a>
                <a href="https://smm-ibis.by/videoprodakshn/">
                  <li className="active:text-[#FF3A2D]">Видео продакшн</li>
                </a>
                <a href="https://smm-ibis.by/prochiyeslugi/">
                  <li className="active:text-[#FF3A2D]">Прочие услуги</li>
                </a>
                <a href="https://smm-ibis.by/templates/">
                  <li className="active:text-[#FF3A2D]">Готовые сайты</li>
                </a>
                <a href="https://smm-ibis.by/funktsionalnyyotdelmarketinga/">
                  <li className="text-[#FF3A2D]">
                    Функциональный отдел маркетинга
                  </li>
                </a>
              </ul>
            )}

            <li>
              <a href="https://smm-ibis.by/48-best-wordpress-themes/">
                Новости
              </a>
            </li>
            <li>
              <a href="https://smm-ibis.by/#contact">Контакты</a>
            </li>
          </ul>

          <div className="flex flex-col justify-center items-start gap-y-2 pb-10">
            <div className="flex justify-center items-center gap-x-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M21.9999 16.9201V19.9201C22.0011 20.1986 21.944 20.4743 21.8324 20.7294C21.7209 20.9846 21.5572 21.2137 21.352 21.402C21.1468 21.5902 20.9045 21.7336 20.6407 21.8228C20.3769 21.912 20.0973 21.9452 19.8199 21.9201C16.7428 21.5857 13.7869 20.5342 11.1899 18.8501C8.77376 17.3148 6.72527 15.2663 5.18993 12.8501C3.49991 10.2413 2.44818 7.27109 2.11993 4.1801C2.09494 3.90356 2.12781 3.62486 2.21643 3.36172C2.30506 3.09859 2.4475 2.85679 2.6347 2.65172C2.82189 2.44665 3.04974 2.28281 3.30372 2.17062C3.55771 2.05843 3.83227 2.00036 4.10993 2.0001H7.10993C7.59524 1.99532 8.06572 2.16718 8.43369 2.48363C8.80166 2.80008 9.04201 3.23954 9.10993 3.7201C9.23656 4.68016 9.47138 5.62282 9.80993 6.5301C9.94448 6.88802 9.9736 7.27701 9.89384 7.65098C9.81408 8.02494 9.6288 8.36821 9.35993 8.6401L8.08993 9.9101C9.51349 12.4136 11.5864 14.4865 14.0899 15.9101L15.3599 14.6401C15.6318 14.3712 15.9751 14.1859 16.3491 14.1062C16.723 14.0264 17.112 14.0556 17.4699 14.1901C18.3772 14.5286 19.3199 14.7635 20.2799 14.8901C20.7657 14.9586 21.2093 15.2033 21.5265 15.5776C21.8436 15.9519 22.0121 16.4297 21.9999 16.9201Z"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              <span className="font-medium">+375 (33) 915 - 76 - 76</span>
            </div>
            <div className="flex justify-center items-center gap-x-4">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4 5H20C20.5477 5 21 5.45228 21 6V18C21 18.5477 20.5477 19 20 19H4C3.45228 19 3 18.5477 3 18V6C3 5.45228 3.45228 5 4 5Z"
                  stroke="#333333"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <g mask="url(#mask0_1618_1301)">
                  <path
                    d="M22 6L12 13L2 6"
                    stroke="#333333"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
              </svg>

              <span className="font-medium">mail@smm-ibis.by</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default HeaderMobile;
