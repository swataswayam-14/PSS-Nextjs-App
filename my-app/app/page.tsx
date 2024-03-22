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
      <Header/>
      <Navbar/>
      <Section/>
      <ServiceOfferingTitle/>
      <Services/>
      <ClientReview/>
      <Reviews/>
      <FinancialJargon/>
      <Jargons/>
      <CopyRight/>
    </div>
  );
}
