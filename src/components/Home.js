import React from "react";
import Header from "./Layout/Header";
import Carousel from "./carousel/Carousel";
import FinancialPulse from "./financialpulse/FinancialPulse";
import WomenSpecial from "./WomenSpecial";
import OneStopSolution from "./OneStopSolution";
import Latest from "./Latest";

// import FinancialPlanning from './resources/FinancialPlanning';
// import Resources from './resources/Resources';

import Footer from "./Layout/Footer";
import SocialFollow from "./social/SocialFollow";
import Marque from "./Marque";
//  import ContactUS from "./ContactUs";

function Home() {
  return (
    <div>
      <Header />
      <Marque />
      <Carousel />
      <FinancialPulse />
      <OneStopSolution />
      <WomenSpecial />
      <Latest />
      {/* <ContactUS/>  */}
      {/* <FinancialPlanning /> */}
      {/* <Resources /> */}
      <Footer />
      <SocialFollow />
      {/* <AboutUs /> */}
      {/* <OurStory /> */}
    </div>
  );
}

export default Home;
