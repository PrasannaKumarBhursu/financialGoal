import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Carousel.css";

export default class DemoCarousel extends Component {
  render() {
    return (
      <Carousel
        className="custom-carousel"
        autoPlay={true}
        interval={2000}
        swipeable={true}
        infiniteLoop={true}

      >
       
        <div >
          <img src="Carousel_Financial-planning.jpg" alt="nishkaera" />
          <div style={{ color: "#3AD4AF", backgroundColor: "gray", padding: "20px 10px 30px 10px" }}>
            <h3>Financial Planning</h3>
            <h5>
              Learn the basics of financial planning with us and achieve your
              financial goals.
            </h5>
          </div>
        </div>
        <div>
          <img src="Carousel_Investment.jpg" alt="nishkaera" />
          <div style={{ color: "gold", backgroundColor: "gray", padding: "20px 10px 30px 10px" }}>
            <h3>Investment</h3>
            <h5 sty>
              Use our best-in-class investment portal to buy any product to meet
              your financial requirements.
            </h5>
          </div>
        </div>
        <div>
          <img src="WomenMain.jpg" alt="nishkaera" />
          <div style={{ color: "white", backgroundColor: "gray", padding: "20px 10px 30px 10px" }}>
            <h3>Women Special</h3>
            <h5>
              Nishkaera brings specialised financial services for working women to
              help them achieve financial freedom.
            </h5>
          </div>
        </div>
        <div>
          <img className="cr-img" src="patnership.jpeg" alt="nishkaera" />
          <a className="cr-text " href="mailto:contact@nishkaera.com?subject=Partner with Nishkaera">Partner with us</a>
          <div style={{ color: "white", backgroundColor: "gray", padding: "20px 10px 30px 10px" }}>
            <h3>Partner with us</h3>
            <h5>Nishakera is looking for sales partners across India. To know more write to us at <a style={{color:"white"}} href="mailto:contact@nishkaera.com?subject=Partner with Nishkaera">contact@nishkaera.com</a></h5>
          </div>
        </div>

      </Carousel>
    );
  }
}
