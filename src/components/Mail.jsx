import Input from "./Input";

const Mail = () => {
  return (
    <div id="contact" className="flex gap-x-6 justify-center items-start w-full max-w-[1300px] py-[104px]">
      <div className="flex w-full justify-between items-center">
        <h1 className="leading-10 text-[32px] w-[528px]">
          Давайте создадим что-то прекрасное вместе!
        </h1>
      </div>

      <form className="flex flex-col w-full gap-y-4 justify-center items-center">
        <div className="flex justify-center w-full items-center gap-x-6">
          <div className="w-3/5">
            <Input text={"Имя"} />
          </div>
          <div className="w-2/5">
            <Input text={"Телефон"} type={"tel"} />
          </div>
        </div>
        <Input text={"Email"} type={"email"} />
        <button className="bg-[#FF3A2D] rounded-[100px] shadowMailButton text-white leading-6 text-lg px-6 py-4 w-full text-center uppercase">
          Отправить
        </button>
      </form>
    </div>
  );
};
export default Mail;
