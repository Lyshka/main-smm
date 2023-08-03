import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast } from "react-hot-toast";

const MailMobile = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qyeuhmr",
        "template_12l9xwb",
        form.current,
        "dcOlQT0d4xOkMtoc_"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Ваше сообщение успешно отправлено");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="h-[496px] flex justify-center items-center relative mt-10" id="form">
      <div className="absolute h-full w-full">
        <div className="bg-black/50 absolute z-10 h-full w-full">&nbsp;</div>
        <img
          src="https://smm-ibis.by/wp-content/uploads/2023/02/2a4037515f4e9532bd17ab6f56f81474-scaled.jpeg"
          alt="background"
          className="absolute h-full w-full object-cover"
        />
      </div>

      <div className={`w-[288px] relative z-20`}>
        <div className="flex w-full items-center justify-center flex-col">
          <span className="text-[#F4F4F4] w-full text-center text-sm uppercase">
            Заполните форму и мы Вам поможем
          </span>

          <div className="flex justify-center w-full items-center flex-col">
            <h1 className="mb-4 text-[22px] text-center text-white">
              Начните с аудита сайта
            </h1>
            <div className="bg-[#FF3A2D] w-24 h-[1px]">&nbsp;</div>
          </div>
        </div>

        <div className="w-full flex justify-center items-center mt-12">
          <form
            ref={form}
            onSubmit={sendEmail}
            className="relative z-20 flex flex-col justify-center gap-6 items-center"
          >
            <input
              required
              className="rounded-full"
              type="text"
              placeholder="Имя *"
              name="name"
            />
            <input
              required
              className="rounded-full"
              type="email"
              placeholder="Email *"
              name="email"
            />
            <input
              className="rounded-full"
              type="url"
              placeholder="Сайт: www.site.by"
              name="url"
            />
            <button
              type="submit"
              className="bg-[#FF3A2D] border-2 border-[#FF3A2D] text-white hover:bg-white hover:text-black rounded-full px-6 py-4 w-[307px] h-[48px] flex justify-center items-center text-lg uppercase"
            >
              получить КП
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default MailMobile;
