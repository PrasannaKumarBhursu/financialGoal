import React from "react";
// Imports
import bajajxpattern from "../assets/3.png";
import mainhero from "../assets/mainhero.png";

const Main_Hero = () => {
    return (
        <>
            {/* Background Box */}
            <div className="tw-h-max-content tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box  */}
                <div className="tw-border-nishblue-100 tw-p-8">
                    <div className="tw-bg-transparent tw-flex md:tw-flex-row-reverse tw-flex-col tw-gap-0 tw-justify-evenly tw-h-auto tw-p-0 tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        {/* Left Div */}
                        {/* Brand Logo */}
                        <div className="tw-w-full tw-h-full tw-p-0 tw-m-0">
                            <img className="tw-rounded-tl-xl md:tw-rounded-bl-xl tw--mr-1 tw--mb-1 tw-float-right tw-h-full" src={mainhero} />
                        </div>

                        {/* Right Div */}
                        {/* Table Container Starts */}
                        <div className="tw-w-3/5 tw-m-10  tw-my-auto">

                            {/* Table Border Box */}
                            <div className=" tw-flex tw-flex-col tw-mb-6 tw-gap-0 tw-mt-6 md:tw-mt-0 md:tw-float-right tw--ml-2 lg:tw-mr-6 md:tw-ml-0 tw-border-2 tw-w-64 md:tw-w-60 lg:tw-w-max lg:tw-h-68 tw-h-64 tw-border-nishblue-400 tw-rounded-xl ">

                                {/* Table Top */}
                                <div className="lg:tw-w-96 tw-rounded-t-lg tw-p-4 tw-border-b-0">
                                    <h1 className="tw-font-bold tw-text-center lg:tw-text-5xl md:tw-text-2xl tw-text-lg tw-mb-2">
                                        Fixed Deposit
                                    </h1>

                                    <p className="tw-text-center lg:tw-text-xl md:tw-text-md tw-text-sm tw-pt-2 tw-mb-1">Invest in the most secure and the most liked investment product of India
                                    </p>

                                    <div className=" tw-pt-2 tw-flex tw-flex-row lg:tw-text-lg md:tw-text-sm tw-text-xs tw-gap-4 tw-pl-8">
                                        <p>

                                        </p>
                                    </div>
                                </div>

                                {/* Table Bottom */}
                                <div className="tw-text-center tw-border-nishblue-400 tw-font-semibold tw-border-t-2 tw-rounded-b-lg tw-p-4">
                                    <p>RATE OF INTEREST
                                        Up to 7.05% p.a.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};


export default Main_Hero;