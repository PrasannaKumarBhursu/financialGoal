import React from "react";
import { Form, Button, Col, Container, Row,Modal} from "react-bootstrap";
import Jumbotron from "react-bootstrap/Jumbotron";
// import Button from 'react-bootstrap';
import Header from "./Layout/Header";
import Footer from "./Layout/Footer";
import SocialFollow from "./social/SocialFollow";
import ScrollToTop from "../components/ScrollToTop";
import "bootstrap/dist/css/bootstrap.min.css";
import "./ContactUS.css";
import axios from "axios";

import dotenv from "dotenv"
dotenv.config()


export default class ContactUS extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      name: "",
      email: "",
      phoneno: "",
      message: "",
      resultmsg:"",
      show:false,
      err:false
    }
    this.handleChange = this.handleChange.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
    this.sendmail = this.sendmail.bind(this)
  }
  sendmail = async () => {
    try {
      const res = await axios.post(`${process.env.REACT_APP_APIURL}/api/contactus/`, this.state)
      if (res.data) {
       this.setState({
         show:true,
         err:false,
          resultmsg:res.data.message
       })
       this.setState({
        name: "",
        email: "",
        phoneno: "",
        message: "",
       })
      }
    } catch (error) {
      error.response && this.setState({
        show:true,
        err:true,
        resultmsg:error.response.data.message
      })
     
    }

  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })

  }
  onSubmit = (e) => {
    e.preventDefault()
    this.sendmail()
  }
  render() {
    return (
      <>
        <div className="App">
          <ScrollToTop />
          <Header />
          <Jumbotron className="container-fluid">
            <h1 style={{ margin: "1% 0% 2%" }} className="contact-head">Get In Touch</h1>
            <Container style={{ display: "flex" }} className="contact-container">
              <Row style={{ width: "100%" }} className="first-contact">
                
                <Form.Row className="contact-details">
                  <div>
                    <ul className="list-group list-unstyled footer-list">
                      <li>
                        <i className="fas fa-phone"></i>
                        <a href="tel:9320174124">+91 9320174124</a>
                      </li>
                      <li>
                        <i className="fas fa-envelope"></i>
                        <a href="mailto:contact@nishkaera.com">
                          contact@nishkaera.com
                        </a>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>
                          Flat No. 2, Plot No. 34, Sec 19, Nerul, Mumbai,
                          Maharashtra
                        </p>
                      </li>
                      <li>
                        <i className="fas fa-map-marker-alt"></i>
                        <p>
                          Palam Vihar Corporate Plaza, Unit TF-442, Palam Vihar,
                          Gurgaon, Haryana
                        </p>
                      </li>
                    </ul>
                  </div>
                </Form.Row>
                <Form.Row className="map">
                  <div>
                    <iframe
                      src="https://www.google.com/maps/d/u/0/embed?mid=1bH-Npm7kIrD-JrTKnVcXln-5UkCR_SHv" title="Office Locations"
                    // width="35vw"
                    // height="25vh"
                    ></iframe>
                  </div>
                </Form.Row>
              </Row>
              <Row style={{ width: "100%" }} className="second-contact">
                <div className="details-container">
                  <Form onSubmit={this.onSubmit}>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridFirst">
                        <Form.Label>Name</Form.Label>
                        <Form.Control name="name" onChange={this.handleChange} placeholder="Enter Your Name" value={this.state.name} required />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridEmail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control name="email" type="email" onChange={this.handleChange} placeholder="Enter email" value={this.state.email} required />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridPhone">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control name="phoneno" onChange={this.handleChange} placeholder="Enter phone" value={this.state.phoneno} required />
                      </Form.Group>
                    </Form.Row>

                    <Form.Row>
                      <Form.Group as={Col} controlId="formGridMessage">
                        <Form.Label>Message</Form.Label>
                        <Form.Control name="message" as="textarea" onChange={this.handleChange} placeholder="Enter Your Message" value={this.state.message} required />
                      </Form.Group>
                    </Form.Row>
                    <Form.Row className="contact-btn">
                      <Button
                        className="btn"
                        variant="primary"
                        type="submit"
                        style={{ background: "#3AD4AF", borderColor: "#3AD4AF" }}
                      >
                        Submit
                      </Button>
                    </Form.Row>
                  </Form>
                </div>
              </Row>
            </Container>
           
          </Jumbotron>
          <Footer/>
         
          <SocialFollow />
          {/* <div className="h3">How we are achieving it?</div>
            <div className="p">We are achieving this by bringing our expertise in technology, financial services and customer focus to provide our customers with best-in-class and hassle-free financial platform to learn about various financial products and  buy them as per their choice.</div>
            <div className="h3">WomenSpecial: </div>
            <div className="p">Nishkaera also aspire to bridge the age old gap between women and investment by providing them specialised financial services with the aim to enable them to achieve their financial freedom through mix of learning, seasoned advice and providing a platform to buy women-oriented financial products.</div> */}
        </div>
        <Modal
          size="lg"
          aria-labelledby="contained-modal-title-vcenter"
          centered
          show={this.state.show}
          onHide={() => this.setState({ show: false })}
        >
          <Modal.Header closeButton>

          </Modal.Header>
          <Modal.Body>
            

              <h5>
                {this.state.resultmsg}
              </h5>
           

          </Modal.Body>
          <Modal.Footer>
            <Button   style={{ background: "#3AD4AF", borderColor: "#3AD4AF" }} onClick={() => this.setState({ show: false })} >Close</Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }

}
