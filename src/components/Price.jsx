const Price = () => {
    const priceList = [
        {
            title: "SMM",
            desc: "Эффективное продвижение в социальных сетях: привлечение новых клиентов через Instagram, Facebook, TikTok, VK, OK.",
            img: "https://smm-ibis.by/wp-content/uploads/2023/07/SMM-продвижение.webp",
        },
        {
            title: "Таргетированная реклама",
            desc: "Подтолкните cвой бизнес на новый уровень: эффективная таргетированная реклама для расширения вашего рынка и увеличения прибыли",
            img: "https://smm-ibis.by/wp-content/uploads/2023/07/Таргетированная-реклама.webp",
        },
        {
            title: "Создание продающих сайтов",
            desc: "Максимизируйте потенциал вашего бизнеса: создание продающего сайта, который превращает посетителей в лояльных клиентов",
            img: "https://smm-ibis.by/wp-content/uploads/2023/07/content-7eca0a84.png",
        },
        {
            title: "SEO  |   Контекстная реклама   |  Тех. поддержка сайта",
            desc: "Доверьтесь профессионалам: команда SEO-специалистов, экспертов контекстной рекламы и опытных технических поддержки, готовых помочь вашему сайту процветать.",
            img: "https://smm-ibis.by/wp-content/uploads/2023/07/SEO-продвижение.webp",
        },
        {
            title: "Дизайн  |  Контент",
            desc: "Мы воплотим ваше видение в реальность: наша команда экспертов по дизайну и контенту готова создать неповторимый облик вашего проекта.",
            img: "https://smm-ibis.by/wp-content/uploads/2023/07/Функциональный-отдел-маркетинга.webp",
        },
        {
            title: "Оффлайн реклама",
            desc: "Уличная реклама с высокой видимостью: мы предлагаем разнообразные форматы и места размещения, чтобы ваш бренд был замечен и запомнен прохожими.",
            img: "https://smm-ibis.by/wp-content/uploads/2023/07/Наружная-реклама.webp",
        },
    ]

  return (
    <div className="flex flex-col gap-y-10 w-full max-w-[1300px] py-[104px]">
      <div className="flex w-full justify-between items-center">
        <h1 className="leading-10 text-[32px]">Услуги</h1>
      </div>

      <div>
        {priceList.map(({title, desc, img}, idx) => (
            <div key={idx} className="flex border-t border-b w-full py-6 justify-between items-start">
                <h1 className="text-xl leading-8 w-[307px]">{title}</h1>
                <p className="text-lg leading-8 w-[418px]">{desc}</p>
                <img src={img} alt="qqq" className="min-w-[417px] object-cover h-[168px] rounded-lg"/>
            </div>
        ))}
      </div>
    </div>
  );
};
export default Price;
