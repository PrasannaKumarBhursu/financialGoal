import React from "react";
import { Form } from "formik";
import Income_details from "./Income_form";

//image
import "../index.css";
import step3 from "../assets/step3.png";
import step3mob from "../assets/step3mob.png";
import aadhar from "../assets/aadhar.png";

import NE_logo from "../assets/NE_logo.png";
const Personal_home = (props) => {
	const { next } = props;
	return (
		<>
			<div className="tw-hidden tw-mt-20 md:tw-mob  tw-w-full tw-px-8 tw-pt-18">
				<img src={step3} className="tw-mx-auto tw-w-full" />
			</div>
			<div className="tw-block md:tw-hidden tw-w-full tw-px-2 tw-pt-8">
				<img src={step3mob} className="tw-mx-auto tw-w-full" />
			</div>

			<div className="tw-border-nishblue-100 tw-p-4 md:tw-p-8">
				<div className=" tw-h-auto tw-border-2 tw-border-solid tw-rounded-2xl tw-border-nishblue-100">
					<div className="tw-flex tw-w-full">
						<div className="tw-hidden  lg:tw-block tw-w-1/3 lg:tw-w-2/5 xl:tw-w-1/2">
							<img
								src={aadhar}
								className="tw-w-full tw-top-4 tw-hidden lg:tw-block tw-sticky tw-top-0 tw-m-auto  tw-mt-3 tw-my-auto"
							/>
						</div>
						<div className="lg:tw-w-2/3">
							<h1 className="tw-font-semibold tw-text-left tw-text-2xl  md:tw-text-5xl tw-m-4 tw-ml-10">
								Income Details
							</h1>
							<Income_details next={next} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Personal_home;
