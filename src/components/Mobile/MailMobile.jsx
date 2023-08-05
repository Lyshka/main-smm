import InputMobile from "./InputMobile";

const MailMobile = () => {
  return (
    <div
      id="contact"
      className="flex flex-col gap-y-6 justify-center items-center w-full py-6 px-4"
    >
      <div className="flex w-full justify-center items-center">
        <h1 className="leading-6 text-lg w-full">
          Давайте создадим что-то прекрасное вместе!
        </h1>
      </div>

      <form className="flex flex-col w-full gap-y-4 justify-center items-center">
        <InputMobile text={"Имя"} />

        <InputMobile text={"Телефон"} type={"tel"} />

        <InputMobile text={"Email"} type={"email"} />
      </form>
      <button className="bg-[#FF3A2D] rounded-[100px] shadowMailButton text-white leading-6 text-xs px-4 py-2 w-full text-center uppercase">
        Отправить
      </button>
    </div>
  );
};
export default MailMobile;
