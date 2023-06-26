import React, { useState } from "react";
import "./css/form.css";
import HeroBanner from "./HeroBanner";

export default function AddInfo() {
  const [inputs, setInputs] = useState({});
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log(inputs);
  };
  return (
    <>
      <HeroBanner />
      <div className="form-container">
        <form className="register-form form-style-10" onSubmit={handleSubmit}>
          <h1>Register</h1>
          <div className="section">
            <span>1</span>Personal Info
          </div>
          <div className="inner-wrap">
            <label>
              Name
              <input
                type="text"
                name="name"
                className="form-field"
                placeholder="Abhishek Goyal"
                value={inputs.name || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Address
              <input
                type="text"
                name="address"
                className="form-field"
                placeholder="Nai abadi street no 6"
                value={inputs.address || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              City
              <input
                type="text"
                name="city"
                className="form-field"
                placeholder="Abohar, Punjab, India"
                value={inputs.city || ""}
                onChange={handleChange}
              />
            </label>

            <label>
              Email *
              <input
                type="email"
                name="email"
                className="form-field"
                placeholder="xyz@hmail.com"
                value={inputs.email || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Phone Number
              <input
                type="text"
                name="phone_no"
                className="form-field"
                placeholder="905*****55"
                value={inputs.phone_no || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              About Yourself
              <input
                type="text"
                style={{ height: "80px" }}
                name="about"
                className="form-field"
                placeholder="Hello my name is ...."
                value={inputs.about || ""}
                onChange={handleChange}
              />
            </label>
          </div>

          <div className="section">
            <span>2</span>University Info
          </div>
          <div className="inner-wrap">
            <label>
              Roll No *
              <input
                type="text"
                name="roll_no"
                className="form-field"
                placeholder="UE208007"
                value={inputs.roll_no || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Branch
              <input
                type="text"
                name="branch"
                className="form-field"
                placeholder="Information Technology"
                value={inputs.branch || ""}
                onChange={handleChange}
              />
            </label>
            <label>
              Verification Data *
              <input
                type="text"
                name="ver_data"
                className="form-field"
                placeholder="DX******2R"
                value={inputs.ver_data || ""}
                onChange={handleChange}
              />
            </label>
          </div>
          <div className="button-section">
            <button
              className="waves-effect waves-light btn center-align white-text text-darken-2 card-panel indigo darken-4  z-depth-1"
              style={{ backgroundColor: "#036089", color: "white" }}
              onClick={(event) => {
                handleSubmit(event);
              }}
            >
              Register
            </button>
            <span className="privacy-policy">
              You agree to our Terms and Policy.
            </span>
          </div>
        </form>
      </div>
    </>
  );
}
