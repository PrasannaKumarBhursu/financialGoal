import { Component } from "react";

import Header from "../../Layout/Header";
import Footer from "../../Layout/Footer"
import { Button, Form, Row, InputGroup, Col } from "react-bootstrap";

import "./index.css";

class IncomeForm2 extends Component {
	state = {
		activeField: 1,
		monthlySalaryIncome: "",
		yearlySalaryIncome: "",
		depMonthlySalaryIncome: "",
		depYearlySalaryIncome: "",
		monthlyPensionIncome: "",
		yearlyPensionIncome: "",
		depMonthlyPensionIncome: "",
		depYearlyPensionIncome: "",
	};

	renderNextField = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			activeField: prevState.activeField + 1,
		}));
	};

	nextButton = () => (
		<button type="submit" className="btn btn-primary">
			Next
		</button>
	);

	gotoBack = (e) => {
		e.preventDefault();
		this.setState((prevState) => ({
			activeField: prevState.activeField - 1,
		}));
	};
	backButton = () => (
		<button type="button" onClick={this.gotoBack} className="btn btn-primary">
			Back
		</button>
	);

	pensionIncome = () => {
		const {
			yearlyPensionIncome,
			monthlyPensionIncome,
			depMonthlyPensionIncome,
			depYearlyPensionIncome,
		} = this.state;

		return (
			<div className="d-flex flex-row justify-content-space-between">
				<div className="desktop-img  align-self-center  d-none d-md-block">
					<img src="https://static.toiimg.com/thumb/msid-64007735,imgsize-43279,width-400,resizemode-4/64007735.jpg" />
				</div>
				<div className="input-field">
					<h1 className="text-left heading-color">Your Pension Income </h1>
					<div>
						<p className="text-left">
							<b>Mr Abc:</b>
						</p>

						<Row as={Row}>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-Pension-income">Monthly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-Pension-income"
									onChange={(e) =>
										this.setState({
											monthlyPensionIncome: e.target.value,
										})
									}
									value={monthlyPensionIncome}
								/>
							</Form.Group>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-Pension-income">Yearly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-Pension-income"
									onChange={(e) =>
										this.setState({
											yearlyPensionIncome: e.target.value,
										})
									}
									value={yearlyPensionIncome}
								/>
							</Form.Group>
						</Row>
					</div>
					<div>
						<p className="text-left">
							<b>Earning Dependent Member:</b>
						</p>

						<Row as={Row}>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-Pension-income">Monthly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-Pension-income"
									onChange={(e) =>
										this.setState({
											depMonthlyPensionIncome: e.target.value,
										})
									}
									value={depMonthlyPensionIncome}
								/>
							</Form.Group>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-Pension-income">Yearly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-Pension-income"
									value={depYearlyPensionIncome}
									onChange={(e) =>
										this.setState({
											depYearlyPensionIncome: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Row>
					</div>
					<Form.Group controlId="formFile" className="mb-3 text-left">
						<Form.Label>
							<b>Upload Document</b>
						</Form.Label>
						<Form.Control type="file" placeholder="choose" />
					</Form.Group>
				</div>
			</div>
		);
	};

	salaryIncome = () => {
		const {
			yearlySalaryIncome,
			monthlySalaryIncome,
			depMonthlySalaryIncome,
			depYearlySalaryIncome,
		} = this.state;
		return (
			<div className="d-flex flex-row justify-content-space-between">
				<div className="input-field">
					<h1 className="text-left heading-color"> Salary  </h1>

					<div>
						<p className="text-left">
							<b>Mr Abc:</b>
						</p>

						<Row as={Row}>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-mothly-income">Monthly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-monthly-income"
									onChange={(e) =>
										this.setState({
											monthlySalaryIncome: e.target.value,
										})
									}
									value={monthlySalaryIncome}
								/>
							</Form.Group>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-salary-income">Yearly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-salary-income"
									onChange={(e) =>
										this.setState({
											yearlySalaryIncome: e.target.value,
										})
									}
									value={yearlySalaryIncome}
								/>
							</Form.Group>
						</Row>
					</div>
					<div>
						<p className="text-left">
							<b>Earning Dependent Member:</b>
						</p>

						<Row as={Row}>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-mothly-income">Monthly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-monthly-income"
									onChange={(e) =>
										this.setState({
											depMonthlySalaryIncome: e.target.value,
										})
									}
									value={depMonthlySalaryIncome}
								/>
							</Form.Group>
							<Form.Group as={Col} className="input-con text-left">
								<Form.Label htmlFor="yearly-salary-income">Yearly</Form.Label>
								<Form.Control
									type="number"
									id="yearly-salary-income"
									value={depYearlySalaryIncome}
									onChange={(e) =>
										this.setState({
											depYearlySalaryIncome: e.target.value,
										})
									}
								/>
							</Form.Group>
						</Row>
					</div>
					<Form.Group controlId="formFile" className="mb-3 text-left">
						<Form.Label>
							<b>Upload Document</b>
						</Form.Label>
						<Form.Control type="file" placeholder="choose" />
					</Form.Group>
				</div>
				<div className="desktop-img d-none align-self-center d-md-block">
					<img src="https://static.toiimg.com/thumb/msid-64007735,imgsize-43279,width-400,resizemode-4/64007735.jpg" />
				</div>
			</div>
		);
	};

	render() {
		const { activeField } = this.state;
		console.log(activeField);
		return (
			<Form className="box-con pl-3 pr-3">
				<Header />
				<h1>Income Details</h1>

				{this.salaryIncome()}
				{this.pensionIncome()}
				<Footer />
			</Form>
		);
	}
}

export default IncomeForm2;
