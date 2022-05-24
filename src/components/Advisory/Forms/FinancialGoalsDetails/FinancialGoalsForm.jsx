import React, { useState } from "react";
import { Formik, Form, Field, FieldArray } from "formik";
import Popup from "reactjs-popup";

import "reactjs-popup/dist/index.css";

import YearPicker from "react-year-picker";

const purposes = [
  {
    purpose: "Financial Planning",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Retirement Planning",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Education Funding",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Insurance Planning",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Tax Planning",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Debt Restructuring",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Review existing plan",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Purchase a House",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Purchase a new vehicle",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Purchase a CommercialProperty",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Borrow money",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "Expand business",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
  {
    purpose: "",
    priority: "",
    targetfundRequired: "",
    year: "",
  },
];

const handleChange = function (date) {
  console.log(date);
};

const prioritiesCount = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

const initialValues = {
  purposes: purposes,
};

function FinancialGoalsForm(props) {
  const { next } = props;

  const [ErrorMessage, setErrorMessage] = useState(false);
  const [prioritiesList, filteredPrioritiesList] = useState(prioritiesCount);

  const onSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      const { purposes } = values;
      const validate = purposes.some((eachPurpose) => {
        if (eachPurpose.targetfundRequired !== "") {
          return true;
        }
      });

      if (validate === true) {
        console.log(values);
        next();

        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      } else {
        setErrorMessage(true);
      }
    }, 100);
  };

  const onChangeSelect = (event) => {
    const filteredData = prioritiesList.filter((priority) => {
      return priority !== parseInt(event.target.value);
    });
    filteredPrioritiesList(filteredData);
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <p className="tw-text-red-700">**Please fill Atleast one field</p>
        <div className="tw-w-full">
          <div className=" tw-flex tw-justify-between ">
            <h4 className="tw-w-2/5 tw-mr-4 tw-font-semibold tw-text-left">
              Purpose
            </h4>
            <h4 className="tw-w-1/5 tw-mr-4 tw-font-semibold tw-text-left">
              Priority*
            </h4>
            <h4 className="tw-w-1/5 tw-mr-4 tw-font-medium tw-text-left">
              Target fund Required
            </h4>
            <h4 className="tw-w-1/5  tw-font-semibold tw-text-left">Year</h4>
          </div>
          <FieldArray name="purposes">
            {(props) => {
              const { form } = props;
              const { values } = form;
              const { purposes } = values;

              return (
                <div className="tw-w-full">
                  {purposes.map((purpose, index) => {
                    let lastElementIndex = purposes.length - 1;
                    console.log(lastElementIndex, index);
                    if (index == lastElementIndex) {
                      console.log("hello");
                      return (
                        <div key={index} className="tw-w-full">
                          <p className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-w-full tw-text-left">
                            Specify others
                          </p>
                          <div className="tw-flex tw-justify-between">
                            <div className="tw-w-2/5 tw-mr-2 tw-text-left">
                              <Field
                                className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-1/2 tw-mt-2 tw-mb-2"
                                name={`purposes[${index}].purpose`}
                                type="number"
                                placeholder="Fund required"
                              />
                            </div>
                            <div className="tw-w-1/5 tw-text-left">
                              <Field
                                name={`purposes[${index}].priority`}
                                as="select"
                                onChange={onChangeSelect}
                                className="md:tw-ml-3 tw-bg-transparent tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4"
                              >
                                <option value=""></option>
                                {prioritiesList.map((value, index) => (
                                  <option key={index} value={value}>
                                    {value}
                                  </option>
                                ))}
                              </Field>
                            </div>
                            <div className="tw-w-1/5 tw-mr-2">
                              <Field
                                className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
                                name={`purposes[${index}].targetfundRequired`}
                                type="number"
                                placeholder="Fund required"
                              />
                            </div>

                            <div className="tw-w-1/5 tw-text-left">
                              <YearPicker onChange={handleChange}>
                                {
                                  <Field
                                    name={`purposes[${index}].year`}
                                    className="md:tw-ml-3 tw-bg-transparent tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4"
                                  ></Field>
                                }
                              </YearPicker>
                            </div>
                          </div>
                        </div>
                      );
                    } else {
                      return (
                        <div key={index} className="tw-flex tw-justify-between">
                          <p className="tw-font-bold tw-text-gray-800 tw-mt-3 tw-text-md tw-w-2/5 tw-text-left">
                            {purposes[index].purpose}
                          </p>
                          <div className="tw-w-1/5 tw-text-left">
                            <Field
                              name={`purposes[${index}].priority`}
                              as="select"
                              onChange={onChangeSelect}
                              className="md:tw-ml-3 tw-bg-transparent tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4"
                            >
                              <option value=""></option>
                              {prioritiesList.map((value, index) => (
                                <option key={index} value={value}>
                                  {value}
                                </option>
                              ))}
                            </Field>
                          </div>
                          <div className="tw-w-1/5 tw-mr-2">
                            <Field
                              className="tw-border-b-2 tw-outline-none tw-border-t-0 tw-border-l-0 tw-border-r-0 tw-border-solid tw-border-black tw-w-full tw-mt-2 tw-mb-2"
                              name={`purposes[${index}].targetfundRequired`}
                              type="number"
                              placeholder="Fund required"
                            />
                          </div>

                          <div className="tw-w-1/5 tw-text-left">
                            <YearPicker onChange={handleChange}>
                              {
                                <Field
                                  name={`purposes[${index}].year`}
                                  className="md:tw-ml-3 tw-bg-transparent tw-my-select tw-border-t-0 tw-border-l-0 tw-mb-0.5 tw-border-r-0 tw-border-solid tw-border-b-2 tw-outline-none  tw-border-black  tw-mt-2 tw-mb-4"
                                ></Field>
                              }
                            </YearPicker>
                          </div>
                        </div>
                      );
                    }
                  })}
                </div>
              );
            }}
          </FieldArray>
        </div>
        <p className="tw-text-black">
          * Please prioritise your goals with 1 as goal with highest priority
          and 12 as goal with lowest priority
        </p>
        <div className="popup-container tw-text-center">
          <Popup modal open={ErrorMessage}>
            {(close) => (
              <>
                <div className="tw-text-black tw-font-bold">
                  <p> Please give priority to atleast one financial goal</p>
                </div>
                <button
                  type="button"
                  className="tw-bg-nishyellow-400 tw-p-3 tw-w-1/10  tw-rounded-lg  "
                  onClick={() => {
                    setErrorMessage(false);
                    close();
                  }}
                >
                  Ok
                </button>
              </>
            )}
          </Popup>
        </div>
        <button
          className=" tw-bg-nishyellow-400 tw-p-3 tw-w-40 tw-rounded-lg tw-font-bold tw-mt-6"
          type="submit"
        >
          Save and Next
        </button>
      </Form>
    </Formik>
  );
}

export default FinancialGoalsForm;
