import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { FieldArray } from "formik";

const Income_details = (props) => {
	const { next } = props;

	return (
		<>
			<div className="tw-ml-8 lg:tw-ml-20 tw-p-4 tw-text-left tw-m-2 tw-w-full tw-flex tw-flex-col">
				<Formik
					initialValues={{
						salaryAvl: true,
						salary: "",
						salaryPeriod: "Yearly",
						pensionAvl: true,
						pension: "",
						pensionPeriod: "Yearly",
						rentAvl: true,
						rent: "",
						rentPeriod: "Yearly",
						businessAvl: true,
						business: "",
						businessPeriod: "Yearly",
						investmentAvl: true,
						investment: "",
						investmentPeriod: "Yearly",
						savingsInterestAvl: true,
						savingsInterest: "",
						savingsInterestPeriod: "Yearly",
						depositsInterestAvl: true,
						depositsInterest: "",
						depositsInterestPeriod: "Yearly",
						bonusAvl: true,
						bonus: "",
						bonusPeriod: "Yearly",
						othersAvl: true,
						others: "",
						othersPeriod: "Yearly",
						agree: false,
					}}
					// validationSchema={Yup.object({
					// 	salary: Yup.string().when("salaryAvl", {
					// 		is: (salaryAvl) => salaryAvl === true,
					// 		then: Yup.string().required("Salary is required"),
					// 	}),
					// 	pension: Yup.string().when("pensionAvl", {
					// 		is: (pensionAvl) => pensionAvl === true,
					// 		then: Yup.string().required("Pension is required"),
					// 	}),
					// 	rent: Yup.string().when("rentAvl", {
					// 		is: (rentAvl) => rentAvl === true,
					// 		then: Yup.string().required("Rent is required"),
					// 	}),
					// 	business: Yup.string().when("businessAvl", {
					// 		is: (businessAvl) => businessAvl === true,
					// 		then: Yup.string().required("Business or profession is required"),
					// 	}),
					// 	investment: Yup.string().when("investmentAvl", {
					// 		is: (investmentAvl) => investmentAvl === true,
					// 		then: Yup.string().required("Investment is required"),
					// 	}),
					// 	savingsInterest: Yup.string().when("savingsInterestAvl", {
					// 		is: (savingsInterestAvl) => savingsInterestAvl === true,
					// 		then: Yup.string().required("Interest on savings is required"),
					// 	}),
					// 	depositsInterest: Yup.string().when("depositsInterestAvl", {
					// 		is: (depositsInterestAvl) => depositsInterestAvl === true,
					// 		then: Yup.string().required("Interest on deposits is required"),
					// 	}),
					// 	bonus: Yup.string().when("bonusAvl", {
					// 		is: (bonusAvl) => bonusAvl === true,
					// 		then: Yup.string().required("Bonus/Incentives is required"),
					// 	}),
					// 	others: Yup.string().when("othersAvl", {
					// 		is: (othersAvl) => othersAvl === true,
					// 		then: Yup.string().required("Others is required"),
					// 	}),

					// 	agree: Yup.bool().oneOf(
					// 		[true],
					// 		"Please agree terms and conditions"
					// 	),
					// })}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							console.log(values);
							//	myFunction();
							next();
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 100);
					}}
				>
					{({ values, errors }) => (
						<Form className="tw-w-full">
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div
									className='tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center
										 "tw-w-6/6"
									'
								>
									<label
										htmlFor="salary"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-w-3/6 "
									>
										SALARY
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="salaryPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-5/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="salary"
											type="number"
											placeholder="Enter salary"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="salary" />{" "}
							</div>

							{/* pension income */}
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center tw-w-6/6">
									<label
										htmlFor="pension"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-w-3/6 "
									>
										PENSION
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="pensionPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-5/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="pension"
											type="number"
											placeholder="Enter pension"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="pension" />{" "}
							</div>

							{/* Rental Income  */}

							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center tw-w-6/6">
									<label
										htmlFor="rent"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-w-3/6 "
									>
										RENT
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="rentPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-5/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="rent"
											type="number"
											placeholder="Enter rent income"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="rent" />{" "}
							</div>

							{/* Business or profession */}
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center tw-w-6/6">
									<label
										htmlFor="business"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-w-3/6 "
									>
										BUSINESS / PROFESSION
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="businessPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-5/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="business"
											type="number"
											placeholder="Enter business income"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="business" />{" "}
							</div>

							{/* Investements */}
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center  tw-w-6/6">
									<label
										htmlFor="investment"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-w-3/6  "
									>
										INVESTMENT
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="investmentPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-6/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="investment"
											type="number"
											placeholder="Enter rent Investment"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="investment" />{" "}
							</div>

							{/* interest on savings */}
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center tw-w-6/6">
									<label
										htmlFor="savingsInterest"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md  tw-w-3/6  "
									>
										INTEREST ON SAVINGS
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="savingsInterestPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-6/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="savingsInterest"
											type="number"
											placeholder="Enter savings interest income"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="savingsInterest" />{" "}
							</div>

							{/* interest on deposits */}
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center tw-w-6/6">
									<label
										htmlFor="depositsInterest"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md  tw-w-3/6  "
									>
										INTEREST ON DEPOSITES
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="depositsInterestPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-5/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="depositsInterest"
											type="number"
											placeholder="Enter savings interest income"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="depositsInterest" />{" "}
							</div>

							{/* Bonus  */}
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center tw-w-6/6">
									<label
										htmlFor="bonus"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md  tw-w-3/6  "
									>
										BONUS/INCENTIVES
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="bonusPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-5/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="bonus"
											type="number"
											placeholder="Enter Bonus income"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="bonus" />{" "}
							</div>

							{/* interest on others */}
							<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center tw-w-6/6">
									<label
										htmlFor="others"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md  tw-w-3/6 "
									>
										OTHERS
									</label>
									<div className="tw-w-2/5 tw-flex ">
										<Field
											name="othersPeriod"
											className="md:tw-ml-3 tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4 "
											as="select"
										>
											<option value="Yearly">Yearly</option>
											<option value="Monthly">Monthly</option>
										</Field>{" "}
									</div>
								</div>

								<div className="tw-w-5/6  md:tw-w-3/6 ">
									<div className="tw-flex tw-items-center tw-w-4/4">
										<Field
											name="others"
											type="number"
											placeholder="Enter savings interest income"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
										/>{" "}
									</div>
								</div>
							</div>
							<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
								<ErrorMessage name="others" />{" "}
							</div>

							<div className="tw-w-3/4 tw-mt-4 tw-text-center">
								<button
									type="submit"
									className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
								>
									Save And Next
								</button>
							</div>

							{/* <pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default Income_details;
