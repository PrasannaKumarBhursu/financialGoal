import React from "react";
import { Navbar } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FormControl, InputGroup } from "react-bootstrap";
import { Button, Alert, Modal } from "react-bootstrap";
import axios from "axios";
import dotenv from "dotenv";
// import { faLeanpub } from "@fortawesome/free-brands-svg-icons";
import "bootstrap/dist/css/bootstrap.min.css";

dotenv.config();
export default class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      show: false,
      message: "",
      err: false,
      showUnsuscribe: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closePopup = this.closePopup.bind(this);
    this.onUpdate = this.onUpdate.bind(this);
  }
  handleSubmit = async (e) => {
    e.preventDefault();
    const { show, message, err, showUnsuscribe, ...rest } = this.state;
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
            showUnsuscribe: true,
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
      showUnsuscribe: false,
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
          message: "Your email has been unsuscribed sucessfully!",
          showUnsuscribe: false,
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
        <div className="main-footer">
          <div className="container-fluid">
            <div className="row">
              <div className="col-md-3 col-sm-12">
                <div className="image">
                  <ul className="list-unstyled text-small footer-first">
                    <Navbar.Brand href="/">
                      <img
                        // src="/Letter-NE.png"
                        src="/NishkaEra-Footer_Logo.png"
                        width="auto"
                        height="70"
                        className="d-inline-block align-top"
                        alt="Nishka"
                      />
                    </Navbar.Brand>
                    <Navbar.Text className="footer-cin">
                      CIN:U67100MH2021PTC363297
                    </Navbar.Text>
                    <ul className="list-group list-unstyled footer-list footer-main">
                      {/* <li>
                      <i className="fas fa-phone"></i>
                      <a href="tel:9320174124">+91 9320174124</a>
                    </li> */}
                      <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:contact@nishkaera.com">
                          contact@nishkaera.com
                        </a>
                      </li>

                      <li>
                        <i className="fab fa-whatsapp"></i>
                        <a href="whatsapp://send?text=&phone=+919320174124">
                          +91 9320174124
                        </a>
                      </li>
                    </ul>
                    {/* <Navbar.Brand href="/">
                                      <img
                                          src="/NE.png"
                                          width="45%"
                                          height="15"
                                          className="d-inline-block align-top"
                                          alt="Nishka"
                                      />
                                  </Navbar.Brand> */}
                  </ul>
                </div>
              </div>

              <div className="col-md-4 col-sm-12 pl-lg-5 footer-list">
                <h5
                  className="mb-4 font-weight-bold text-uppercase"
                  style={{ display: "flex", textAlign: "left" }}
                >
                  Company
                </h5>
                <ul className="list-group list-unstyled text-small">
                  <li className="list-group-item bg-transparent border-0 p-0">
                    <Link to="/OurStory">Our Story </Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0">
                    <Link to="/Careers">Careers</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0">
                    <Link to="/Disclaimer">Disclaimer</Link>
                  </li>
                  <li className="list-group-item bg-transparent border-0 p-0">
                    <Link to="/PrivacyPolicy">Privacy Policy</Link>
                  </li>
                  {/* <li className="list-group-item bg-transparent border-0 p-0">
                  <Link to="/FAQs">FAQs</Link>
                </li> */}
                  <li className="list-group-item bg-transparent border-0 p-0">
                    <Link to="/Contact">Contact Us</Link>
                  </li>
                  {/* <li> Flat No. 2, Plot No. 34, Sec 19, Nerul, Mumbai, Maharashtra</li> */}
                  {/* <li className="list-group-item bg-transparent border-0 p-0 mb-2"><Link style={Styles} to="/Blog">Blog</Link></li> */}
                  {/* <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../Legal/Disclaimer.js">Blog</a></li> */}
                </ul>
              </div>

              <div
                className="col-md-5 col-sm-12"
                style={{ background: "white", padding: "1rem" }}
              >
                <h5 className="mb-4 font-weight-bold text-uppercase">
                  SIGNUP TO OUR NEWSLETTER
                </h5>
                <ul
                  className="list-group text-small newsLetter-ui"
                  style={{ marginTop: "-20px" }}
                >
                  <li className="list-group-item bg-transparent border-0 p-0">
                    Learn
                  </li>{" "}
                  <span>•</span>
                  <li className="list-group-item bg-transparent border-0 p-0">
                    Invest
                  </li>{" "}
                  <span>•</span>
                  <li className="list-group-item bg-transparent border-0 p-0">
                    Grow
                  </li>
                </ul>
                <form onSubmit={this.handleSubmit}>
                  <InputGroup
                    className="mb-3"
                    style={{ width: "90%", margin: "2% auto" }}
                  >
                    <FormControl
                      placeholder="Your Email Address"
                      aria-label="Search Content"
                      aria-describedby="basic-addon2"
                      textAlign="center"
                      onChange={this.handleChange}
                      name="email"
                      value={this.state.email}
                      required
                    />
                    <Button
                      type="submit"
                      id="button-addon2"
                      style={{ background: "#3AD4AF", borderColor: "#3AD4AF" }}
                    >
                      Subscribe
                    </Button>
                  </InputGroup>
                </form>
                <p className="text-muted small">
                  We are going to send 1 email a month
                </p>
              </div>

              {/* <div className="col-md-3 col-sm-6" style={{ textAlign: "left" }}>
                <h5 className="mb-4 font-weight-bold text-uppercase"> Policies</h5>
                <h5 className="mb-4 font-weight-bold text-uppercase"> Resources</h5>
                <ul className="list-group list-unstyled text-small"  >
                  <li className="list-group-item bg-transparent border-0 p-0"><Link style={Styles} to="/Disclaimer">Disclaimer</Link></li>
                  <li className="list-group-item bg-transparent border-0 p-0"><Link style={Styles} to="/PrivacyPolicy">Privacy Policy</Link></li>
                </ul>
                <li className="list-group-item bg-transparent border-0 p-0 mb-2"><a href="../Legal/AboutUs.js">Financial Planning</a></li>
              </div> */}

              {/* <div className="col-md-3 col-sm-6 footer-list">
                <h5 className="mb-4 font-weight-bold text-uppercase" style={{ display: "flex", textAlign: "left" }}> Contact us</h5>
                <ul className="list-group list-unstyled footer-list" >
                   <li><i class="fas fa-phone"></i><a href="tel:9320174124">9320174124</a></li> 
                   <li><i class="fas fa-envelope"></i><a href="mailto:contact@nishkaera.com">contact@nishkaera.com</a></li>  
                  <li><i className="fas fa-map-marker-alt"></i><p>Flat No. 2, Plot No. 34, Sec 19, Nerul, Mumbai, Maharashtra</p></li>
                  <li><i className="fas fa-map-marker-alt"></i><p>Palam Vihar Corporate Plaza, Unit TF-442, Palam Vihar, Gurgaon, Haryana</p></li>
                </ul>
              </div>
              <div className="col-md-3 col-sm-6" style={{ textAlign: "left" }}>
                <iframe title="nishkaera" src="https://www.google.com/maps/d/u/0/embed?mid=1bH-Npm7kIrD-JrTKnVcXln-5UkCR_SHv" width="240" height="250"></iframe>
              </div>
              <div className="col-md-3 col-sm-6"></div> */}
            </div>
          </div>
        </div>

        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={this.closePopup}
        >
          <Modal.Header closeButton></Modal.Header>
          <Modal.Body>
            <Alert>
              {this.state.showUnsuscribe ? (
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
          <Modal.Footer>
            <Button onClick={this.closePopup} variant="outline-primary">
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
}
