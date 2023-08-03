import { PriceBlockMobile } from "./";

const PriceMobile = () => {
  const services = [
    "Ведение социальных сетей",
    "Разработка рекламных макетов",
    "Разработка акционных предложений",
    "Настройка таргетированной рекламы",
    "Настройка контекстной рекламы",
    "Разработка и наполнение контентом сайта",
    "Сопровождение размещения наружной рекламы/ радио",
  ];

  return (
    <div className="flex flex-col mt-20">
      <h2 className="px-4">Наши цены</h2>

      <div className="flex justify-start py-2 items-start overflow-x-auto gap-6 mt-6 px-4">
        <PriceBlockMobile priceByn={1100} priceRub={45000} services={services} />
      </div>
    </div>
  );
};
export default PriceMobile;
