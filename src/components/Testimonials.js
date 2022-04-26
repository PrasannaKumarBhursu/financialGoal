import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Testimonials.css";
import { Link } from 'react-router-dom';


export default class Testimonials extends Component {
  render() {
    return (


      <div className="outer_test" style={{ height: "755px" }}>
        <div className="heading_test" style={{ position: "relative", height: "80px" }}>
          <h1 className="head_content_test" style={{ fontSize: "72px", color: "#114034" }}>Testimonials</h1>
        </div>
        <div className="large_carousel">
          <Carousel
            className="custom-carousel"
            autoPlay={true}
            interval={2000}
            swipeable={true}
            infiniteLoop={true}

          >

            <div className="carousel_test_box" style={{ position: "relative", height: "600px", backgroundColor: "white" }}>

              {/* <div style={{position:"absolute",zIndex:"2", top:"0"}}>kedywe</div> */}
              <div className="card_1" style={{ position: "absolute", zIndex: "2", top: "0", top: "28%", height: "71%", width: "24% ", left: " 7%", borderRadius: "10px", boxShadow: "-1px -1px 0px 4px  #00000030" }} >

                <div className="top_image" style={{ position: "absolute", zIndex: "1", left: "6%", top: "-18%", width: "86%", height: "28%" }}>
                  <img src="man_test.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="top_commas" style={{ position: "absolute", zIndex: "1", left: "7%", top: "13%", width: "14%", height: "9%" }}>
                  <img src="Vectortop_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="bottom_commas" style={{ position: "absolute", zIndex: "1", left: "81%", top: "80%", width: "14%", height: "9%" }}>
                  <img src="Vectorbottom_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="name" style={{ position: "absolute", zIndex: "1", left: "5%", top: "27%", height: "7%", width: "90%" }}>
                  <h1 className="name_content" style={{ fontSize: "26px", lineHeight: " 31px", fontStyle: "normal", fontWeight: "700", color: "#000000", textAlign: "center" }}>Ravi Vijayvargia</h1>
                </div>

                <div className="l_text" style={{ position: "absolute", zIndex: "1", left: "12%", top: "40%", width: "74%" }}>
                  <h1 className="l_text_content" style={{ fontSize: "20px", lineHeight: " 24px", fontStyle: "normal", fontWeight: "400", color: "#000000", textAlign: "center" }}>It was a breeze opening up Bajaj Finance FD through Nishkaera website. One place for numerous financial options!!</h1>
                </div>

                <div className="place" style={{ position: "absolute", zIndex: "1", left: "4%", top: "90%", height: "7%", width: "90%" }}>
                  <h1 className="place_content" style={{ fontSize: "22px", lineHeight: " 26px", fontStyle: "normal", fontWeight: "500", color: "#000000", textAlign: "center" }}>~ Vadodara</h1>
                </div>


              </div>

              <div className="card_2" style={{ position: "absolute", zIndex: "2", top: "0", top: "28%", height: "71%", width: "24% ", left: "37%", borderRadius: "10px", boxShadow: "-1px -1px 0px 4px  #00000030" }} >

                <div className="top_image" style={{ position: "absolute", zIndex: "1", left: "6%", top: "-18%", width: "86%", height: "28%" }}>
                  <img src="man_test.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="top_commas" style={{ position: "absolute", zIndex: "1", left: "7%", top: "13%", width: "14%", height: "9%" }}>
                  <img src="Vectortop_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="bottom_commas" style={{ position: "absolute", zIndex: "1", left: "81%", top: "80%", width: "14%", height: "9%" }}>
                  <img src="Vectorbottom_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="name" style={{ position: "absolute", zIndex: "1", left: "5%", top: "27%", height: "7%", width: "90%" }}>
                  <h1 className="name_content" style={{ fontSize: "26px", lineHeight: " 31px", fontStyle: "normal", fontWeight: "700", color: "#000000", textAlign: "center" }}>Ashish Singh</h1>
                </div>

                <div className="t_text" style={{ position: "absolute", zIndex: "1", left: "12%", top: "40%", width: "74%" }}>
                  <h1 className="t_text_content" style={{ fontSize: "20px", lineHeight: " 24px", fontStyle: "normal", fontWeight: "400", color: "#000000", textAlign: "center" }}>Nishkaera does what financial advisors should do. What really impressed me was the way advisor took the time to understand my current financial situation and goals.</h1>
                </div>

                <div className="place" style={{ position: "absolute", zIndex: "1", left: "4%", top: "90%", height: "7%", width: "90%" }}>
                  <h1 className="place_content" style={{ fontSize: "22px", lineHeight: " 26px", fontStyle: "normal", fontWeight: "500", color: "#000000", textAlign: "center" }}>~ Mumbai</h1>
                </div>


              </div>


              <div className="card_3" style={{ position: "absolute", zIndex: "2", top: "0", top: "28%", height: "71%", width: "24% ", left: " 68%", borderRadius: "10px", boxShadow: "-1px -1px 0px 4px  #00000030" }} >

                <div className="top_image" style={{ position: "absolute", zIndex: "1", left: "6%", top: "-18%", width: "86%", height: "28%" }}>
                  <img src="2(1) 1women_test.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="top_commas" style={{ position: "absolute", zIndex: "1", left: "7%", top: "13%", width: "14%", height: "9%" }}>
                  <img src="Vectortop_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="bottom_commas" style={{ position: "absolute", zIndex: "1", left: "81%", top: "80%", width: "14%", height: "9%" }}>
                  <img src="Vectorbottom_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="name" style={{ position: "absolute", zIndex: "1", left: "5%", top: "27%", height: "7%", width: "90%" }}>
                  <h1 className="name_content" style={{ fontSize: "26px", lineHeight: " 31px", fontStyle: "normal", fontWeight: "700", color: "#000000", textAlign: "center" }}>Shilpa Dalal</h1>
                </div>

                <div className="t_text" style={{ position: "absolute", zIndex: "1", left: "12%", top: "40%", width: "74%" }}>
                  <h1 className="t_text_content" style={{ fontSize: "20px", lineHeight: " 24px", fontStyle: "normal", fontWeight: "400", color: "#000000", textAlign: "center" }}>I was looking for investing in a high interest rate fixed deposit from a company I can trust. It's reliable, fast and gives you an excellent buying experience while at home.</h1>
                </div>

                <div className="place" style={{ position: "absolute", zIndex: "1", left: "4%", top: "90%", height: "7%", width: "90%" }}>
                  <h1 className="place_content" style={{ fontSize: "22px", lineHeight: " 26px", fontStyle: "normal", fontWeight: "500", color: "#000000", textAlign: "center" }}>~ Ahmedabad</h1>
                </div>


              </div>

            </div>





          </Carousel>
        </div>


        <div className="small_carousel">

          <Carousel
            className="custom-carousel"
            autoPlay={true}
            interval={2000}
            swipeable={true}
            infiniteLoop={true}

          >
            <div className="s_carousel_test_box" style={{ position: "relative", height: "570px", backgroundColor: "white" }}>

              <div className="s_card_1" style={{ position: "absolute", zIndex: "2", top: "0", top: "18%", height: "430px", width: "90%", left: " 5%", borderRadius: "10px", boxShadow: "-1px -1px 0px 4px  #00000030" }} >

                <div className="s_top_image" style={{ position: "absolute", zIndex: "1", left: "6%", top: "-18%", width: "86%", height: "28%" }}>
                  <img src="man_test.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_top_commas" style={{ position: "absolute", zIndex: "1", left: "7%", top: "13%", width: "14%", height: "9%" }}>
                  <img src="Vectortop_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_bottom_commas" style={{ position: "absolute", zIndex: "1", left: "81%", top: "80%", width: "14%", height: "9%" }}>
                  <img src="Vectorbottom_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_name" style={{ position: "absolute", zIndex: "1", left: "5%", top: "27%", height: "7%", width: "90%" }}>
                  <h1 className="s_name_content" style={{ fontSize: "26px", lineHeight: " 31px", fontStyle: "normal", fontWeight: "700", color: "#000000", textAlign: "center" }}>Ravi Vijayvargia</h1>
                </div>

                <div className="s_text" style={{ position: "absolute", zIndex: "1", left: "12%", top: "40%", width: "74%" }}>
                  <h1 className="s_text_content" style={{ fontSize: "20px", lineHeight: " 24px", fontStyle: "normal", fontWeight: "400", color: "#000000", textAlign: "center" }}>It was a breeze opening up Bajaj Finance FD through Nishkaera website. One place for numerous financial options!!</h1>
                </div>

                <div className="s_place" style={{ position: "absolute", zIndex: "1", left: "4%", top: "90%", height: "7%", width: "90%" }}>
                  <h1 className="s_place_content" style={{ fontSize: "22px", lineHeight: " 26px", fontStyle: "normal", fontWeight: "500", color: "#000000", textAlign: "center" }}>~ Vadodara</h1>
                </div>


              </div>

            </div>


            <div className="s_carousel_test_box" style={{ position: "relative", height: "570px", backgroundColor: "white" }}>

              <div className="s_card_2" style={{ position: "absolute", zIndex: "2", top: "0", top: "18%", height: "430px", width: "90%", left: " 5%", borderRadius: "10px", boxShadow: "-1px -1px 0px 4px  #00000030" }} >

                <div className="s_top_image" style={{ position: "absolute", zIndex: "1", left: "6%", top: "-18%", width: "86%", height: "28%" }}>
                  <img src="man_test.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_top_commas" style={{ position: "absolute", zIndex: "1", left: "7%", top: "13%", width: "14%", height: "9%" }}>
                  <img src="Vectortop_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_bottom_commas" style={{ position: "absolute", zIndex: "1", left: "81%", top: "80%", width: "14%", height: "9%" }}>
                  <img src="Vectorbottom_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_name" style={{ position: "absolute", zIndex: "1", left: "5%", top: "27%", height: "7%", width: "90%" }}>
                  <h1 className="s_name_content" style={{ fontSize: "26px", lineHeight: " 31px", fontStyle: "normal", fontWeight: "700", color: "#000000", textAlign: "center" }}>Ashish Singh</h1>
                </div>

                <div className="s_text" style={{ position: "absolute", zIndex: "1", left: "12%", top: "40%", width: "74%" }}>
                  <h1 className="s_text_content" style={{ fontSize: "20px", lineHeight: " 24px", fontStyle: "normal", fontWeight: "400", color: "#000000", textAlign: "center" }}>Nishkaera does what financial advisors should do. What really impressed me was the way advisor took the time to understand my current financial situation and goals.</h1>
                </div>

                <div className="s_place" style={{ position: "absolute", zIndex: "1", left: "4%", top: "90%", height: "7%", width: "90%" }}>
                  <h1 className="s_place_content" style={{ fontSize: "22px", lineHeight: " 26px", fontStyle: "normal", fontWeight: "500", color: "#000000", textAlign: "center" }}>~ Mumbai</h1>
                </div>


              </div>

            </div>


            <div className="s_carousel_test_box" style={{ position: "relative", height: "570px", backgroundColor: "white" }}>

              <div className="s_card_3" style={{ position: "absolute", zIndex: "2", top: "0", top: "18%", height: "430px", width: "90%", left: " 5%", borderRadius: "10px", boxShadow: "-1px -1px 0px 4px  #00000030" }} >

                <div className="s_top_image" style={{ position: "absolute", zIndex: "1", left: "6%", top: "-18%", width: "86%", height: "28%" }}>
                  <img src="2(1) 1women_test.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_top_commas" style={{ position: "absolute", zIndex: "1", left: "7%", top: "13%", width: "14%", height: "9%" }}>
                  <img src="Vectortop_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_bottom_commas" style={{ position: "absolute", zIndex: "1", left: "81%", top: "80%", width: "14%", height: "9%" }}>
                  <img src="Vectorbottom_comma.png" style={{ maxHeight: "100%", maxWidth: "100%" }} alt="nishkaera" />
                </div>

                <div className="s_name" style={{ position: "absolute", zIndex: "1", left: "5%", top: "27%", height: "7%", width: "90%" }}>
                  <h1 className="s_name_content" style={{ fontSize: "26px", lineHeight: " 31px", fontStyle: "normal", fontWeight: "700", color: "#000000", textAlign: "center" }}>Shilpa Dalal</h1>
                </div>

                <div className="s_text" style={{ position: "absolute", zIndex: "1", left: "12%", top: "40%", width: "74%" }}>
                  <h1 className="s_text_content" style={{ fontSize: "20px", lineHeight: " 24px", fontStyle: "normal", fontWeight: "400", color: "#000000", textAlign: "center" }}>I was looking for investing in a high interest rate fixed deposit from a company I can trust. It's reliable, fast and gives you an excellent buying experience while at home.</h1>
                </div>

                <div className="s_place" style={{ position: "absolute", zIndex: "1", left: "4%", top: "90%", height: "7%", width: "90%" }}>
                  <h1 className="s_place_content" style={{ fontSize: "22px", lineHeight: " 26px", fontStyle: "normal", fontWeight: "500", color: "#000000", textAlign: "center" }}>~ Ahemdabad</h1>
                </div>


              </div>

            </div>



          </Carousel>


        </div>

      </div>
    );
  }
}
