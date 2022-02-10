import React from "react";

import Faq from "./Components/FAQ/Faq";
import Steps from "./Components/Steps/Steps";
import EligibilityTL from "./Components/TermLoan/EligibilityTL/EligibilityTL";
import FBTL from "./Components/TermLoan/FBTL/FBTL";
import FBTLMob from "./Components/TermLoan/FBTL/FBTLMob";
import InterestTL from "./Components/TermLoan/InterestTL/InterestTL";



const Bajaj_TL = () => {
    return (
        <>
            <FBTL />
            <FBTLMob />
            <InterestTL />
            <EligibilityTL />
            <Steps />
            <Faq />

        </>
    );
};

export default Bajaj_TL;
