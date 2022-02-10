import React from "react";

import AboutFL from "./Components/FlexiLoan/AboutFL/AboutFL";
import FeaturesFL from "./Components/FlexiLoan/FeaturesFL/FeaturesFL";
import InterestFL from "./Components/FlexiLoan/InterestFL/InterestFL";
import DocumentFL from "./Components/FlexiLoan/DocumentFL/DocumentFL"
import RequirementFL from "./Components/FlexiLoan/RequirementFL/RequirementFL";
import Steps from "./Components/Steps/Steps";
import Faq from "./Components/FAQ/Faq";



const Bajaj_FL = () => {
    return (
        <>
            <AboutFL/>
            <FeaturesFL/>
            <InterestFL/>
            <DocumentFL />
            <RequirementFL />
            <Steps/>
            <Faq/>
        </>
    );
};

export default Bajaj_FL;
