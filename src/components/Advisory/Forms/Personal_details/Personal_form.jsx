import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MdDelete, MdAddCircleOutline } from "react-icons/md";

import ScrollToTop from "../../../ScrollToTop";
import { FieldArray } from "formik";

const Personal_details = (props) => {
	// function myFunction() {
	// 	window.location.href = "/form/investment";
	// }

	const { next } = props;
	console.log(props);
	//React hook for checkbox communication address
	const [checkedComm, setCheckedComm] = useState(true);

	const handleChangeComm = () => {
		setCheckedComm(!checkedComm);
	};

	const depDetails = {
		depTitle: "",
		depName: "",
		depRel: "",
		depDob: "",
		financiallyDependent: "",
		depPan: "",
	};

	const number = {
		mobNum: "",
	};

	return (
		<>
			<div className="tw-ml-8 lg:tw-ml-20 tw-p-4 tw-text-left tw-m-2 tw-w-full tw-flex tw-flex-col">
				{/* <span className=" tw-flex tw-items-center tw-gap-2 tw-text-left tw-text-lg tw-text-gray-600 tw-font-semibold">
					<p>Personal Details</p>
					<FaCheckCircle className="tw-text-green-500" />
				</span> */}

				<Formik
					initialValues={{
						title: "",
						firstName: "",
						lastName: "",
						gender: "",
						education: "",
						mobile: [number],
						email: [{ emailId: "" }],
						dob: "",
						maritialStatus: "",
						pan: "",
						aadhar: "",
						address: "",
						city: "",
						state: "",
						zipcode: "",
						occupation: "",
						othersOccupation: "",
						commDetails: true,
						webAdderess: "",
						office: "",
						designation: "",
						share: "",
						comaddress: "",
						commcity: "",
						commstate: "",
						comzipcode: "",
						dependents: [depDetails],
						agree: false,
					}}
					validationSchema={Yup.object({
						title: Yup.string()
							.oneOf(["Mr", "Mrs", "Ms"], "Please select a title")
							.required("Please select a title"),
						firstName: Yup.string()
							.max(30, "Must be 30 characters or less")
							.required("Enter your full name."),
						lastName: Yup.string()
							.max(30, "Must be 30 characters or less")
							.required("Enter your Last name."),
						gender: Yup.string()
							.oneOf(["Male", "Female", "Others"], "Please select a gender")
							.required("Please select a gender"),
						mobile: Yup.array(
							Yup.object({
								mobNum: Yup.string()
									.min(10, "Must be 10 characters")
									.max(10, "Must be 10 characters")
									.required("A mobile  number is required"),
							})
						),
						email: Yup.array(
							Yup.object({
								emailId: Yup.string()
									.email("Invalid email address")
									.required("An Email Address is required"),
							})
						),

						dob: Yup.date().required("A Date of Birth is required"),
						maritialStatus: Yup.string()
							.oneOf(["Married", "Unmarried"], "Please select a marital status")
							.required("Please select a marital status"),
						education: Yup.string()
							.oneOf(
								["10th", "Btech", "Mtech", "Pg", "Phd"],
								"Please select a maritial Education"
							)
							.required("Please select a eduaction"),
						pan: Yup.string()
							.min(10, "Must be 10 characters")
							.max(10, "Must be 10 characters")
							.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}")
							.required("A PAN number is required"),
						aadhar: Yup.string()
							.min(12, "Must be 10 characters")
							.max(12, "Must be 10 characters")
							.required("AN AADHAR number is required"),
						address: Yup.string().required("An Address is required"),
						city: Yup.string().required("A City is required"),
						state: Yup.string().required("A state is required"),
						zipcode: Yup.string()
							.min(6, "Must be 6 characters")
							.max(6, "Must be 6 characters")
							.required("A Pin Code is required"),
						//	commDetails: Yup.bool().oneOf([true], "Field must be checked"),
						comaddress: Yup.string().when("commDetails", {
							is: (commDetails) => commDetails !== true,
							then: Yup.string().required("An Address is required"),
						}),
						comcity: Yup.string().when("commDetails", {
							is: (commDetails) => commDetails !== true,
							then: Yup.string().required("A city is required"),
						}),
						comstate: Yup.string().when("commDetails", {
							is: (commDetails) => commDetails !== true,
							then: Yup.string().required("A state is required"),
						}),

						comzipcode: Yup.string().when("commDetails", {
							is: (commDetails) => commDetails !== true,
							then: Yup.string()
								.min(6, "Must be 6 characters")
								.max(6, "Must be 6 characters")
								.required("A Pin Code is required"),
						}),
						occupation: Yup.string()
							.oneOf(
								["Service", "SelfEmployed", "Business", "Others"],
								"Please select a occupation"
							)
							.required("Please select a occupation"),
						othersOccupation: Yup.string().when("occupation", {
							is: (occupation) => occupation === "Others",
							then: Yup.string().required("A Others Occupation is required"),
						}),
						webAddress: Yup.string().matches(
							/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
							"Enter correct url!"
						),

						dependents: Yup.array(
							Yup.object({
								depTitle: Yup.string()
									.oneOf(["Mr", "Mrs", "Ms"], "Please select a title")
									.required("Please select a title"),
								depName: Yup.string()
									.max(30, "Must be 30 characters or less")
									.required("Enter your Dependent name."),
								depRel: Yup.string()
									.oneOf(
										["Father", "Mother", "Relative"],
										"Please select a relationship"
									)
									.required("Please select a relationship"),
								depDob: Yup.date().required("A Date of Birth is required"),
								financiallyDependent: Yup.string()
									.oneOf(
										["Yes", "No", ""],
										"Please select a Financially dependent or not "
									)
									.required("Please select a financial details"),
								depPan: Yup.string()
									.min(10, "Must be 10 characters")
									.max(10, "Must be 10 characters")
									.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}")
									.required("A PAN number is required"),
							})
						),
						agree: Yup.bool().oneOf(
							[true],
							"Please agree terms and conditions"
						),
					})}
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
							<div className="tw-flex tw-justify-between tw-w-3/4 tw-mt-4 tw-flex-row">
								<ScrollToTop />
								<div className="tw-w-2/6">
									<label
										htmlFor="title"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md "
									>
										TITLE
									</label>

									<div>
										<Field
											name="title"
											className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
											as="select"
										>
											<option value="">Select Title</option>
											<option value="Mr">Mr.</option>
											<option value="Ms">Ms.</option>
											<option value="Mrs">Mrs.</option>
										</Field>{" "}
									</div>

									<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
										<ErrorMessage name="title" />{" "}
									</div>
								</div>
								<div className="tw-w-4/6">
									<label
										htmlFor="firstName"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md"
									>
										FIRST NAME
									</label>
									<div className="tw-flex tw-items-center ">
										<Field
											name="firstName"
											type="text"
											className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
										/>{" "}
									</div>
									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="firstName" />{" "}
									</div>
								</div>
							</div>
							<label
								htmlFor="lastName"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md"
							>
								LAST NAME
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4 ">
								<Field
									name="lastName"
									type="text"
									className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="lastName" />{" "}
							</div>
							<div className="tw-flex tw-justify-between tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-w-3/6">
									<label
										htmlFor="gender"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md "
									>
										GENDER
									</label>

									<div>
										<Field
											name="gender"
											className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
											as="select"
										>
											<option value="">Select gender</option>
											<option value="Male">Male</option>
											<option value="Female">Female</option>
											<option value="Others">Others</option>
										</Field>{" "}
									</div>

									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="gender" />{" "}
									</div>
								</div>
								<div className="tw-w-3/6">
									<label
										htmlFor="dob"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md"
									>
										DATE OF BIRTH
									</label>
									<div className="tw-flex tw-items-center tw-w-3/4">
										<Field
											name="dob"
											type="date"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
										/>{" "}
									</div>
									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="dob" />{" "}
									</div>
								</div>
							</div>
							<div className="tw-flex tw-justify-between tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-w-3/6">
									<label
										htmlFor="education"
										className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md "
									>
										EDUCATION
									</label>

									<div>
										<Field
											name="education"
											className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
											as="select"
										>
											<option value="">Select Education</option>
											<option value="10th">10th</option>
											<option value="Btech">Btech</option>
											<option value="Mtech">Mtech</option>
											<option value="Pg">Pg</option>
											<option value="Phd">Phd</option>
										</Field>{" "}
									</div>

									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="education" />{" "}
									</div>
								</div>
								<div className="tw-w-3/6">
									<label
										htmlFor="maritialStatus"
										className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
									>
										MARITAL STATUS
									</label>
									<div>
										<Field
											name="maritialStatus"
											className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
											as="select"
										>
											<option value="">Select Marital status </option>
											<option value="Married">Married</option>
											<option value="Unmarried">Unmarried</option>
										</Field>{" "}
									</div>

									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="maritialStatus" />{" "}
									</div>
								</div>
							</div>
							<div className="tw-flex tw-justify-between tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-w-3/6">
									<label
										htmlFor="pan"
										className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
									>
										PAN
									</label>
									<div className="tw-flex tw-items-center tw-w-3/4">
										<Field
											name="pan"
											type="text"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
										/>{" "}
									</div>
									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="pan" />{" "}
									</div>
								</div>
								<div className="tw-w-3/6">
									<label
										htmlFor="aadhar"
										className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
									>
										AADHAR NUMBER 
									</label>
									<div className="tw-flex tw-items-center tw-w-3/4">
										<Field
											name="aadhar"
											type="text"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
										/>{" "}
									</div>
									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="aadhar" />{" "}
									</div>
								</div>
							</div>

							<label
								htmlFor="address"
								className="tw-font-bold tw-text-gray-800 tw-text-md"
							>
								ADDRESS
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="address"
									type="text"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="address" />{" "}
							</div>
							<div className="tw-flex tw-justify-between tw-w-5/6 tw-mt-4 tw-flex-row">
								<div className="tw-w-3/6">
									<label
										htmlFor="city"
										className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
									>
										CITY
									</label>
									<div className="tw-flex tw-items-center tw-w-3/4">
										<Field
											name="city"
											type="text"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
										/>{" "}
									</div>
									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="city" />{" "}
									</div>
								</div>
								<div className="tw-w-3/6">
									<label
										htmlFor="state"
										className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
									>
										STATE
									</label>
									<div className="tw-flex tw-items-center tw-w-3/4">
										<Field
											name="state"
											type="text"
											className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
										/>{" "}
									</div>
									<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
										<ErrorMessage name="state" />{" "}
									</div>
								</div>
							</div>
							<label
								htmlFor="zipcode"
								className="tw-font-bold tw-text-gray-800 tw-text-md"
							>
								PIN CODE
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="zipcode"
									type="number"
									className="tw-border-b-2 tw-border-t-0 tw-border-l-0  tw-border-r-0 tw-border-solid tw-border-black tw-outline-none tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="zipcode" />{" "}
							</div>
							<label
								htmlFor="occupation"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md "
							>
								OCCUPATION
							</label>

							<div className="tw-flex  tw-w-3/4 ">
								<Field
									name="occupation"
									className={`tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  ${
										values.occupation === "Others" ? "tw-w-2/5 " : "tw-w-full "
									}tw-mt-2 tw-mb-4`}
									as="select"
								>
									<option value="">Select Title</option>
									<option value="Service">Service</option>
									<option value="Business">Business</option>
									<option value="SelfEmployed">Self Employed</option>
									<option value="Others">Others </option>
								</Field>{" "}
								{values.occupation === "Others" && (
									<Field
										name="othersOccupation"
										type="text"
										placeholder="Enter others value"
										className="tw-ml-10  tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/6 tw-mt-2 tw-mb-4"
									/>
								)}
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="occupation" />{" "}
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="othersOccupation" />{" "}
							</div>

							<label
								htmlFor="webAddress"
								className="tw-font-bold tw-text-gray-800 tw-mt-3  tw-text-md"
							>
								Web Address of Business(If You Have)
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="webAddress"
									type="text"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
								/>{" "}
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="webAddress" />{" "}
							</div>

							<label
								htmlFor="office"
								className="tw-font-bold tw-text-gray-800 tw-mt-3  tw-text-md"
							>
								OFFICE / ESTABLISHMENT NAME
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="office"
									type="text"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
								/>{" "}
							</div>

							<label
								htmlFor="designation"
								className="tw-font-bold tw-text-gray-800 tw-mt-3  tw-text-md"
							>
								DESIGNATION
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="designation"
									type="text"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
								/>{" "}
							</div>

							<label
								htmlFor="share"
								className="tw-font-bold tw-text-gray-800 tw-mt-3  tw-text-md"
							>
								IF PARTNER / SHAREHOLDER ,MENTION PERCENTAGE (%)
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="share"
									type="number"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
								/>{" "}
							</div>

							{/* mobile arrary input */}
							<FieldArray
								name="mobile"
								render={(arrayHelpers) => {
									return (
										<div>
											{values.mobile && values.mobile.length > 0
												? values.mobile.map((mob, index) => (
														<div key={index}>
															<div>
																<div className="tw-flex tw-items-center tw-w-3/4">
																	<label
																		htmlFor={`mobile.${index}.mobNum`}
																		className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
																	>
																		MOBILE
																	</label>
																	{values.mobile.length > 1 && (
																		<button
																			type="button"
																			className=" tw-border-none tw-outline-none tw-text-red-600 tw-bg-white tw-mt-1.5   tw-flex tw-items-center "
																			onClick={() => arrayHelpers.remove(index)}
																		>
																			<MdDelete />
																		</button>
																	)}
																	{values.mobile.length < 2 && (
																		<button
																			type="button"
																			className=" tw-border-none tw-outline-none tw-text-green-600 tw-bg-white tw-mt-1.5 tw-w-10  tw-flex tw-items-center "
																			onClick={() => arrayHelpers.push(number)}
																		>
																			<MdAddCircleOutline />
																		</button>
																	)}
																</div>

																<div className="tw-flex tw-items-center tw-w-3/4">
																	<Field
																		name={`mobile.${index}.mobNum`}
																		type="number"
																		className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
																	/>{" "}
																</div>

																<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																	<ErrorMessage
																		name={`mobile.${index}.mobNum`}
																	/>{" "}
																</div>
															</div>
														</div>
												  ))
												: null}
										</div>
									);
								}}
							></FieldArray>

							{/* email arrary input */}
							<FieldArray
								name="email"
								render={(arrayHelpers) => {
									return (
										<div>
											{values.email && values.email.length > 0
												? values.email.map((mob, index) => (
														<div key={index}>
															<div>
																<div className="tw-flex tw-items-center tw-w-3/4">
																	<label
																		htmlFor={`email.${index}.emailId`}
																		className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
																	>
																		EMAIL
																	</label>
																	{values.email.length > 1 && (
																		<button
																			type="button"
																			className=" tw-border-none tw-outline-none tw-text-red-600 tw-bg-white tw-mt-1.5   tw-flex tw-items-center "
																			onClick={() => arrayHelpers.remove(index)}
																		>
																			<MdDelete />
																		</button>
																	)}
																	{values.email.length < 2 && (
																		<button
																			type="button"
																			className=" tw-border-none tw-outline-none tw-text-green-600 tw-bg-white tw-mt-1.5 tw-w-10  tw-flex tw-items-center "
																			onClick={() =>
																				arrayHelpers.push({ emailId: "" })
																			}
																		>
																			<MdAddCircleOutline />
																		</button>
																	)}
																</div>

																<div className="tw-flex tw-items-center tw-w-3/4">
																	<Field
																		name={`email.${index}.emailId`}
																		type="email"
																		className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
																	/>{" "}
																</div>

																<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																	<ErrorMessage
																		name={`email.${index}.emailId`}
																	/>{" "}
																</div>
															</div>
														</div>
												  ))
												: null}
										</div>
									);
								}}
							></FieldArray>

							{/* communication details */}
							<div>
								<div className="tw-flex tw-w-3/4 tw-mt-8 tw-gap-2 tw-items-center">
									<label htmlFor="commDetails">
										<Field
											type="checkbox"
											id="commDetails"
											//onChange={handleChangeComm}
											name="commDetails"
										/>
									</label>
									<p className="tw-text-md tw-font-semibold tw-text-gray-600">
										My communication address is same as permanent address
									</p>
								</div>

								{!values.commDetails && (
									<>
										<div className="tw-mt-6">
											<label
												htmlFor="comaddress"
												className="tw-font-bold tw-text-gray-800 tw-text-md"
											>
												COMMUNICATION ADDRESS
											</label>
											<br />
											<Field
												name="comaddress"
												type="text"
												className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
											/>{" "}
										</div>
										<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
											<ErrorMessage name="comaddress" />{" "}
										</div>
										<div className="tw-flex tw-justify-between tw-w-5/6 tw-mt-4 tw-flex-row">
											<div className="tw-w-3/6">
												<label
													htmlFor="commcity"
													className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
												>
													COMMUNICATION CITY
												</label>
												<div className="tw-flex tw-items-center tw-w-3/4">
													<Field
														name="commcity"
														type="text"
														className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
													/>{" "}
												</div>
												<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
													<ErrorMessage name="commcity" />{" "}
												</div>
											</div>
											<div className="tw-w-3/6">
												<label
													htmlFor="commstate"
													className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
												>
													COMMUNICATION STATE
												</label>
												<div className="tw-flex tw-items-center tw-w-3/4">
													<Field
														name="commstate"
														type="text"
														className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
													/>{" "}
												</div>
												<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
													<ErrorMessage name="commstate" />{" "}
												</div>
											</div>
										</div>

										<div>
											<label
												htmlFor="comzipcode"
												className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
											>
												COMMUNICATION PIN CODE
											</label>
											<br />
											<Field
												name="comzipcode"
												type="text"
												className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
											/>{" "}
										</div>
										<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
											<ErrorMessage name="comzipcode" />{" "}
										</div>
									</>
								)}
							</div>

							<FieldArray
								name="dependents"
								render={(arrayHelpers) => {
									return (
										<div>
											{values.dependents && values.dependents.length > 0
												? values.dependents.map((dep, index) => (
														<div key={index}>
															<div>
																<p className="tw-mb-8 tw-font-semibold tw-text-4xl lg:tw--ml-12">
																	Dependent Details
																</p>
																<div className="tw-flex tw-justify-between tw-w-3/4 tw-mt-4 tw-flex-row">
																	<div className="tw-w-2/6">
																		<label
																			htmlFor={`dependents.${index}.depTitle`}
																			className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md "
																		>
																			TITLE
																		</label>

																		<div>
																			<Field
																				name={`dependents.${index}.depTitle`}
																				className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
																				as="select"
																			>
																				<option value="">Select Title</option>
																				<option value="Mr">Mr.</option>
																				<option value="Ms">Ms.</option>
																				<option value="Mrs">Mrs.</option>
																			</Field>{" "}
																		</div>

																		<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
																			<ErrorMessage
																				name={`dependents.${index}.depTitle`}
																			/>{" "}
																		</div>
																	</div>
																	<div className="tw-w-4/6">
																		<label
																			htmlFor={`dependents.${index}.depName`}
																			className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md"
																		>
																			FIRST NAME
																		</label>
																		<div className="tw-flex tw-items-center ">
																			<Field
																				name={`dependents.${index}.depName`}
																				type="text"
																				className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
																			/>{" "}
																		</div>
																		<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																			<ErrorMessage
																				name={`dependents.${index}.depName`}
																			/>{" "}
																		</div>
																	</div>
																</div>

																<div className="tw-flex  tw-justify-between tw-w-5/6  tw-mt-4 tw-flex-row">
																	<div className="tw-w-3/5">
																		<label
																			htmlFor={`dependents.${index}.depRel`}
																			className="tw-font-bold tw-text-gray-800 tw-mt-1 md:tw-text-md tw-text-sm"
																		>
																			RELATIONSHIP
																		</label>
																		<div>
																			<Field
																				name={`dependents.${index}.depRel`}
																				className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none  tw-border-b-2 tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
																				as="select"
																			>
																				<option value="">
																					Select Relationship
																				</option>
																				<option value="Father">Father</option>
																				<option value="Mother">Mother</option>
																				<option value="Relative">
																					Relative
																				</option>
																			</Field>{" "}
																		</div>
																		<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																			<ErrorMessage
																				name={`dependents.${index}.depRel`}
																			/>{" "}
																		</div>
																	</div>
																	<div className="tw-w-2/5 ">
																		<label
																			htmlFor={`dependents.${index}.depDob`}
																			className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
																		>
																			DATE OF BIRTH
																		</label>
																		<div>
																			<Field
																				name={`dependents.${index}.depDob`}
																				type="date"
																				className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4  tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
																			/>{" "}
																		</div>
																		<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																			<ErrorMessage
																				name={`dependents.${index}.depDob`}
																			/>{" "}
																		</div>
																	</div>
																</div>

																<div className="tw-flex tw-justify-between tw-w-5/6 tw-mt-4 tw-flex-row">
																	<div className="tw-w-3/5">
																		<label
																			htmlFor={`dependents.${index}.depPan`}
																			className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
																		>
																			PAN NUMBER 
																		</label>
																		<div className="tw-flex tw-items-center tw-w-3/4">
																			<Field
																				name={`dependents.${index}.depPan`}
																				type="text"
																				className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 "
																			/>{" "}
																		</div>
																		<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																			<ErrorMessage
																				name={`dependents.${index}.depPan`}
																			/>{" "}
																		</div>
																	</div>
																	<div className="tw-w-2/5 ">
																		<label
																			htmlFor={`dependents.${index}.depRel`}
																			className="tw-font-bold tw-text-gray-800 tw-mt-3 md:tw-text-md tw-mb-5 tw-text-sm"
																		>
																			FINANCIALLY DEPENDENT
																		</label>
																		<div>
																			<Field
																				name={`dependents.${index}.financiallyDependent`}
																				className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none  tw-border-b-2 tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
																				as="select"
																			>
																				<option value="">Select status</option>
																				<option value="Yes">Yes</option>
																				<option value="No">No</option>
																			</Field>{" "}
																		</div>
																		<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																			<ErrorMessage
																				name={`dependents.${index}.financiallyDependent`}
																			/>{" "}
																		</div>
																	</div>
																</div>

																<button
																	type="button"
																	className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-50 tw-rounded-lg tw-font-bold tw-mt-6 tw-mr-2"
																	onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
																>
																	Remove dependent
																</button>
																{/* <button
																type="button"
																className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-50 tw-rounded-lg tw-font-bold tw-mt-6"
																onClick={() => arrayHelpers.insert(index, depDetails)} // insert an empty string at a position
															>
																Add Another Dependent
															</button> */}
															</div>
														</div>
												  ))
												: null}

											{values.dependents.length < 7 && (
												<button
													type="button"
													className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
													onClick={() => arrayHelpers.push(depDetails)}
												>
													Add a dependent
												</button>
											)}
										</div>
									);
								}}
							></FieldArray>
							<div className="tw-flex tw-w-full tw-text-justify tw-gap-2 tw-mt-8">
								<Field
									type="checkbox"
									id="agree"
									name="agree"
									className="tw-self-center"
								/>
								<label
									htmlFor="agree"
									className=" tw-w-3/4 tw-text-md tw-font-semibold tw-text-gray-600 tw-self-center"
								>
									I Agree ,The above details are all correct .I Have read all
									conditions and privacy policy.
								</label>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="agree" />{" "}
							</div>

							<div className="tw-w-3/4 tw-mt-4 tw-text-center">
								<button
									type="submit"
									className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
								>
									Save And Next
								</button>
							</div>
							{/* <div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								{errors.length !== 0  ? "please fill all required fileds " : ""}
							</div>
							<pre>{JSON.stringify({ values, errors }, null, 4)}</pre> */}
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default Personal_details;
