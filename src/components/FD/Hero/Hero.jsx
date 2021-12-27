import React from "react";

// Imports
import bajajxpattern from "../assets/3.png";
import bajaj from "../assets/bajaj.png";

const Hero = () => {
    return (
        <>
            {/* Background Box */}
            <div className="tw-h-max-content tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box  */}
                <div className="tw-border-nishblue-100 tw-p-8">
                    <div className="tw-bg-transparent tw-flex md:tw-flex-row tw-flex-col tw-gap-0 tw-justify-evenly tw-h-auto tw-p-0 tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        {/* Left Div */}
                        {/* Brand Logo */}
                        <div className="tw-w-full tw-h-full tw-p-0 tw-m-0">
                            <img className="tw-rounded-tl-xl md:tw-rounded-bl-xl tw-h-full" src={bajajxpattern} />
                        </div>

                        {/* Right Div */}
                        {/* Table Container Starts */}
                        <div className=" tw-w-2/5 tw-m-10 tw-my-auto">

                            {/* Table Border Box */}
                            <div className=" tw-flex tw-flex-col tw-mb-6 tw-gap-0 tw-mt-6 md:tw-mt-0 md:tw-float-right tw--ml-3 lg:tw-mr-6 md:tw-ml-0 tw-border-2 tw-w-max lg:tw-h-80 tw-h-64 tw-border-nishblue-400 tw-rounded-xl ">

                                {/* Table Top */}
                                <div className="tw-w-full tw-rounded-t-lg tw-p-4 tw-border-b-0">
                                    <h1 className="tw-font-bold lg:tw-text-3xl md:tw-text-xl tw-text-lg tw-mb-2">
                                        Bajaj Finance Fixed Deposit
                                    </h1>

                                    <p className="lg:tw-text-xl md:tw-text-md tw-text-sm tw-pt-2 tw-font-semibold tw-mb-1">Interest Rates</p>

                                    <div className=" tw-pt-2 tw-flex tw-flex-row lg:tw-text-lg md:tw-text-sm tw-text-xs tw-gap-4 tw-pl-8">
                                        <ul className="tw-list-disc">
                                            <li>Senior Citizens</li>
                                            <li>Non Senior Citizens</li>
                                        </ul>
                                        <ul className="tw-list-none">
                                            <li>
                                                -upto <span className="tw-font-semibold">7.05% p.a.</span>
                                            </li>
                                            <li>
                                                -upto <span className="tw-font-semibold">6.80% p.a.</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>

                                {/* Table Bottom */}
                                <div className="tw-flex tw-flex-row tw-justify-evenly tw-border-nishblue-400 tw-border-t-2 tw-rounded-b-lg tw-p-4">
                                    <div className="lg:tw-text-lg md:tw-text-sm tw-text-xs tw-text-center lg:tw-mt-2">
                                        <p>TENURE</p>
                                        <p className="tw-font-semibold">12-60 months</p>
                                    </div>

                                    <div className="lg:tw-text-lg md:tw-text-sm tw-text-xs tw-text-center lg:tw-mt-2">
                                        <p>MIN DEPOSIT</p>
                                        <p className="tw-font-semibold">Rs.25,000</p>
                                    </div>
                                </div>

                                {/* Invest Now Button */}

                                <button className="tw-m-auto tw--mt-2 md:tw--mt-6 tw-bg-nishyellow-400 lg:tw-text-lg md:tw-text-sm tw-text-xs tw-rounded-md tw-h-10 lg:tw-w-2/4 lg:tw-h-32 md:tw-w-32 md:tw-h-12 tw-w-28  tw-font-semibold">
                                    <a className="tw-text-black" href="https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=126584&utm_source=IFA_Prime&utm_medium=B2B&utm_campaign=IFA_NISHKAERA_FINANCIAL_ADVISORY">
                                        Invest Now
                                    </a>
                                </button>


                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    );
};


export default Hero;