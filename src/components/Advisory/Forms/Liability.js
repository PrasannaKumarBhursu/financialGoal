import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { MdDelete, MdAddCircleOutline } from "react-icons/md";

import { FieldArray } from "formik";

const Liability_details = (props) => {
	return (
		<>
			<div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8 ">
				<div className=" tw-h-auto tw-border-2 tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
					<div className="tw-flex tw-w-full">
						<div className="lg:tw-w-2/3">
							<h1 className="tw-font-semibold tw-text-left tw-text-2xl  md:tw-text-5xl tw-m-4 tw-ml-10">
								Liability Details
							</h1>
							<div className="mobile-bg  tw-ml-8 lg:tw-ml-20 tw-p-4 tw-text-left tw-m-2 tw-w-full tw-flex tw-flex-col">
								<Formik
									initialValues={{
										salaryAvl: true,
										salary: "",
										salaryPeriod: "Yearly",
									}}
									validationSchema={Yup.object({
										salary: Yup.string().when("salaryAvl", {
											is: (salaryAvl) => salaryAvl === true,
											then: Yup.string().required("Salary is required"),
										}),
									})}
									onSubmit={(values, { setSubmitting }) => {
										setTimeout(() => {
											console.log(values);
											//	myFunction();

											alert(JSON.stringify(values, null, 2));
											setSubmitting(false);
										}, 100);
									}}
								>
									{({ values, errors }) => (
										<Form className="tw-w-full">
											<div className="tw-flex tw-flex-col md:tw-flex-row tw-justify-between md:tw-items-center  tw-w-5/6 tw-mt-4 tw-flex-row">
												<div
													className={`tw-flex tw-w-6/6 md:tw-w-3/6 tw-items-center  ${
														!values.salaryAvl && "tw-w-6/6"
													}`}
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
														{!values.salaryAvl && (
															<label
																htmlFor="salaryAvl"
																title="add salary "
																className="tw-font-bold tw-cursor-pointer tw-text-gray-800 tw-mt-3 tw-text-md  "
															>
																<MdAddCircleOutline className="tw-text-green-500  tw-ml-2 tw-text-lg" />
																<Field
																	id="salaryAvl"
																	name="salaryAvl"
																	type="checkbox"
																	className="tw-hidden "
																/>
															</label>
														)}
													</div>
												</div>
												{values.salaryAvl && (
													<div className="tw-w-6/6  md:tw-w-3/6 ">
														<div className="tw-flex tw-items-center tw-w-4/4">
															<Field
																name="salary"
																type="number"
																placeholder="Enter salary"
																className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
															/>{" "}
															<label
																htmlFor="salaryAvl"
																title="remove salary "
																className="tw-font-bold tw-cursor-pointer tw-text-gray-800 tw-mt-3 tw-text-md tw-w-2/5 "
															>
																<MdDelete className="tw-text-red-500 tw-ml-2 tw-text-lg" />
																<Field
																	id="salaryAvl"
																	name="salaryAvl"
																	type="checkbox"
																	className="tw-hidden "
																/>
															</label>
														</div>
													</div>
												)}
											</div>
											<div className="tw-text-red-500 tw-mt-4 tw-text-sm tw-font-semibold">
												<ErrorMessage name="salary" />{" "}
											</div>

											<div className="tw-w-3/4 tw-mt-4 tw-text-center">
												<button
													type="submit"
													className="tw-border-nishyellow-400 tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
												>
													Save And Next
												</button>
											</div>

											<pre>{JSON.stringify({ values, errors }, null, 4)}</pre>
										</Form>
									)}
								</Formik>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className="tw-border-nishblue-200 tw-p-4 md:tw-p-8"></div>
		</>
	);
};

export default Liability_details;
