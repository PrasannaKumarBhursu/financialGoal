import React from "react";

const Table = () => {
    return (
        <>
            <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-2xl">
                <div className="tw-border-nishblue-100 md:tw-p-8">
                    <div className=" tw-h-auto tw-border-4 tw-rounded-2xl tw-border-solid tw-border-nishblue-100">
                        <h1 className="tw-text-2xl tw-text-left md:tw-text-4xl tw-text-black tw-font-semibold tw-py-4 tw-px-4">
                            Rate of Interest
                        </h1>
                        <h2 className="tw-text-xl md:tw-text tw-px-4 tw-text-left tw-font-semibold">Fixed Deposit</h2>
                        <p className="tw-px-4 tw-text-left tw-mt-2 tw-mb-2">Annual rate of interest valid for deposits up to Rs. 5 crore (w.e.f 01 Dec 2021)</p>

                        <div className="lg:tw-w-full md:tw-items-ctw-enter tw-flex tw-flex-col lg:tw-justify-evenly lg:tw-flex-row tw-p-2 md:tw-p-0">
                            <div className="lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-rounded-t-xl tw-font-semibold lg:tw-m-6 lg:tw--mr-2">
                                <h1 className="tw-text-xl md:tw-text-lg">Senior Citizen </h1>
                                <table className="tw-w-full tw-m-4 tw-text-center tw-rounded-xl tw-shadow-md ">
                                    <tr className="tw-border-nishblue-300 tw-border-collapse tw-text-xs md:tw-text-lg tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-rounded-tl-xl" rowSpan="2">Tenor in month</th>
                                        <th rowSpan="2">Cumulative</th>
                                        <th className="tw-rounded-tr-xl" colSpan="4">Non-Cumulative</th>
                                    </tr>
                                    <tr className="tw-border-nishblue-300 tw-text-xs md:tw-text-lg tw-border-collapse tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th>Monthly</th>
                                        <th>Quaterly</th>
                                        <th>Half Yearly</th>
                                        <th>Annual</th>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>12-23</td>
                                        <td>5.90%</td>
                                        <td>5.75%</td>
                                        <td>5.77%</td>
                                        <td>5.82%</td>
                                        <td>5.90%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>24-35</td>
                                        <td>6.65%</td>
                                        <td>6.46%</td>
                                        <td>6.49%</td>
                                        <td>6.54%</td>
                                        <td>6.65%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>36-60</td>
                                        <td>7.05%</td>
                                        <td>6.83%</td>
                                        <td>6.87%</td>
                                        <td>6.93%</td>
                                        <td>7.05%</td>
                                    </tr>
                                </table>
                            </div>

                            <div className="lg:tw-w-1/2 tw-flex tw-flex-col tw-items-center tw-rounded-t-xl tw-font-semibold lg:tw-m-6 tw-mb-2">
                                <h1 className="tw-text-xl md:tw-text-lg">Non-Senior Citizen</h1>
                                <table className="tw-w-full tw-m-4 tw-text-center tw-rounded-xl tw-shadow-md ">
                                    <tr className="tw-text-xs md:tw-text-lg tw-border-nishblue-300 tw-border-collapse tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th className="tw-rounded-tl-xl" rowSpan="2">Tenor in month</th>
                                        <th rowSpan="2">Cumulative</th>
                                        <th className="tw-rounded-tr-xl"colSpan="4">Non-Cumulative</th>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg tw-border-nishblue-300 tw-border-collapse tw-bg-nishblue-400 tw-text-nishtext-50">
                                        <th>Monthly</th>
                                        <th>Quaterly</th>
                                        <th>Half Yearly</th>
                                        <th>Annual</th>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>12-23</td>
                                        <td>5.65%</td>
                                        <td>5.51%</td>
                                        <td>5.53%</td>
                                        <td>5.57%</td>
                                        <td>5.65%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg tw-bg-nishbluelight-50">
                                        <td>24-35</td>
                                        <td>6.40%</td>
                                        <td>6.22%</td>
                                        <td>6.25%</td>
                                        <td>6.30%</td>
                                        <td>6.40%</td>
                                    </tr>
                                    <tr className="tw-text-xs md:tw-text-lg">
                                        <td>36-60</td>
                                        <td>6.80%</td>
                                        <td>6.60%</td>
                                        <td>6.63%</td>
                                        <td>6.69%</td>
                                        <td>6.80%</td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Table;
