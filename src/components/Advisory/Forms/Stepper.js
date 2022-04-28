import * as React from "react";
import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepButton from "@mui/material/StepButton";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import "../../financialpulse/FinancialPulse.css";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer";
import Marque from "../../Marque";

import PersonalHome from "./Personal_details/Personal_home";
import IncomeForm from "./Income_details/Income_home";
import RiskProfile from "./RiskProfile";
import FinancialGoals from "./FinancialGoals";
import Liability_details from "./Liability";

const steps = [
	"Personal",
	"Income",
	"Liability",
	"Asset",
	"Risk Profile",
	"Financial Goals",
	"Self Declaration",
];

export default function HorizontalNonLinearStepper() {
	const [activeStep, setActiveStep] = React.useState(0);
	const [completed, setCompleted] = React.useState({});

	const totalSteps = () => {
		return steps.length;
	};

	const completedSteps = () => {
		return Object.keys(completed).length;
	};

	const isLastStep = () => {
		return activeStep === totalSteps() - 1;
	};

	const allStepsCompleted = () => {
		return completedSteps() === totalSteps();
	};

	const getStepContent = (steps) => {
		switch (steps) {
			case 0:
				return <PersonalHome next={handleComplete} />;
			case 1:
				return <IncomeForm />;
			case 2:
				return <Liability_details />;

			case 3:
				return (
					//Assets
					<Typography>Assests</Typography>
				);
			case 4:
				return <RiskProfile />;
			case 5:
				return <FinancialGoals />;
			case 6:
				return (
					//self declaration
					<Typography>Self declaration</Typography>
				);
			default:
				return "Unknown step";
		}
	};

	const handleNext = () => {
		const newActiveStep =
			isLastStep() && !allStepsCompleted()
				? // It's the last step, but not all steps have been completed,
				  // find the first step that has been completed
				  steps.findIndex((step, i) => !(i in completed))
				: activeStep + 1;

		setActiveStep(newActiveStep);
	};

	const handleBack = () => {
		setActiveStep((prevActiveStep) => prevActiveStep - 1);
	};

	const handleStep = (step) => () => {
		setActiveStep(step);
	};

	const handleComplete = () => {
		const newCompleted = completed;
		newCompleted[activeStep] = true;
		setCompleted(newCompleted);
		handleNext();
	};

	const handleReset = () => {
		setActiveStep(0);
		setCompleted({});
	};

	return (
		<Box sx={{ p: 0, m: 0 }}>
			<Header />
			<Marque />
			<Stepper
				nonLinear
				activeStep={activeStep}
				alternativeLabel
				sx={{ mt: 3 }}
			>
				{steps.map((label, index) => (
					<Step key={label} completed={completed[index]}>
						<StepButton color="inherit" onClick={handleStep(index)}>
							{label}
						</StepButton>
					</Step>
				))}
			</Stepper>

			<div>
				{allStepsCompleted() ? (
					<React.Fragment>
						<Typography sx={{ mt: 2, mb: 1 }}>
							All steps completed - you&apos;re finished
						</Typography>
						<Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
							<Box sx={{ flex: "1 1 auto" }} />
							<Button onClick={handleReset}>Reset</Button>
						</Box>
					</React.Fragment>
				) : (
					<React.Fragment>
						{/* <Typography sx={{ mt: 2, mb: 1 }}>
              Step {activeStep + 1}
              </Typography> */}
						<div>
							{
								// Populate the content pane based on the active step
								getStepContent(activeStep)
							}
						</div>

						<Box sx={{ display: "flex", flexDirection: "row", pt: 2, p: 4 }}>
							{activeStep !== 0 && (
								<Button
									disabled={activeStep === 0}
									onClick={handleBack}
									sx={{ mr: 1 }}
									variant="contained"
									style={{ width: "10%", margin: "0 0 5%" }}
								>
									{`${steps[activeStep - 1]}`} Form
								</Button>
							)}

							<Box sx={{ flex: "1 1 auto" }}>
								{activeStep !== steps.length &&
									(completed[activeStep] ? (
										<Typography
											variant="caption"
											sx={{ display: "inline-block" }}
										>
											Step {activeStep + 1} already completed
										</Typography>
									) : (
										<Button
											onClick={handleComplete}
											variant="contained"
											style={{ width: "20%", margin: "0 0 5%" }}
										>
											{completedSteps() === totalSteps() - 1
												? "Finish"
												: "Save"}
										</Button>
									))}
							</Box>
							{activeStep !== 6 && (
								<Button
									onClick={handleNext}
									sx={{ mr: 1 }}
									variant="contained"
									style={{ width: "10%", margin: "0 0 5%" }}
								>
									{`${steps[activeStep + 1]}`} Form
								</Button>
							)}
						</Box>
					</React.Fragment>
				)}
			</div>
			<Footer />
		</Box>
	);
}
