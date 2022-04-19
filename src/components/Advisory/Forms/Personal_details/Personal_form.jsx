import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { FaCheckCircle } from "react-icons/fa";
import { GoCheck } from "react-icons/go";
import { Link } from "react-router-dom";

import { FieldArray } from "formik";

const Personal_details = () => {
	function myFunction() {
		window.location.href = "/form/investment";
	}

	//React hook for checkbox nominee address
	const [checkedNominee, setCheckedNominee] = useState(true);

	const handleChangeNominee = () => {
		setCheckedNominee(!checkedNominee);
	};

	//React hook for checkbox communication address
	const [checkedComm, setCheckedComm] = useState(true);

	const handleChangeComm = () => {
		setCheckedComm(!checkedComm);
	};

	//React hook for checkbox nominee details
	const [checkedNomDetails, setCheckedNomDetails] = useState(true);

	const handleChangeNomDetails = () => {
		setCheckedNomDetails(!checkedNomDetails);
	};

	const depDetails = {
		depTitle: "",
		depName: "",
		depRel: "",
		depDob: "",
		financiallyDependent: "",
		depPan: "",
	};

	return (
		<>
			<div className="tw-ml-8 lg:tw-ml-20 tw-p-4 tw-text-left tw-m-2 tw-w-full tw-flex tw-flex-col">
				<span className=" tw-flex tw-items-center tw-gap-2 tw-text-left tw-text-lg tw-text-gray-600 tw-font-semibold">
					<p>Personal Details</p>
					<FaCheckCircle className="tw-text-green-500" />
				</span>

				<Formik
					initialValues={{
						title: "",
						fullName: "",
						gender: "",
						education: "",
						mobNumber1: "",
						mobNumber2: "",
						mobNumber3: "",
						email1: "",
						email2: "",
						email3: "",
						dob: "",
						maritialStatus: "",
						pan: "",
						aadhar: "",
						address: "",
						zipcode: "",
						occupation: "",
						// commDetails: true,
						webAdderess: "",
						office: "",
						designation: "",
						share: "",
						comaddress: "",
						comzipcode: "",
						dependents: [depDetails],
					}}
					validationSchema={Yup.object({
						title: Yup.string()
							.oneOf(["Mr", "Mrs", "Ms"], "Please select a title")
							.required("Please select a title"),
						fullName: Yup.string()
							.max(30, "Must be 30 characters or less")
							.required("Enter your full name."),
						gender: Yup.string()
							.oneOf(["Male", "Female", "Others"], "Please select a gender")
							.required("Please select a gender"),
						mobNumber1: Yup.string()
							.min(10, "Must be 10 characters")
							.max(10, "Must be 10 characters")
							.required("A Phone Number is required"),
						mobNumber2: Yup.string()
							.min(10, "Must be 10 characters")
							.max(10, "Must be 10 characters")
							.required("A Phone Number is required"),
						mobNumber3: Yup.string()
							.min(10, "Must be 10 characters")
							.max(10, "Must be 10 characters")
							.required("A Phone Number is required"),
						email1: Yup.string()
							.email("Invalid email address")
							.required("An Email Address is required"),
						email2: Yup.string()
							.email("Invalid email address")
							.required("An Email Address is required"),
						email3: Yup.string()
							.email("Invalid email address")
							.required("An Email Address is required"),
						dob: Yup.date().required("A Date of Birth is required"),
						maritialStatus: Yup.string()
							.oneOf(
								["Married", "Unmarried"],
								"Please select a maritial status"
							)
							.required("Please select a maritial status"),
						education: Yup.string()
							.oneOf(
								["10th", "Btech", "Mtech", "Pg", "Phd"],
								"Please select a maritial Education"
							)
							.required("Please select a eduaction "),
						pan: Yup.string()
							.min(10, "Must be 10 characters")
							.max(10, "Must be 10 characters")
							.matches("[A-Z]{5}[0-9]{4}[A-Z]{1}")
							.required("A PAN number is required"),
						aadhar: Yup.string()
							.min(12, "Must be 10 characters")
							.max(12, "Must be 10 characters")
							.required("A AADHAR number is required"),
						address: Yup.string().required("An Address is required"),
						zipcode: Yup.string()
							.min(6, "Must be 6 characters")
							.max(6, "Must be 6 characters")
							.required("A Pin Code is required"),
						commDetails: Yup.bool().oneOf([true], "Field must be checked"),
						comaddress: Yup.string().when("commDetails", {
							is: (commDetails) => commDetails !== true,
							then: Yup.string().required("An Address is required"),
						}),

						// })
						comzipcode:
							// Yup.string().when("commDetails", {
							//   is: (commDetails) => commDetails === false,
							//   then:

							Yup.string().when("commDetails", {
								is: (commDetails) => commDetails !== true,
								then: Yup.string()
									.min(6, "Must be 6 characters")
									.max(6, "Must be 6 characters")
									.required("A Pin Code is required"),
							}),

						//}),
						// nomineeDetails: Yup.boolean.oneOf([true, false]),
						occupation: Yup.string()
							.oneOf(
								["Service", "Profession", "Business", "Others"],
								"Please select a occupation"
							)
							.required("Please select a occupation"),
						webAddress: Yup.string().matches(
							/((https?):\/\/)?(www.)?[a-z0-9]+(\.[a-z]{2,}){1,3}(#?\/?[a-zA-Z0-9#]+)*\/?(\?[a-zA-Z0-9-_]+=[a-zA-Z0-9-%]+&?)?$/,
							"Enter correct url!"
						),
						// nomtitle:
						// 	// Yup.string().when("nomineeDetails", {
						// 	//   is: (nomineeDetails) => nomineeDetails === true,
						// 	//   then:
						// 	Yup.string()
						// 		.oneOf(["Mr", "Mrs", "Ms"], "Please select a title")
						// 		.required("Please select a title"),
						// // })
						// nomfullName:
						// 	// Yup.string().when("nomineeDetails", {
						// 	//   is: (nomineeDetails) => nomineeDetails === true,
						// 	//   then:
						// 	Yup.string()
						// 		.max(30, "Must be 30 characters or less")
						// 		.required("Enter your full name."),
						// // })
						// nomdob:
						// 	// Yup.string().when("nomineeDetails", {
						// 	//   is: (nomineeDetails) => nomineeDetails === true,
						// 	//   then:
						// 	Yup.date().required("A Date of Birth is required"),
						// // })
						// nomrel:
						// 	//  Yup.string().when("nomineeDetails", {
						// 	//   is: (nomineeDetails) => nomineeDetails === true,
						// 	//   then:
						// 	Yup.string()
						// 		.oneOf(
						// 			["Father", "Mother", "Relative"],
						// 			"Please select a relationship"
						// 		)
						// 		.required("Please select a relationship"),
						// // })
						// // nomineeAddress: Yup.boolean.oneOf([true, false]),
						// nomaddress:
						// 	// Yup.string().when("nomineeAddress", {
						// 	//   is: (nomineeAddress) => nomineeAddress === false,
						// 	//   then:
						// 	Yup.string().required("An Address is required"),
						// // })
						// nomzipcode: Yup.string()
						// 	// .when("nomineeAddress", {
						// 	//   is: (nomineeAddress) => nomineeAddress === false,
						// 	//   then: Yup.string()
						// 	.min(6, "Must be 6 characters")
						// 	.max(6, "Must be 6 characters")
						// 	.required("A Pin Code is required"),
						// // })
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
					})}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							console.log(values);
							myFunction();
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false);
						}, 400);
					}}
				>
					{({ values }) => (
						<Form className="tw-w-full ">
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

							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="title" />{" "}
							</div>

							<label
								htmlFor="fullName"
								className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md"
							>
								FULL NAME
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="fullName"
									type="text"
									className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="fullName" />{" "}
							</div>

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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-4">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="dob" />{" "}
							</div>

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
									<option value="">Select Eduaction</option>
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

							<label
								htmlFor="maritialStatus"
								className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
							>
								MARITIAL STATUS
							</label>
							<div>
								<Field
									name="maritialStatus"
									className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
									as="select"
								>
									<option value="">Select Maritial status </option>
									<option value="Married">Married</option>
									<option value="Unmarried">Unmarried</option>
								</Field>{" "}
							</div>

							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="maritialStatus" />{" "}
							</div>

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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="pan" />{" "}
							</div>

							<label
								htmlFor="aadhar"
								className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
							>
								AADHAR
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="aadhar"
									type="text"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="aadhar" />{" "}
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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="address" />{" "}
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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
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

							<div>
								<Field
									name="occupation"
									className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
									as="select"
								>
									<option value="">Select Title</option>
									<option value="Service">Service</option>
									<option value="Business">Business</option>
									<option value="Profession">Profession</option>
									<option value="Others">Others</option>
								</Field>{" "}
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="occupation" />{" "}
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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
									{" "}
									<GoCheck />{" "}
								</span>
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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
									{" "}
									<GoCheck />{" "}
								</span>
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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
									{" "}
									<GoCheck />{" "}
								</span>
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
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>

							<label
								htmlFor="mobNumber2"
								className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
							>
								MOBILE NUMBER 1
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="mobNumber1"
									type="number"
									className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="mobNumber1" />{" "}
							</div>
							<label
								htmlFor="mobNumber2"
								className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
							>
								MOBILE NUMBER 2
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="mobNumber2"
									type="number"
									className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="mobNumber2" />{" "}
							</div>

							<label
								htmlFor="mobNumber3"
								className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
							>
								ALTERNATE MOBILE NUMBER
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="mobNumber3"
									type="number"
									className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-full tw-mt-2 tw-mb-4"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="mobNumber3" />{" "}
							</div>

							<label
								htmlFor="email1"
								className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
							>
								EMAIL ADDRESS 1
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="email1"
									type="email"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="email1" />{" "}
							</div>

							<label
								htmlFor="email2"
								className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
							>
								EMAIL ADDRESS 2
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="email2"
									type="email"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="email2" />{" "}
							</div>

							<label
								htmlFor="email3"
								className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
							>
								ALTERNATE EMAIL ADDRESS
							</label>
							<div className="tw-flex tw-items-center tw-w-3/4">
								<Field
									name="email3"
									type="email"
									className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2"
								/>{" "}
								<span className="tw-border-b-2 tw-text-green-600 tw-border-black tw-border-t-0 tw-border-l-0 tw-border-r-0 tw--mb-0.5  tw-border-solid tw-text-gray-400 tw-pb-2 tw-pr-4">
									{" "}
									<GoCheck />{" "}
								</span>
							</div>
							<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
								<ErrorMessage name="email3" />{" "}
							</div>

							{/* communication details */}
							<div>
								<div className="tw-flex tw-w-3/4 tw-mt-8 tw-gap-2 tw-items-center">
									<label htmlFor="commDetails">
										<Field
											type="checkbox"
											id="commDetails"
											checked={checkedComm}
											onChange={handleChangeComm}
											name="toggle"
										/>
									</label>
									<p className="tw-text-md tw-font-semibold tw-text-gray-600">
										My communication address is same as permanent address
									</p>
								</div>

								{!checkedComm && (
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

							<div className="tw-flex tw-w-full tw-text-justify tw-gap-2 tw-mt-8">
								<label htmlFor="detailsCopy">
									<Field type="checkbox" id="detailsCopy" name="toggle" />
								</label>
								<p className=" tw-w-3/4 tw-text-md tw-font-semibold tw-text-gray-600">
									You will receive a digital copy of Fixed Deposit Reciept (FDR)
									on your email ID and mobile number. However, if you wish to
									recieve a physical copy then select Yes
								</p>
							</div>

							{/* <div>
								<div className="tw-flex tw-gap-2 tw-mt-8 tw-items-center">
									<label htmlFor="nomineeDetails">
										<Field
											type="checkbox"
											id="nomineeDetails"
											checked={checkedNomDetails}
											onChange={handleChangeNomDetails}
											name="toggle"
										/>
									</label>
									<p className="tw-text-md tw-font-semibold tw-text-gray-600">
										Do you wish to add a nominee?
									</p>
								</div>

								{checkedNomDetails && (
									<>
										<div className="tw-w-full tw-flex tw-flex-col tw-mt-8">
											<p className="tw-mb-8 tw-font-semibold tw-text-4xl lg:tw--ml-12">
												Nominee Details
											</p>
											<div className="tw-w-2/6">
												<label
													htmlFor="nomtitle"
													className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
												>
													TITLE
												</label>
												<div>
													<Field
														name="nomtitle"
														className="tw-my-select tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
														as="select"
													>
														<option value="">Select Title</option>
														<option value="Mr">Mr.</option>
														<option value="Ms">Ms.</option>
														<option value="Mrs">Mrs.</option>
													</Field>{" "}
												</div>
												<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
													<ErrorMessage name="nomtitle" />{" "}
												</div>
											</div>

											<div className="tw-flex tw-justify-between tw-w-3/4 tw-mt-4 tw-flex-row">
												<div className="tw-w-2/5">
													<label
														htmlFor="nomfullName"
														className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
													>
														NOMINEE FULL NAME
													</label>
													<div>
														<Field
															name="nomfullName"
															type="text"
															className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
														/>{" "}
													</div>
													<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
														<ErrorMessage name="nomfullName" />{" "}
													</div>
												</div>
												<div className="tw-w-2/5">
													<label
														htmlFor="nomdob"
														className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
													>
														NOMINEE DATE OF BIRTH
													</label>
													<div>
														<Field
															name="nomdob"
															type="date"
															className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
														/>{" "}
													</div>
													<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
														<ErrorMessage name="nomdob" />{" "}
													</div>
												</div>
											</div>

											<div className="">
												<label
													htmlFor="nomrel"
													className="tw-font-bold tw-text-gray-800 tw-mt-3 md:tw-text-md tw-text-sm"
												>
													RELATIONSHIP WITH NOMINEE
												</label>
												<div>
													<Field
														name="nomrel"
														className="tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none  tw-border-b-2 tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
														as="select"
													>
														<option value="">Select Relationship</option>
														<option value="Father">Father</option>
														<option value="Mother">Mother</option>
														<option value="Relative">Relative</option>
													</Field>{" "}
												</div>
												<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
													<ErrorMessage name="nomrel" />{" "}
												</div>
											</div>
										</div>
										<div>
											<div className="tw-flex tw-w-3/4 tw-mt-8 tw-gap-2 tw-items-center">
												<label htmlFor="nomineeAddress">
													<Field
														type="checkbox"
														id="nomineeAddress"
														checked={checkedNominee}
														onChange={handleChangeNominee}
														name="toggle"
													/>
												</label>
												<p className="tw-text-md tw-font-semibold tw-text-gray-600">
													Nominee address is same as Primary Applicant's address
												</p>
											</div>

											{!checkedNominee && (
												<>
													<div className="tw-mt-6">
														<label
															htmlFor="nomaddress"
															className="tw-font-bold tw-text-gray-800 tw-text-md"
														>
															NOMINEE ADDRESS
														</label>
														<br />
														<Field
															name="nomaddress"
															type="text"
															className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
														/>{" "}
													</div>
													<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
														<ErrorMessage name="nomaddress" />{" "}
													</div>

													<div>
														<label
															htmlFor="nomzipcode"
															className="tw-font-bold tw-mt-3 tw-text-gray-800 tw-text-md"
														>
															NOMINEE PIN CODE
														</label>
														<br />
														<Field
															name="nomzipcode"
															type="text"
															className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4"
														/>{" "}
													</div>
													<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
														<ErrorMessage name="nomzipcode" />{" "}
													</div>
												</>
											)}
										</div>
									</>
								)}
							</div> */}

							<FieldArray
								name="dependents"
								render={(arrayHelpers) => {
									return (
										<div>
											{values.dependents && values.dependents.length > 0 ? (
												values.dependents.map((friend, index) => (
													<div key={index}>
														<div>
															<p className="tw-mb-8 tw-font-semibold tw-text-4xl lg:tw--ml-12">
																Dependent Details
															</p>
															<div className="tw-w-2/6">
																<label
																	htmlFor={`dependents.${index}.depTitle`}
																	className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
																>
																	TITLE
																</label>
																<div>
																	<Field
																		name={`dependents.${index}.depTitle`}
																		className="tw-my-select tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none  tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
																		as="select"
																	>
																		<option value="">Select Title</option>
																		<option value="Mr">Mr.</option>
																		<option value="Ms">Ms.</option>
																		<option value="Mrs">Mrs.</option>
																	</Field>{" "}
																</div>
																<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																	<ErrorMessage
																		name={`dependents.${index}.depTitle`}
																	/>{" "}
																</div>
															</div>
															<div className="tw-flex tw-justify-between tw-w-3/4 tw-mt-4 tw-flex-row">
																<div className="tw-w-2/5">
																	<label
																		htmlFor={`dependents.${index}.depName`}
																		className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
																	>
																		DEPENDENT FULL NAME
																	</label>
																	<div>
																		<Field
																			name={`dependents.${index}.depName`}
																			type="text"
																			className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
																		/>{" "}
																	</div>
																	<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																		<ErrorMessage
																			name={`dependents.${index}.depName`}
																		/>{" "}
																	</div>
																</div>
																<div className="tw-w-2/5">
																	<label
																		htmlFor={`dependents.${index}.depDob`}
																		className="tw-font-bold tw-text-gray-800 tw-text-sm md:tw-text-md"
																	>
																		DEPENDENT DATE OF BIRTH
																	</label>
																	<div>
																		<Field
																			name={`dependents.${index}.depDob`}
																			type="date"
																			className="tw-border-b-2 tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-outline-none tw-border-black tw-w-3/4 tw-mt-2 tw-mb-4 tw-text-xs md:tw-text-sm"
																		/>{" "}
																	</div>
																	<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																		<ErrorMessage
																			name={`dependents.${index}.depDob`}
																		/>{" "}
																	</div>
																</div>
															</div>

															<div className="">
																<label
																	htmlFor={`dependents.${index}.depRel`}
																	className="tw-font-bold tw-text-gray-800 tw-mt-3 md:tw-text-md tw-text-sm"
																>
																	RELATIONSHIP WITH DEPENDENT
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
																		<option value="Relative">Relative</option>
																	</Field>{" "}
																</div>
																<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																	<ErrorMessage
																		name={`dependents.${index}.depRel`}
																	/>{" "}
																</div>
															</div>
															<label
																htmlFor={`dependents.${index}.depPan`}
																className="tw-font-bold tw-mt-3  tw-text-gray-800 tw-text-md"
															>
																PAN
															</label>
															<div className="tw-flex tw-items-center tw-w-3/4">
																<Field
																	name={`dependents.${index}.depPan`}
																	type="text"
																	className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-4"
																/>{" "}
																<span className="tw-border-b-2 tw-text-green-600 tw-border-t-0 tw-border-l-0 tw-pb-0.5 tw-border-r-0 tw-border-solid tw-border-black tw-text-gray-400 tw-pb-2 tw-pr-4 tw-mb-2">
																	{" "}
																	<GoCheck />{" "}
																</span>
															</div>
															<div className="tw-text-red-500 tw-text-sm tw-font-semibold">
																<ErrorMessage
																	name={`dependents.${index}.depPan`}
																/>{" "}
															</div>

															<button
																type="button"
																className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-50 tw-rounded-lg tw-font-bold tw-mt-6 tw-mr-2"
																onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
															>
																remove dependent
															</button>
															<button
																type="button"
																className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-50 tw-rounded-lg tw-font-bold tw-mt-6"
																onClick={() => arrayHelpers.insert(index, "")} // insert an empty string at a position
															>
																Add Another Dependent
															</button>
														</div>
													</div>
												))
											) : (
												<button
													type="button"
													className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
													onClick={() => arrayHelpers.push("")}
												>
													{/* show this when user has removed all friends from the list */}
													Add a dependent
												</button>
											)}
										</div>
									);
								}}
							></FieldArray>

							<div className="tw-w-3/4 tw-mt-4 tw-text-center">
								<button
									type="submit"
									className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
								>
									Submit
								</button>
							</div>
						</Form>
					)}
				</Formik>
			</div>
		</>
	);
};

export default Personal_details;
