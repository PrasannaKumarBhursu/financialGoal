import React from "react";
import FinancialGoalsForm from "./FinancialGoalsForm";

//image
import "../index.css";
import step3 from "../assets/step3.png";
import step3mob from "../assets/step3mob.png";
import aadhar from "../assets/aadhar.png";

const FinancialGoals = (props) => {
  const { next } = props;
  return (
    <>
      <div className="tw-hidden tw-mt-20 md:tw-visible tw-w-full tw-px-8 tw-pt-18">
        <img src={step3} className="tw-mx-auto tw-w-full" />
      </div>
      <div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
        <img src={step3mob} className="tw-mx-auto tw-w-full" />
      </div>

      <div className=" tw-container tw-mx-auto tw-flex tw-w-full tw-h-auto tw-border-2 tw-border-solid tw-rounded-2xl tw-pt-8 tw-p-5 tw-mt-8 tw-border-nishblue-100">
        <div className="tw-hidden  lg:tw-block tw-w-1/3 lg:tw-w-2/5 xl:tw-w-2/5">
          <img
            src={aadhar}
            className="tw-w-full tw-top-4 tw-hidden lg:tw-block tw-sticky tw-top-0 tw-m-auto  tw-mt-3 tw-my-auto"
          />
        </div>
        <div className=" tw-grow">
          <h1 className="tw-font-black ">Financial Goals</h1>
          <FinancialGoalsForm next={next} />
        </div>
      </div>
    </>
  );
};

export default FinancialGoals;
