import React from "react";
import { Link } from "react-router-dom";
import bajajfin from "../../../assets/bajaj.png";
import idfc from "../../../assets/idfc.png";
import hdfc from "../../../assets/hdfc.png";
import axis from "../../../assets/axis.png";
import rbl from "../../../assets/rbl.png";
import icici from "../../../assets/icici.png";
import saraswat from "../../../assets/saraswat.png";
import bankofbaroda from "../../../assets/bankofbaroda.png";
import bandhan from "../../../assets/bandhan.png";
import induslnd from "../../../assets/induslnd.png";



const InterestMain = () => {
  const features = [
    {
      name: "Bajaj Finance Limited",
      bk: "NBFC",
      rate: "13%",
      emi: "11,377",
      img: bajajfin,
      route: "/BajajPersonalLoan"
    },
    {
      name: "HDFC Bank",
      bk: "Bank",
      rate: "14%",
      emi: "11,634",
      img: hdfc, // route: "/bajaj"
    },
    {
      name: "Axis Bank",
      bk: "Bank",
      rate: "14.50%",
      emi: "11,764",
      img: axis, // route: "/bajaj"
    },
    {
      name: "RBL Bank",
      bk: "Bank",
      rate: "13.0%",
      emi: "11,377",
      img: rbl, // route: "/bajaj"
    },
    {
      name: "ICICI Bank",
      bk: "Bank",
      rate: "13.0%",
      emi: "11,374",
      img: icici, // route: "/bajaj"
    },
    {
      name: "Saraswat Bank",
      bk: "Bank",
      rate: "13.5%",
      emi: "11,505",
      img: saraswat, // route: "/bajaj"
    },
    {
      name: "Induslnd Bank",
      bk: "Bank",
      rate: "11.5%",
      emi: "10,966",
      img: induslnd, // route: "/bajaj"
    },
    {
      name: "Bank of Baroda",
      bk: "Bank",
      rate: "10.5%",
      emi: "10,747",
      img: bankofbaroda, // route: "/bajaj"
    },
    {
      name: "Bandhan Bank",
      bk: "Bank",
      rate: "11.0%",
      emi: "10,869",
      img: bandhan, // route: "/bajaj"
    },
    {
      name: "IDFC First Bank",
      bk: "Bank",
      rate: "10.5%",
      emi: "10,744",
      img: idfc, // route: "/bajaj"
    },

  ];

  return (
    <>
      <div className="tw-p-2">
        <div className="tw-hidden md:tw-block tw-w-3/4 tw-mx-auto">
          <div className="tw-m-3 tw-border-black tw-rounded-xl tw-w-full md:tw-w-11/12 tw-mx-auto">
            <h1 className=" tw-text-xl md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-font-bold tw-pt-16 tw-mb-8 md:tw-px-0 tw-text-left tw-pl-4">
              Best Personal Loan Interest Rates in India 2022
            </h1>
            <div className="tw-bg-transparent tw-flex tw-flex-row lg:tw-h-auto tw-w-11/12 tw-mx-auto md:tw-h-16 tw-h-20 tw-p-4 md:tw-p-0 tw-text-gray-700 tw-h-auto lg:tw-p-4 tw-w-full">
              <div className="tw-flex tw-w-full tw-items-center">
                <div className="tw-w-2/12 tw-text-left">
                </div>
                <div className="tw-flex tw-flex-row  md:tw-pl-14 lg:tw-pl-40 tw-flex-start md:tw-gap-4 lg:tw-gap-3 lg:tw-text-lg md:tw-text-sm tw-text-xs tw-w-full">
                  <div className="tw-text-left tw-w-1/4">Name</div>
                  <div className="tw-w-1/4">Bank/NBFC</div>
                  <div className="tw-w-1/4">Interest Rate (p.a.)</div>
                  <div className="tw-w-1/4">EMI/5 lakh for 5 yrs (Rs.)
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="md:tw-hidden">

          <div className="tw-m-3 tw-border-black tw-rounded-xl tw-w-full md:tw-w-4/6 tw-mx-auto">
            <h1 className=" tw-text-xl md:tw-text-2xl lg:tw-text-4xl tw-text-black tw-font-bold tw-pt-16 tw-mb-8 lg:tw-px-0 md:tw-px-16 tw-text-left md:tw-pl-4 tw-pl-4">
              Best Personal Loan Interest Rates in India 2022
            </h1>

            <div className="tw-font-bold tw-text-gray-600 tw-h-auto tw-p-4 tw-w-full">
              <div className="tw-flex tw-flex-row tw-pl-0 md:tw-pl-8 tw-flex-start tw-items-center md:tw-gap-6 lg:tw-gap-0 lg:tw-text-xl md:tw-text-sm tw-text-xs">
                <div className="tw-text-left tw-w-1/4 ">Name</div>
                <div className="tw-w-1/4">Bank/NBFC</div>
                <div className="tw-w-1/4">Inerest Rate (p.a.)</div>
                <div className="tw-w-1/4">EMI/5 lakh for 5 yrs. (Rs.)</div>
              </div>
            </div>
          </div>
        </div>
        <div>
          {features.map((data) => {
            return <Benefits data={data}> </Benefits>;
          })}
        </div>
        <p className="tw-text-center tw-mt-10 tw-mb-20 tw-text-lg">
          *Actual rate of interest will depend upon the eligibility criteria of lender
        </p>
      </div>
    </>
  );
};

const Benefits = (props) => {
  const { name, bk, rate, emi, img, route } = props.data;

  return (
    <>
      <div className="tw-hidden md:tw-block tw-mb-4 tw-w-3/4 tw-mx-auto">
        <Link style={{ textDecoration: 'none', }} className="tw-ring-black tw-text-black" to={route}>
          <div className="tw-bg-transparent tw-flex tw-flex-row md:tw-h-auto tw-w-11/12 tw-mx-auto md:tw-h-16 tw-h-20 tw-p-4 md:tw-p-0 tw-border-4 tw-border-solid tw-rounded-xl tw-border-nishblue-100">
            <div className="tw-flex tw-w-full tw-items-center">
              <div className="tw-w-2/12 tw-text-left">
                <img className="" src={img} />
              </div>
              <div className="tw-flex tw-flex-row  md:tw-pl-14 lg:tw-pl-40 tw-flex-start md:tw-gap-4 lg:tw-gap-3 lg:tw-text-lg md:tw-text-sm tw-text-xs tw-w-full">
                <div className="tw-text-left tw-w-1/4">{name}</div>
                <div className="tw-w-1/4">{bk}</div>
                <div className="tw-font-semibold tw-w-1/4">{rate} <span className="tw-font-normal tw-text-sm">onwards</span></div>
                <div className="tw-font-semibold tw-w-1/4">
                  {emi} <span className="tw-font-normal tw-text-sm">onwards</span>
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>

      <div className="md:tw-hidden">
        <Link style={{ textDecoration: 'none', }} className="tw-ring-black tw-text-black" to={route}>
          <div className="tw-m-3 tw-border-black tw-shadow-3xl tw-rounded-xl tw-w-full md:tw-w-5/6 tw-mx-auto">
            <div className="tw-border-solid tw-border-nishblue-100 tw-border-4 tw-bg-transparent tw-h-24 tw-p-4 tw-border-2 tw-rounded-xl tw-border-nishblue-100 tw-w-full">
              <div className="tw-flex tw-flex-row tw-gap-6 tw-flex-start tw-items-center tw-text-xs">
                <div className=" tw-w-1/5">{name}</div>
                <div className="tw-font-semibold tw-w-1/5">{bk}</div>
                <div className="tw-font-semibold tw-w-1/5">{rate}</div>
                <div className="tw-font-semibold tw-w-1/5">
                  {emi}
                </div>
              </div>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default InterestMain;
