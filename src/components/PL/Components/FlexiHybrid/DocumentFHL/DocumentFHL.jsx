import React from "react";

// Components

const DocumentFHL = () => {
    return (
        <>
            {/* BACKGROUND BOX */}
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Border Box */}
                <div className="tw-border-nishblue-100  md:tw-p-8">

                    {/* Component Starts */}
                    <div className=" tw-border-solid tw-h-auto tw-border-4 tw-rounded-2xl tw-border-nishblue-100">
                        <h1 className="tw-text-xl md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-text-left tw-font-bold tw-py-4 tw-px-4">Documents Requires for Bajaj Finserv Flexi Personal Loan</h1>
                        <div className="tw-text-left tw-p-6 tw-text-xs md:tw-text-sm lg:tw-text-lg xl:tw-text-xl">
                            <ul className="tw-ml-4 tw-list-disc">
                                <li>KYC documents </li><br />
                                <li>From 16 or latest salary slips</li><br />
                                <li>Bank account statements of the previous 3 months </li><br />
                            </ul>
                            (The document list mentioned here is indicative. You may be asked
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
};


export default DocumentFHL;