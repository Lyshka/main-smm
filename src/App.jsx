import { Toaster } from "react-hot-toast";
import {
  AboutMobile,
  AddressMobile,
  EdgesMobile,
  Footer,
  FooterMobile,
  Header,
  HeaderMobile,
  Mail,
  MailMobile,
  News,
  Price,
  Quote,
  Slider,
  Title,
  TitleMobile,
  Work,
  WorkMobile,
} from "./components";
import { PriceMobile } from "./components/Mobile/PriceMobile";

const App = () => {
  return (
    <>
      <div className="md:block hidden">
        <div className="flex flex-col w-full justify-center items-center">
          <Header />
          <Slider />
          <Title />
          <Work />
          <Price />
          <Quote />
          <News />
          <Mail />
        </div>

        <div className="relative z-[9999] bg-white">
          <Footer />
          <Toaster />
        </div>
      </div>

      <div className="md:hidden block">
        <HeaderMobile />
        <TitleMobile />
        <AboutMobile />
        <EdgesMobile />
        <WorkMobile />
        <PriceMobile />
        <MailMobile />
        <AddressMobile />
        <FooterMobile />
      </div>
    </>
  );
};
export default App;
