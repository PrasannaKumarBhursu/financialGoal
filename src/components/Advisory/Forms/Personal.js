import React from "react";
// import "./index.css";

const addressDetailsList = [
  { id: "city",value:"City" },
  { id: "state",value:"State" },
  { id: "country",value:"Country" },
  { id: "pin",value:"Pin" },
  { id: "landmark",value:"Landmark" },
];

const nameFeilds = [
  { id: "firstname", value: "FirstName" },
  { id: "lastname", value: "LastName" },
];

const extraDetails = [
  { id: "citizenship", value: "Citizenship" },
  { id: "education", value: "Education (Highest)" },
];

const gender=[
  {id:"male",value:"Male"},
  {id:"female",value:"Female"},
  {id:"others",value:"others"},
]

export default function Personal() {

  const addressDetails = (props) => {
    return (
      <div
        key={props.id}
        className=" col-md-6 col-lg-4 mt-3  d-flex flex-column align-items-start"
      >
        <label htmlFor={props.id}>{props.value}</label>
        <input type="text" id={props.id} className="form-control w-100" />
      </div>
    );
  };

  const basicDetails = (props) => {
    return (
      <div
        key={props.id}
        className=" col-lg-6 mt-3 d-flex flex-column align-items-start"
      >
        <label htmlFor={props.id}>{props.value}</label>
        <input type="text" id={props.id} className="form-control w-100" />
      </div>
    );
  };


const genderDetails = (props) => {
  return (
    <div className="form-check form-check-inline">
      <input
        className="form-check-input"
        type="radio"
        name="inlineRadioOptions"
        id={props.id}
        value={props.value}
      />
      <label className="form-check-label" htmlFor={props.id}>
        {props.value}
      </label>
    </div>
  );
};

  return (
    <>
      {/* using bootstarp */}
      <div className="container">
        <h3 className="text-start text-secondary">PersonalDetailsForm</h3>
        <form className="row">
          {nameFeilds.map((eachDetail) => basicDetails(eachDetail))}
          <div className="form-group col-12 col-lg-4 mt-3 d-flex flex-column align-items-start">
            <p>Gender</p>
            <div className="p-2">
              {gender.map(eachGender=>(genderDetails(eachGender)))}
            </div>
          </div>
          <div className=" col-12 col-lg-4 mt-3 d-flex flex-column align-items-start">
            <label htmlFor="date">Date of Birth</label>
            <input type="date" id="date" className="form-control w-100" />
          </div>
          <div className=" form-group col-md-4 mt-3 d-flex flex-column align-items-start">
            <label htmlFor="maritalstatus">Marital status</label>
            <select id="maritalstatus" className="form-control">
              <option selected>Married</option>
              <option>Unmarried</option>
              
            </select>
          </div>
          {extraDetails.map((eachDetail) => basicDetails(eachDetail))}
          <div className="container">
            <div className="row  ">
              <h6 className="text-start text-dark mt-3">
                Address: (commication)
              </h6>
              {addressDetailsList.map((eachType) => addressDetails(eachType))}
            </div>
          </div>
          <div className="container">
            <div className="row  ">
              <h6 className="text-start text-dark mt-3">
                Address: (permanent)
              </h6>
              {addressDetailsList.map((eachType) => addressDetails(eachType))}
            </div>
          </div>
        </form>
      </div>
    </>
  );
}
