import { Toaster } from "react-hot-toast";
import {
  Footer,
  FooterMobile,
  Header,
  HeaderMobile,
  Mail,
  News,
  Quote,
  Slider,
  Title,
  Work,
  Price,
  SliderMobile,
  TitleMobile,
  WorkMobile,
  PriceMobile,
  QuoteMobile,
  NewsMobile,
  MailMobile,
  Agent,
  AgentMobile,
} from "./components";

const App = () => {
  return (
    <>
      <div className="md:block hidden">
        <div className="flex flex-col w-full justify-center items-center">
          <Header />
          <Slider />
          <Title />
          <Agent />
          <Work />
          <Price />
          <Quote />
          <News />
          <Mail />
        </div>

        <div className="relative z-[9999] bg-white">
          <Footer />
        </div>
        <Toaster />
      </div>

      <div className="md:hidden block">
        <HeaderMobile />
        <SliderMobile />
        <TitleMobile />
        <AgentMobile />
        <WorkMobile />
        <PriceMobile />
        <QuoteMobile />
        <NewsMobile />
        <MailMobile />
        <FooterMobile />
      </div>
    </>
  );
};
export default App;
