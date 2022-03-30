import React, { useState } from "react";
import { HiLocationMarker } from "react-icons/hi";
import { IoIosMail } from "react-icons/io";
import {
  RiWhatsappFill,
  RiYoutubeFill,
  RiLinkedinBoxFill,
} from "react-icons/ri";
import { SiFacebook } from "react-icons/si";
import { BiRadioCircleMarked } from "react-icons/bi";
import { TiSocialInstagram } from "react-icons/ti";
import { AiFillTwitterCircle, AiOutlineCopyrightCircle } from "react-icons/ai";
import Logo from "./assets/nishka_footer.png";

import { Button, Alert, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

import dotenv from "dotenv";
import axios from "axios";

dotenv.config();
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      show: false,
      message: "",
      err: false,
      showUnsubscribe: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { show, message, err, showUnsubscribe, ...rest } = this.state;
    try {
      const res = await axios.post(
        `${process.env.REACT_APP_APIURL}/api/newsletter`,
        rest
      );
      this.setState({
        email: "",
        show: true,
        err: false,
        message: "Thankyou for subscribing to our newsletter.",
      });
    } catch (error) {
      if (error.response) {
        if (error.response.status === 400) {
          this.setState({
            showUnsubscribe: true,
          });
        }
        error.response &&
          this.setState({
            show: true,
            err: true,
            message: error.response.data.message,
          });
      }
    }
  };
  closePopup = () => {
    this.setState({
      show: false,
      showUnsubscribe: false,
    });
  };
  onUpdate = () => {
    const { email } = this.state;
    console.log(email);
    axios
      .post(`${process.env.REACT_APP_APIURL}/api/newsletter/unsubscribe`, {
        email: email,
      })
      .then((res) => res.data)
      .then((data) =>
        this.setState({
          message: "Your email has been unsubscribed successfully!",
          showUnsubscribe: false,
        })
      );
  };
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };
  render() {

    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <div className="tw-flex tw-flex-col md:tw-flex-row tw-bg-navgreen-700 tw-text-white tw-items-center tw-p-3 tw-pt-6">
            <div className="md:tw-w-2/5 tw-p-2">
              <div className="tw-text-xl lg:tw-text-2xl xl:tw-text-3xl tw-font-semibold">
                SUBSCRIBE TO OUR REPORTS
              </div>
              <div className="tw-pt-3 lg:tw-text-lg">
                {" "}
                Learn <span>•</span> Invest <span>•</span> Grow <span>•</span>{" "}
              </div>
            </div>
            <div className="md:tw-w-2/5 tw-p-2 tw-flex tw-flex-col tw-items-center tw-text-white">
              <div className="lg:tw-w-3/4 md:tw-w-4/5">
                <input
                  required
                  onChange={this.handleChange}
                  value={this.state.email}
                  name="email"
                  type="email"
                  placeholder="Your Email Address"
                  className="tw-w-full tw-shadow-xl tw-outline-none tw-pl-2 tw-p-1.5 tw-drop-shadow-sm placeholder:tw-text-white tw-m-2 tw-bg-navgreen-100 tw-opacity-50 tw-rounded-xl"
                />
              </div>
              {/* <div className="tw-flex lg:tw-text-lg tw-gap-1.5 tw-pt-3 md:tw-pt-0 tw-text-xs lg:tw-gap-4 tw-items-center ">
              <div>
                <span className="md:tw-pr-1.5">
                  <BiRadioCircleMarked />
                </span>
                Daily Digest
              </div>
              <div>
                <span className="md:tw-pr-1.5">
                  <BiRadioCircleMarked />
                </span>
                IPO Watch
              </div>
              <div>
                <span className="md:tw-pr-1.5">
                  <BiRadioCircleMarked />
                </span>
                Financial Reports
              </div>
            </div> */}
            </div>
            <div className="md:tw-w-1/5 tw-p-2 tw-mt-2 md:tw-mt-0">
              <button
                type="submit"
                className="tw-bg-navgreen-800 tw-shadow-xl tw-border-none tw-text-white tw-rounded-3xl tw-px-8 tw-font-semibold tw-py-2">
                Subscribe
              </button>
            </div>
          </div>
        </form>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.closePopup}
        >
          <Modal.Header className="tw-bg-navgreen-600" closeButton></Modal.Header>
          <Modal.Body className="tw-bg-navgreen-700 tw-text-white">
            <Alert>
              {this.state.showUnsubscribe ? (
                <>
                  <h4>This email address is already subscribed.</h4>
                  <p>
                    To unsubscribe, click on <b>Unsubscribe</b> button below or{" "}
                    <b>Cancel</b> button to keep subscribed.
                  </p>
                  <Button
                    variant={this.state.err ? "danger" : "success"}
                    onClick={this.onUpdate}
                  >
                    Unsubscribe
                  </Button>
                </>
              ) : (
                <h4>{this.state.message}</h4>
              )}
            </Alert>
          </Modal.Body>
          <Modal.Footer className="tw-bg-navgreen-600 tw-text-center">
            <Button className="tw-bg-white hover:tw-bg-nishblue-400 tw-mx-auto tw-w-2/4" onClick={this.closePopup} variant="outline-primary">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>

        <div className="tw-w-full tw-bg-navgreen-800 tw-text-white tw-pt-4 tw--pb-2 md:tw-text-left md:tw-pl-5 tw-pb-3 md:tw-pb-0">
          <img src={Logo} className="tw-w-72 tw-h-20 lg:tw-w-72 lg:tw-h-20 md:tw-w-56 md:tw-h-14" />
        </div>

        <div className="tw-items-center tw-flex tw-flex-col md:tw-flex-row tw-bg-navgreen-800 tw-text-white xl:tw--mt-0 tw-pb-10 lg:tw--mt-20 md:tw--mt-14 xl:tw--mt-2">
          <div className="tw-flex tw-flex-col md:tw-w-1/5 tw-items-center xl:tw--ml-8 lg:tw-ml-2 md:tw--mt-24 lg:tw--mt-5 xl:tw--mt-1">
            <div className="tw-text-footer-100 tw-font-bold  tw-text-lg lg:tw-text-2xl">
              Company
            </div>
            <div className="tw-flex tw-flex-col tw-text-sm lg:tw-text-lg md:tw-text-left">
              <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/OurStory">Our Story </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/Careers">Careers </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/Disclaimer">Disclaimer </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/PrivacyPolicy">Privacy Policy </Link></p>
              <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="#">Terms Of Use </Link></p>
            </div>
          </div>
          <div className="tw-flex tw-flex-col md:tw--mt-36 lg:tw--mt-0 md:tw-w-1/4 lg:tw-w-1/5 xl:tw-w-1/4 xl:tw--mt-16 lg:tw--mt-20 tw-items-center lg:tw-ml-4 xl:tw--ml-10 xl:tw-mr-16">
            <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl">
              Products
            </div>
            <div className="tw-flex tw-flex-row tw-gap-3 lg:tw-gap-8 xl:tw-gap-12 lg:tw-text-lg">
              <div className="tw-flex tw-flex-col tw-text-sm md:tw-text-left lg:tw-text-lg">
                <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/FixedDeposits">Fixed Deposit </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/PersonalLoan">Personal Loan </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/MutualFunds">Mutual Funds </Link></p>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col md:tw--mt-28 lg:tw--mt-0 md:tw-w-1/4 lg:tw-w-2/5 xl:tw-w-1/4 lg:tw--mt-20 xl:tw--mt-16 tw-items-center xl:tw--ml-10 xl:tw-mr-16">
            <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl lg:tw--ml-4 xl:tw--ml-0">
              Services
            </div>
            <div className="tw-flex tw-flex-row tw-gap-3 lg:tw-gap-5 xl:tw-gap-12 lg:tw-text-lg">
              <div className="tw-flex tw-flex-col tw-text-sm md:tw-text-left lg:tw-text-lg">
                <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/Learn">Learn </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="">Daily Digest </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/IPOWatch">IPO Watch </Link></p>
              </div>
              <div className="tw-flex tw-flex-col tw-text-sm md:tw-text-left lg:tw-text-lg">
                <p className="tw-mt-6"><Link className="tw-text-white hover:tw-text-white" to="/Score">Financial Pulse</Link></p>
                <p className="tw--mt-3"><Link className="tw-text-white hover:tw-text-white" to="/Blogs">Blogs </Link></p>
                <p className="tw--mt-3"><Link className="tw-text-pink-600 hover:tw-text-pink-600" to="/WomenSpecialHome">Women Special</Link></p>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col  xl:tw-pt-0 tw-pt-6 md:tw-pt-6 lg:tw-pt-20 md:tw-w-1/3 tw-items-center ">
            <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl md:tw-pt-8">
              Our Office
            </div>
            <div className="tw-flex tw-flex-row tw-gap-2 lg:tw-gap-5 tw-ml-5 lg:tw-ml-8">
              <div className="tw-flex tw-flex-col tw-text-left tw-ml-5">
                <p className="tw-font-semibold tw-mt-5 lg:tw-text-lg">
                  Registered Office
                </p>
                <p className="tw-w-2/3 tw-text-sm ">
                  <span className="tw-mr-3 tw--ml-7 ">
                    <HiLocationMarker />
                  </span>
                  Flat no. 2, A-wing, Shyamsnruti CHS, Nerul, Navi Mumbai,
                  Maharastra, 400706
                </p>
              </div>
              <div className="tw-flex tw-flex-col tw-text-left">
                <p className="tw-font-semibold tw-mt-5 lg:tw-text-lg">
                  Gurugram Office
                </p>
                <p className="tw-w-2/3 tw-text-sm">
                  <span className="tw-mr-3 tw--ml-7 ">
                    <HiLocationMarker />
                  </span>
                  Unit TF-442, Ansal Corporate Plaza, Palam Vihar , Gurugram
                  Haryana - 122017
                </p>
              </div>
            </div>
          </div>
          <div className="tw-flex tw-flex-col md:tw-w-1/4 lg:tw--mt-0 md:tw--mt-12 tw-items-center tw-mr-2">
            <div>
              <div className="tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl">
                Contact Us
              </div>
              <div className="md:tw-text-left tw-mt-5">
                <p>
                  <span className="tw-text-sm lg:tw-mr-3 lg:tw-text-lg">
                    <IoIosMail />
                  </span>
                  <a style={{ textDecoration: 'none' }} className="tw-text-white" href="mailto:contact@nishkaera.com">contact@nishkaera.com</a>
                </p>
                <p className="tw--mt-3">
                  <span className="tw-text-sm lg:tw-mr-3 lg:tw-text-lg">
                    <RiWhatsappFill />
                  </span>
                  <a style={{ textDecoration: 'none' }} className="tw-text-white" href="https://wa.me/+919320174124">+91 9320174124</a>
                </p>
              </div>
            </div>
            <div>
              <div className="tw-mt-6 tw-mb-6 tw-text-footer-100 tw-font-bold tw-text-lg lg:tw-text-2xl">
                Follow Us
              </div>
              <div className="tw-flex tw-flex-row tw-gap-4 md:tw-gap-2 lg:tw-gap-6">
                <a href="https://www.facebook.com/nishkaera/" className="tw-w-7 tw-h-7 hover:tw-text-white tw-text-white">
                  <SiFacebook className="tw-h-full tw-w-full" />
                </a>
                <a href="https://www.youtube.com/channel/UCboiaf0to-PrBpvPFXlqimQ" className="tw-w-7 hover:tw-text-white tw-text-white tw-h-7">
                  <RiYoutubeFill className="tw-h-full tw-w-full" />
                </a>
                <a href="https://www.instagram.com/nishkaera/" className="tw-w-7 tw-text-white hover:tw-text-white tw-h-7">
                  <TiSocialInstagram className="tw-h-full tw-w-full" />
                </a>
                <a href="https://www.linkedin.com/company/nishkaera/" className="tw-w-7 tw-text-white hover:tw-text-white tw-h-7">
                  <RiLinkedinBoxFill className="tw-h-full tw-w-full" />
                </a>
                <a href="https://www.twitter.com/nishkaera" className="tw-w-7 tw-text-white hover:tw-text-white tw-h-7">
                  <AiFillTwitterCircle className="tw-h-full tw-w-full" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="tw-flex tw-bg-navgreen-800 tw-gap-2 tw-text-white tw-pt-10 tw-justify-center">
          <span className="tw-h-6 tw-w-6">
            <AiOutlineCopyrightCircle className="tw-h-full tw-w-full" />
          </span>
          <p>2022 All Rights Reserved</p>
        </div>
      </>
    );
  };
}