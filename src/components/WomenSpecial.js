import React from 'react';
import { Figure } from "react-bootstrap";
import { Button } from "react-bootstrap";
import CardWomenSpecial from './CardWomenSpecial';
import { Link } from 'react-router-dom';
import "./WomenSpecial.css"

export default function WomenSpecial() {
    return (

        <div style={{ backgroundColor: "white", height: "1200px", position: "relative" }}>

            <div className="middiv" style={{ backgroundColor: "#FFEAF9", position: "absolute", zIndex: "2", width: "100%", height: "18%", position: "absolute", top: "33%" }}>
            </div>
            <div className="head" style={{ position: "absolute", zIndex: "2", left: "33%", top: "5%", borderBottomWidth: "5px", borderBottomColor: "#D60067", borderBottomStyle: "solid", borderBottomLeftRadius: "2px", borderBottomRightRadius: "2px" }}>
                <h1 className=" headtext" style={{ fontSize: "64px", fontStyle: "normal", fontWeight: "900", color: "#D60067" }}>Women Special</h1>
            </div>



            <div className="image" style={{ position: "absolute", zIndex: "2", left: "4%", top: "17%", width: "37%" }}>
                <img src="Frame 6hope.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
            </div>




            <div className="div1_w" style={{ position: "absolute", zIndex: "2", left: "45%", top: "15%", width: "45%", height: "17%" }}>

                <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "73%", top: "0px", width: "27%", height: "100%" }}>
                    <img src="Group 111enhance.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="heading1_w" style={{ position: "absolute", zIndex: "1", left: "0%", top: "6%", height: "22%", width: "67%" }}>
                    <h1 className=" headcontent_1w" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#B00074", textAlign: "left" }}>Enhance your financial Literacy</h1>
                </div>

                <div className="text1_w" style={{ position: "absolute", zIndex: "1", left: "0%", top: "30%", height: "31%", width: "67%" }}>
                    <h1 className=" textcontent_1w" style={{ fontSize: "22px", fontStyle: "normal", lineHeight: "26.63px", fontWeight: "400", color: "#D60067", textAlign: "left" }}>Your Gateway to Comprehensive learning resources on various Financial products.</h1>
                </div>

            </div>


            <div className="div2_w" style={{ position: "absolute", zIndex: "2", left: "45%", top: "35%", width: "45%", height: "17%" }}>

                <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "0%", top: "0px", width: "27%", height: "100%" }}>
                    <img src="Group 147invest.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="heading1_w" style={{ position: "absolute", zIndex: "1", left: "30%", top: "6%", height: "22%", width: "72%" }}>
                    <h1 className=" headcontent_1w" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#B00074", textAlign: "left" }}>Invest and Grow with Nishkaera</h1>
                </div>

                <div className="text1_w" style={{ position: "absolute", zIndex: "1", left: "30%", top: "30%", height: "31%", width: "72%" }}>
                    <h1 className=" textcontent_1w" style={{ fontSize: "22px", fontStyle: "normal", lineHeight: "26.63px", fontWeight: "400", color: "#D60067", textAlign: "left" }}>Use our best-in-class platform to buy financial products that perfectly suits your requirements.</h1>
                </div>

            </div>

            <div className="div3_w" style={{ position: "absolute", zIndex: "2", left: "45%", top: "55%", width: "45%", height: "17%" }}>

                <div className="pic1" style={{ position: "absolute", zIndex: "1", left: "73%", top: "0px", width: "27%", height: "100%" }}>
                    <img src="Group 68achieve.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="heading1_w" style={{ position: "absolute", zIndex: "1", left: "0%", top: "6%", height: "22%", width: "67%" }}>
                    <h1 className=" headcontent_1w" style={{ fontSize: "32px", fontStyle: "normal", fontWeight: "600", color: "#B00074", textAlign: "left" }}>Achieve your financial Freedom</h1>
                </div>

                <div className="text1_w" style={{ position: "absolute", zIndex: "1", left: "0%", top: "30%", height: "31%", width: "67%" }}>
                    <h1 className=" textcontent_1w" style={{ fontSize: "22px", fontStyle: "normal", lineHeight: "26.63px", fontWeight: "400", color: "#D60067", textAlign: "left" }}> Invest using our experience and expertise and  Partner with us to achieve your financial independence</h1>
                </div>

            </div>



            <div className="bottom_box" style={{ backgroundColor: "#FFEAF9", position: "absolute", zIndex: "2", width: "100%", height: "26%", position: "absolute", top: "72%" }}>

                <div className="text_last" style={{ position: "absolute", zIndex: "1", left: "5%", top: "16%", height: "30%", width: "90%" }}>
                    <h1 className=" text_lastcontent" style={{ fontSize: "26px", fontStyle: "normal", lineHeight: "31.47px", fontWeight: "400", color: "#B00074" }}>Nishkaera offers specialised financial services to working women with the aim to enable them to achieve their financial freedom through mix of learning, seasoned advice and a platform to buy women-oriented financial products.</h1>
                </div>



                <a href='/WomenSpecialHome'>
                    <div className="readmore" style={{ position: "absolute", zIndex: "1", left: "41%", top: "55%", width: "18%", height: "26%" }}>

                        <img src="Group 65reaaad.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />


                    </div>
                </a>



            </div>


        </div>
    );
}