import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
// import CardGauge from "../CardGauge";
import { Link, Redirect, useHistory } from "react-router-dom";
import { Block } from "@material-ui/icons";
import { Card, CardDeck , CardGroup , Row , Col} from 'react-bootstrap';
import Gauge30 from '../../features/Gauge30';
import Gauge60 from '../../features/Gauge60';
import Gauge82 from '../../features/Gauge82';
import Divider from '@mui/material/Divider';
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/coliff/bootstrap-rfs/bootstrap-rfs.css"></link>
// import "./CardGauge.css";

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



  const [show1,setShow1] = useState(true);
  const [show2,setShow2] = useState(false);
  const [show3,setShow3] = useState(false);


  function handleClick1(){
      setShow1(true);
      setShow2(false);
      setShow3(false);
  }

  function handleClick2(){
      setShow1(false);
      setShow2(true);
      setShow3(false);
  }

  function handleClick3(){
      setShow1(false);
      setShow2(false);
      setShow3(true);
  }
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
      <Jumbotron style={{backgroundColor:"white"}}>
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
        {/* {PromptModal} */}
        <div className="h1 sectionHeading " style={{ marginTop: "5%" , color: "#1D6A58"}}>
          Know your Financial Pulse
        </div>
        <p className=" h5 sectionParagraph" style={{ marginTop: "0" }}>
          Just answer few simple questions to get your financial score.
        </p>
        {/* <p>
          <Link to="/Score">
            <Button variant="primary" className="mr-2">
              Quick Financial Pulse
            </Button>
          </Link>
          <Button variant="primary" onClick={handleClick}>
            Comprehensive Financial Pulse
          </Button>
        </p> */}
        {/* <CardGauge /> */}
   


    {/* return ( */}
        <div className='shadow-lg p-1 bg-body rounded ' style={{margin:20}}>
        {/* <div className='shadow shadow-success shadow-intensity-xl p-1  ' style={{margin:20}}> */}
        <Card border='0' style={{margin:50}} >
           
           <CardGroup>
        
                <Card border='0' >
                
                    <div class=" pb-1" onClick={handleClick1} style={{ cursor: "pointer" }}>
                        {/* <Card.Body> */}

                        {
                                show1?
                                <div class="d-flex flex-row bd-highlight ">
                                {/* <div class="first"><img class="rounded float-left img-fluid" src="strong_true.png"/></div>
                                <div><h2 class="mt-0 ml-2 text-left  head">Financially Strong</h2><hr class="ml-2" id="r" /><h5 class="mt-2 ml-2 text-left  head" >Your financial position is strong and you can make it even better</h5></div>
                        */}
                        <img class="img-fluid" src="Group 45.png" />
                                
                                </div>

                            :

                            <div class="d-flex flex-row bd-highlight ">
                                {/* <div ><img class="rounded float-left img-fluid" src="strong_false.png"/></div>
                                <div><h2 class="mt-4 text-left content">Financially Strong</h2></div> */}

                                <img class="img-fluid" src="strong false.png" />
                                </div>
                            }


                        {/* </Card.Body> */}
                    </div>
                   
                
                <Divider style={{color:'green'}}/>

                    <div class="pb-2 "  onClick={handleClick2} style={{ cursor: "pointer" }}>
                        
                        {/* <Card.Body> */}

                        {
                                show2?
                                <div class="d-flex flex-row bd-highlight ">
                                {/* <div ><img class="rounded float-left img-fluid" src="coping_true.png"/></div>
                                <div class="mt-1" ><h2 class="mt-2 ml-2 text-left  head ">Financially Coping</h2><hr class=" ml-2" id="r" /><h5 class=" mt-2 ml-2 text-left  head" >You are doing good but there is good scope to improve</h5></div>
                                 */}
                                 <img class="img-fluid mt-2" src="coping true.png" />
     
                                     
                                
                                </div>

                            :

                            <div class="d-flex flex-row bd-highlight">
                                {/* <div ><img class="rounded float-left img-fluid" src="coping_false.png"/></div>
                                {/* <div><h2 class="mt-4 text-left content">Financially Coping</h2></div> */}
                                {/* <div><h2 class=" mt-4 text-left content">Financially Coping</h2></div> */} 
                                <img class="img-fluid mt-2" src="coping false.png" />
                                </div>
                            }   

                            
                        {/* </Card.Body> */}
                    </div>
                
                <Divider  style={{color:'green'}}/>

                   <div class=" pt-2" border='0'  onClick={handleClick3} style={{ cursor: "pointer" }}>
                        {/* <Card.Body> */}
                        {
                                show3?
                                <div class="d-flex flex-row bd-highlight">
                                {/* <div ><img class="rounded float-left img-fluid" src="weak_true.png"/></div>
                                <div><h2 class="mt-0 ml-2 text-left  head ">Financially Weak</h2><hr class="ml-2"id="r" /><h5 class="mt-2 ml-2 text-left  head" >Your financials need immediate attention and course correction</h5></div>
                        */}
                        <img class="img-fluid" src="weak true.png" />
                                
                                </div>

                            :

                            <div class="d-flex flex-row bd-highlight ">
                                {/* <div ><img class="rounded float-left img-fluid" src="weak_false.png"/></div>
                                <div><h2 class="mt-4 text-left content">Financially Weak</h2></div> */}
                                <img class="img-fluid" src="weak false.png" />
                                </div>
                            }
                     
                        {/* </Card.Body> */}
                   </div>

                </Card>
        

                <Card border='0'> 

                   <Card border='0'>
                        <Card.Body>
                            {
                            show1? <Gauge82 />:null
                            }

                            {
                            show2? <Gauge60 />:null
                            }

                            {
                            show3? <Gauge30 />:null
                            }

<p>
          <Link to="/Score">
            <Button  className="mr-2 btn btn-success">
              Quick Pulse
            </Button>
          </Link>
          
          
          <Button  variant="none" className="btn btn-outline-success" onClick={handleClick}>
            Comprehensive Pulse
          </Button>
        </p>
                      
                        </Card.Body>
                   </Card>

                   {/* <Card border='0'>
                        <Card.Body>
                        <Card.Title> Card Title</Card.Title>
                        </Card.Body>
                   </Card> */}

                </Card>
        

            </CardGroup>
            

        </Card>
   </div>
      </Jumbotron>
    </div>
  );
}
