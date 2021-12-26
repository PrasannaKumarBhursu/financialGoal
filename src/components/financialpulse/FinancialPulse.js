import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CardGauge from "../CardGauge";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Block } from "@material-ui/icons";

export default function FinancialPulse() {
  const history = useHistory();
  const isLoggedIn = true;
  const [show, setShow] = useState(false);
  const [modalShow, setModalShow] = React.useState(false);
  const handleClick = () => {
    if (isLoggedIn) {
      return history.push("/ComprehensiveFinancialPulse");
    }
    setModalShow(true);
  };
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  //   const PromptModal = () => {
  //     if(isLoggedIn)

  //       else {
  //       return <Redirect to="/DetailedScore" />}
  //         }
  function MyVerticallyCenteredModal(props) {
    return (
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="p-5"
      >
        <Modal.Body className="m-auto">
          You need to Login to access Comprehensive Financial Pulse
        </Modal.Body>
        <Link to="/Login" className="mx-auto mb-3">
          <Button>Login</Button>
        </Link>
      </Modal>
    );
  }
  return (
    <div
      className="financialContainer"
      id="FinancialPulse"
      style={{ marginTop: "0px" }}
    >
      <Jumbotron>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {/* {PromptModal} */}
        <div className="h1 sectionHeading" style={{ marginTop: "5%" }}>
          Know your Financial Pulse
        </div>
        <p className=" h5 sectionParagraph" style={{ marginTop: "0" }}>
          Just answer few simple questions to get your financial score.
        </p>
        <p>
          <Link to="/Score">
            <Button variant="primary" className="mr-2">
              Quick Financial Pulse
            </Button>
          </Link>
          <Button variant="primary" onClick={handleClick}>
            Comprehensive Financial Pulse
          </Button>
        </p>
        <CardGauge />
      </Jumbotron>
    </div>
  );
}
