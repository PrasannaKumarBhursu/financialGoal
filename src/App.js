import React, { useContext, useEffect } from "react";
// import logo from './NE_logo.png';
import "./App.css";
import Home from "./components/Home";
import OurStory from "./components/OurStory";
import Learn from "./components/resources/Learn";
import Loans from "./components/resources/Loans";
import MutualFunds from "./components/resources/MutualFunds";
import ProvidentFund from "./components/resources/ProvidentFund";
import FixedDeposit from "./components/resources/FixedDeposit";
import Insurance from "./components/resources/Insurance";
import CreditCard from "./components/resources/CreditCard";
import CryptoCurrency from "./components/resources/CryptoCurrency";
import RealEstate from "./components/resources/RealEstate";
import Gold from "./components/resources/Gold";
import Shares from "./components/resources/Shares";
// import IPO from './components/resources/IPO';
import AltInvestment from "./components/resources/AltInvestment";

import Careers from "./components/Careers/Careers";

import Disclaimer from "./components/Disclaimer";
import PrivacyPolicy from "./components/PrivacyPolicy";
import SocialPost from "./components/blogs/SocialPost";
import Faqs from "./components/Faqs";
import ContactUS from "./components/ContactUs";
import Invest from "./components/resources/Invest";
import Grow from "./components/resources/Grow";
import KnowYourFP from "./components/financialpulse/KnowYourFP";
import MoreWomenSpecial from "./components/women/MoreWomenSpecial";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import WomenSpecialHome from "./components/women/womenspecial/WomenSpecialHome";
import Tips from "./components/women/Tips";
import MoneyLessons from "./components/women/MoneyLessons";
import FinancialPlan from "./components/women/FinancialPlan";
import EmergencyFunds from "./components/women/EmergencyFunds";
import IPO from "./components/resources/IPO";
// import Investing from './components/women/Investing';
import Tax from "./components/women/Tax";
import WomenLoans from "./components/women/WomenLoans";
import IPOnew from "./components/markets/IPO";
import Webinar from "./components/webinar/Webinar.js";

import Admin from "./components/Admin/Admin";

import Updatelatest from "./components/Admin/Updatelatest";
import Latestpage from "./components/Admin/Latestpage";
import DetailedFP from "./components/financialpulse/DetailedFPNew";
import Details from "./components/Details/Details";
import PrivateRoute from "./PrivateRoute";

import { Switch, Route, useHistory } from "react-router-dom";
import Plans from "./components/Plans/Plans";
import { AppContext } from "./context/AppContext";
import axios from "axios";
import VerificationSent from "./components/Auth/VerificationSent";
import ThankyouForReg from "./components/Auth/ThankyouForReg";
import ForgotPassword from "./components/Auth/ForgotPassword";
import ResetPass from "./components/Auth/ResetPass";
import ScrollToTop from "./components/ScrollToTop";
import FD from "./components/FD/FD";
import Bajaj_finserv from "./components/FD/Bajaj_finserv";

function App() {
  // const {checktoken}=useContext(AppContext)

  //  useEffect(()=>{
   
  //  },[])

  return (
    <ScrollToTop>
    <div className="App">
      <Switch>
        {/* Auth */}
        <Route exact path="/Login" component={Login} />
        <Route exact path="/Register" component={Register} />
        <Route exact path="/Plans" component={Plans} />
        <Route exact path="/EmailSent" component={VerificationSent} />
        <Route exact path="/Thankyou" component={ThankyouForReg} />
        <Route exact path="/forgotpassword" component={ForgotPassword} />
        <Route exact path="/reset/:token" component={ResetPass}/>
        {/* <OurStory /> */}
        <Route exact path="/" component={Home} />
        <Route exact path="/OurStory" component={OurStory} />
        <Route exact path="/OurStory" component={OurStory} />
        <Route exact path="/FixedDeposits" component={FD} />
        <Route exact path="/FixedDeposits/bajaj" component={Bajaj_finserv}/>

        {/* Resources */}
        <Route exact path="/Learn" component={Learn} />
        <Route exact path="/Invest" component={Invest} />
        <Route exact path="/Grow" component={Grow} />
        <Route exact path="/Webinar" component={Webinar} />
        {/* Resource Links  */}
        <Route exact path="/Loans" component={Loans} />
        <Route exact path="/MutualFunds" component={MutualFunds} />
        <Route exact path="/ProvidentFund" component={ProvidentFund} />
        <Route exact path="/FixedDeposit" component={FixedDeposit} />
        <Route exact path="/Insurance" component={Insurance} />
        <Route exact path="/CreditCard" component={CreditCard} />
        <Route exact path="/Gold" component={Gold} />
        <Route exact path="/CryptoCurrency" component={CryptoCurrency} />
        <Route exact path="/RealEstate" component={RealEstate} />
        <Route exact path="/Shares" component={Shares} />
        <Route exact path="/IPO" component={IPO} />
        <Route exact path="/AltInvestment" component={AltInvestment} />

        {/* Financial pulse */}
        <Route exact path="/Score" component={KnowYourFP} />
        <Route exact path="/ComprehensiveFinancialPulse" component={DetailedFP} />

        <Route exact path="/Details" component={Details} />

        {/* Women Special */}
        <Route exact path="/WomenSpecial" component={MoreWomenSpecial} />
        <Route exact path="/WomenSpecialHome" component={WomenSpecialHome} />
        <Route exact path="/tips" component={Tips} />
        <Route exact path="/moneylesson" component={MoneyLessons} />
        <Route exact path="/financialplan" component={FinancialPlan} />
        <Route exact path="/emergencyfunds" component={EmergencyFunds} />
        {/* <Route exact path="/investing" component={Investing}/> */}
        <Route exact path="/tax" component={Tax} />
        <Route exact path="/womenloans" component={WomenLoans} />

        {/* Markets */}
        <PrivateRoute exact path="/IPOWatch" component={IPOnew} />
        {/* Social Links  */}
        <Route exact path="/SocialPost" component={SocialPost} />

        {/* Footer */}
        <Route exact path="/Careers" component={Careers} />
        <Route exact path="/Disclaimer" component={Disclaimer} />
        <Route exact path="/PrivacyPolicy" component={PrivacyPolicy} />
        <Route exact path="/Faqs" component={Faqs} />
        <Route exact path="/Contact" component={ContactUS} />
        {/* Admin */}
        {/* <Route exact path="/latest" component={Latestpage}/> 
           <Route exac path="/latest/:id" component={Updatelatest}/> */}
      </Switch>
      {/* <Header /> */}
      {/* <Carousel /> */}
      {/* <Test /> */}
      {/* <FinancialPulse /> */}
      {/* <OneStopSolution /> */}
      {/* <WomenSpecial /> */}
      {/* <Latest /> */}
      {/* <Footer /> */}
      {/* <SocialFollow /> */}
      {/* <AboutUs /> */}
      {/* <OurStory /> */}
    </div>
    </ScrollToTop>
  );
}

export default App;
