import ClientReview from "./components/ClientReviewHeading";
import CopyRight from "./components/CopyRight";
import FinancialJargon from "./components/FinancialJargon";
import Header from "./components/Header";
import Jargons from "./components/Jargons";
import Navbar from "./components/Navbar";
import PopupForm from "./components/Popup";
import Reviews from "./components/Reviews";
import Section from "./components/Section";
import ServiceOfferingTitle from "./components/ServiceOffering";
import Services from "./components/Services";

export default function Home() {
  return (
    <div className="bg-snow">
      {/* <Header/> */}
      <Navbar/>
      <Section/>
      <ServiceOfferingTitle/>
      <Services/>
      <ClientReview/>
      <Reviews/>
      <FinancialJargon/>
      <Jargons/>
      <CopyRight/>
      <div className="bg-snow fixed bottom-2 right-0 z-50 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
        <a href="https://wa.me/9007881973?text=Hello can I help you?" target="_blank">
          <div className="flex flex-col sm:p-2 md:p-4 p-1 hover:bg-yellow-200 bg-snow rounded-full items-center">
          <img src="../whatsapp.png" alt="WhatsApp" className="w-14 h-14 object-cover rounded-lg" />
          <h1 className="text-sm font-extrabold text-black ">
            Connect with us
          </h1>
          </div>
        </a>
        </div>
    </div>
  );
}
