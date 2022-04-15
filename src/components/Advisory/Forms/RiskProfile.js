import React, { useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Button } from "react-bootstrap";
import { Modal } from "react-bootstrap";
import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import SocialFollow from "../../social/SocialFollow";
import ScrollToTop from "../../ScrollToTop";
import "../../financialpulse/FinancialPulse.css";
import GaugeProp from "../../../features/gauge/GaugeProp";
import { Link } from "react-router-dom";
import Stepper from "./Stepper.js"

export default function RiskProfile() {
	const [modalShow, setModalShow] = React.useState(false);
	const [scorePercent, setScorePercent] = useState();
	const [index, setIndex] = useState();
	const questions = [
		{
			id: 1,
			question:
				"1) How would you rate your inclination towards investment made by you recently?",
			options: [
				"No changes from past",
				"Slightly to lower risk investments",
				"Mostly lower risk investments",
				"Sometimes towards high risk investments",
				"Mostly towards high risk investments",
			],
		},
		{
			id: 2,
			question: "2) What comes to your mind when you think about RISK?",
			options: [
				"Danger",
				"Opportunity",
				"Uncertainty",
				"Thrill",
				"Getting conscious",
			],
		},
		{
			id: 3,
			question:
				"3) You suddenly came to know that your life insurance policy has expired, what will you do?",
			options: [
				"You immediately renew the policy",
				"You will wait for some more time as policy has already lapsed",
				"You will make minimum outdoor travel",
				"You will not be affected by this",
			],
		},
		{
			id: 4,
			question:
				"4) On a mobile game you are entitled to win a gift by choosing an option. Which option will you choose?",
			options: [
				"30% chance of winning Rs 50 Lacs",
				"10% chance of winning Rs 1 Crore",
				"80% chance of winning Rs 10 Lacs",
				"50% chance of winning Rs 20 Lacs",
			],
		},
		{
			id: 5,
			question:
				"5) You have lost over Rs 5 Lacs in derivative trade in a day. How much risk will you take to cover your loss?",
			options: [
				"Rs 5,00,000",
				"Rs 2,50,000",
				"Rs 1,00,000",
				"You won't do anything",
			],
		},
		{
			id: 6,
			question:
				"6) How do you see your investment doing in normal market scenario?",
			options: [
				"To generate modest profits",
				"Capital Protection",
				"To match return with the index",
				"To supersede index return",
			],
		},
		{
			id: 7,
			question:
				"7) How will you define your attitude towards making investment decisions?",
			options: [
				"I like only low risk, low return types of investments",
				"I mostly prefer low risk types of investments with small investment in high risk investments",
				"I prefer balanced investments- a mix of low risk and high risk investments",
				"I prefer to have portfolio with inclination towards high risk investments",
				"My portfolio is of mostly high risk investments",
			],
		},
		{
			id: 8,
			question:
				"8) Which investment portfolio will you choose from the given options of yearly returns?",
			options: [
				"Year 1: -15% | Year 2: -9% | Year 3: 10% | Year 4: 22% | Year 5: 20%",
				"Year 1: -12% | Year 2: 10% | Year 3: -6% | Year 4: 13% | Year 5: 9%",
				"Year 1: -20% | Year 2: 28% | Year 3: -22% | Year 4: 32% | Year 5: 24%",
				"Year 1: -11% | Year 2: 6% | Year 3: 10% | Year 4: 12% | Year 5: -5%",
				"Year 1: 6% | Year 2: 7% | Year 3: 8% | Year 4: 7% | Year 5: 5%",
			],
		},
		{
			id: 9,
			question:
				"9) How do you adapt or react to unforseen and unfavourable financial events?",
			options: [
				"With great difficulty",
				"With some difficulty",
				"With some ease",
				"Easily",
			],
		},
		{
			id: 10,
			question:
				"10) What will you do if you made a huge investment in stock market and it falls by over 30% suddenly?",
			options: [
				"Nothing",
				"Will purchase more",
				"Will shift a part of investment in some low risk investments",
				"Will sell my entire stock portfolio",
			],
		},
		{
			id: 11,
			question:
				"11) Do you make investments in high risk investment randomly to make quick money?",
			options: ["Very frequently", "Sometimes", "Rarely", "Never"],
		},
		{
			id: 12,
			question:
				"12) How would you rate your understanding of financial planning and financial products?",
			options: ["Robust", "Good", "Inadequate", "Minimal", "Near zero"],
		},
	];
	//   function MyVerticallyCenteredModal(props) {
	//     return (
	//       <Modal
	//         {...props}
	//         size="md"
	//         aria-labelledby="contained-modal-title-vcenter"
	//         centered
	//       >
	//         <Modal.Header closeButton>
	//           <Modal.Title id="contained-modal-title-vcenter">
	//             Your Financial Pulse
	//           </Modal.Title>
	//         </Modal.Header>
	//         <Modal.Body>
	//           {/* <h4>Centered Modal</h4> */}
	//             <GaugeProp percent={scorePercent} index={index}/>
	//         </Modal.Body>
	//         <Modal.Footer>
	//           <Link to="/"><Button>Go Back</Button></Link>
	//         </Modal.Footer>
	//       </Modal>
	//     );
	//  }
	var answersArray = [
		//   {
		//       qId:"1",
		//       option:1
		//   }
	];

	const handleOptionChange = (e, qIndex) => {
		if (answersArray.some((ans) => ans.qId === qIndex)) {
			answersArray = answersArray.filter((ans) => ans.qId !== qIndex);
		}
		answersArray.push({
			qId: qIndex,
			option: +e.target.value,
		});
		//  console.log("answers",answersArray)
	};

//   const handleSubmit = (e) => {
//     console.log(answersArray)
//     var score = 0;
//     e.preventDefault();
//     answersArray.forEach((ans) => {
//       ans.option === 0
//         ? (score += 100)
//         : ans.option === 1
//         ? (score += 75)
//         : ans.option === 2
//         ? (score += 50)
//         : ans.option === 3
//         ? (score += 25)
//         : (score += 0);
//     });
//     var total = score/500;
//     // total <= 30 ? setScorePercent(0.3) : total <= 60 ? setScorePercent(0.6) : setScorePercent(0.9);
//     if(total<=.4){
//         setIndex(0);
//     } else if(total>.4 && total<.8){
//         setIndex(1);
//     } else {
//         setIndex(2);
//     }
//     setScorePercent(total);
//     setModalShow(true);
//   };
  return (
    <div className="App">
      <ScrollToTop />
      {/* <Header /> */}
      
      {/* <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      /> */}
      <Jumbotron className="container-fluid">
        <div
          style={{
            background: "white",
            width: "80%",
            margin: "auto",
            padding: "1%",
          }}
          className="score-container"
        >
          <h1 className="marginTop">Risk Profile</h1>

					<form>
						{questions.map((q, i) => (
							<div className="text-left pl-5 my-3" key={q.id}>
								<p style={{ color: "#3AD4AF", fontWeight: "600" }}>
									{q.question}
								</p>
								{q.options.map((opt, index) => (
									<div
										className="q-i-box"
										onChange={(e) => handleOptionChange(e, i)}
										key={index}
									>
										<input
											type="radio"
											className="mr-2"
											name={`${i}`}
											required
											value={`${index}`}
											id={`${i}${index}`}
										/>
										<label htmlFor={`${i}${index}`}>{opt}</label>
									</div>
								))}
							</div>
						))}
						<Button
							type="submit"
							variant="primary"
							style={{ width: "40%", margin: "0 0 5%" }}
						>
							Submit
						</Button>
					</form>
				</div>
			</Jumbotron>
			{/* <Footer />
			<SocialFollow /> */}
		</div>
	);
}
