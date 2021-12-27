import React from "react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';

// Component Imports
import Example from "./List";
import ColorSwitches from "./Switch";
import { Slider } from "@material-ui/core";
import { grey } from '@mui/material/colors';
import { AiFillInfoCircle } from "react-icons/ai"

const CustomWidthTooltip = styled(({ className, ...props }) => (
    <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
        maxWidth: 200,
        backgroundColor: theme.palette.common.white,
        color: 'rgba(0, 0, 0, 0.87)',
        boxShadow: theme.shadows[1],
        fontSize: 11,
    },
}));

const toolTip1 = `
You can choose how would you like to get interest gains: Lumpsum at maturity or Periodically at fixed intervals
`;

const Calc = () => {

    const color = grey[900];
    return (
        <>
            {/* Background Box */}
            <div className="tw-m-3 tw-h-auto tw-border-black tw-shadow-3xl tw-rounded-2xl">

                {/* Blue Border Box */}
                <div className="tw-border-nishblue-100 tw-p-8">
                    <div className=" tw-h-auto tw-border-4 tw-rounded-2xl tw-border-nishblue-100">

                        {/* Calculator Start */}
                        <h1 className=" tw-text-2xl md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-text-left tw-px-4">Calculator</h1>

                        {/* Container Div */}
                        <div className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-gap-12 tw-py-4">
                            <div className="tw-m-8 tw-flex tw-flex-col md:tw-flex-row tw-justify-between tw-w-10/12 tw-h-auto tw-border-black tw-shadow-xl tw-rounded-2xl">

                                {/* Left Div Start  */}
                                <div className="tw-w-3/4 md:tw-mt-10 tw-ml-4">

                                    {/* Investment Amount Component */}
                                    <div className="tw-mt-2 md:tw-m-8 md:tw-mt-0">
                                        <h1 className="tw-text-xl md:tw-text-3xl tw-text-left tw-font-medium">
                                            Investment Amount
                                        </h1>
                                        <div className="tw-flex tw-flex-row tw-gap-0 tw-items-center">
                                            {/* Text Input */}
                                            <p className="tw-text-lg md:tw-text-xl tw-mt-4">Rs.</p>
                                            <input className="tw-mt-4 tw-p-2 tw-w-72 tw-outline-none tw-border-b-2 tw-border-black" type="text"></input>
                                        </div>
                                    </div>

                                    {/* Investment Tenure Component */}
                                    <div className="tw-mt-4 md:tw-mt-2 md:tw-m-8">
                                        <h1 className="tw-text-xl md:tw-text-3xl tw-text-left tw-font-medium">
                                            Investment Tenure
                                        </h1>
                                        {/* Slider Component */}
                                        <div className="tw-text-center md:tw-w-3/4 tw-mt-4 md:tw-m-6 tw-ml-0 tw-flex tw-flex-row tw-gap-2">
                                            <p className="tw-text-md md:tw-text-lg tw-font-semibold">12 Months</p>
                                            <Slider
                                                size="small"
                                                defaultValue={12}
                                                aria-label="Small"
                                                min={12}
                                                max={36}
                                                color={color}
                                                valueLabelDisplay="auto"
                                            />
                                            <p className="tw-text-md md:tw-text-lg tw-font-semibold">36 Months</p>
                                        </div>
                                    </div>

                                    {/* Interest Payout Component */}
                                    <div className="tw-mt-4 md:tw-mt-2 md:tw-m-8">
                                        <div className="tw-flex tw-flex-row tw-items-center tw-gap-10">
                                            <h1 className="tw-text-xl tw-text-left md:tw-text-3xl tw-font-medium">
                                                Interest Payout
                                            </h1>
                                            <div>
                                                <CustomWidthTooltip title={toolTip1}>
                                                    <Button className="tw-float-right">
                                                        <AiFillInfoCircle className="tw-text-xl tw-text-nishblue-400 tw-mt-2" />
                                                    </Button>
                                                </CustomWidthTooltip>

                                            </div>
                                        </div>
                                        {/* Drop List Component */}
                                        <Example />
                                    </div>

                                    {/* Senior Citizen Component */}
                                    <div className="tw-flex tw-flex-row tw-gap-4 tw-mt-6 md:tw-mt-2 tw-mb-8 md:tw-mb-8 md:tw-m-8">
                                        <p className="tw-font-semibold tw-text-md md:tw-text-lg">Are you a Senior Citizen?</p>

                                        {/* Switch */}
                                        <ColorSwitches />
                                    </div>

                                </div>
                                {/* Left Div Ends */}

                                {/* Right Div Starts */}
                                <div className="tw-w-1/4" className="tw-flex tw-flex-col tw-gap-1">

                                    {/* Card 1 */}
                                    <div className="tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-48 md:tw-rounded-tr-xl tw-h-36">
                                        <div className="tw-flex tw-flex-col tw-gap-1 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Interest Rate
                                            </p>
                                            <p className="tw-text-xl tw-text-white tw-font-black">
                                                5.90%
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 2 */}
                                    <div className=" tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-48 tw-h-36">
                                        <div className="tw-flex tw-flex-col tw-gap-3 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Interest Payout
                                            </p>
                                            <p className="tw-text-xl tw-text-white tw-font-black">
                                                Rs 1,475
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 3 */}
                                    <div className="tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-48 tw-h-36">
                                        <div className="tw-flex tw-flex-col tw-gap-3 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Matured By
                                            </p>
                                            <p className="tw-text-xl tw-text-white tw-font-black">
                                                December 2022
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card 4 */}
                                    <div className="tw-flex tw-flex-col tw-bg-nishblue-400 md:tw-w-48 md:tw-rounded-br-xl tw-h-36">
                                        <div className="tw-flex tw-flex-col tw-gap-3 tw-mx-5 tw-my-8">
                                            <p className="tw-text-nishblue-900 tw-text-sm tw-font-semibold">
                                                Maturity Amount
                                            </p>
                                            <p className="tw-text-xl tw-text-white tw-font-black">
                                                Rs 26,475
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                {/* Right div ends */}

                            </div>

                            {/* Invest now Button */}
                            <button className="tw-m-auto tw-bg-nishyellow-400 tw-text-xl tw-w-56 tw-h-16 tw-rounded-md md:tw-w-40 md:tw-h-12 lg:tw-w-56 lg:tw-h-16 tw--mt-12 md:tw--mt-28 tw-font-semibold">
                                <a className="tw-text-black" href="https://www.bajajfinserv.in/fixed-deposit-application-form?PartnerCode=126584&utm_source=IFA_Prime&utm_medium=B2B&utm_campaign=IFA_NISHKAERA_FINANCIAL_ADVISORY">
                                    Invest Now
                                </a>
                            </button>

                        </div>
                        {/* Container Div Ends */}

                    </div>
                </div>
                {/* Blue Border Box Ends */}
            </div>
            {/* Background Box Ends */}
        </>
    );
};


export default Calc;