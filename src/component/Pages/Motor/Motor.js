import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Motor.css";

function motor() {
  function Input({ placeholder }) {
    console.log(placeholder);
    return (
      <div className="gapp">
        {placeholder.map((title) => {
          return (
            <input className="NIN1" key={title} placeholder={title}></input>
          );
        })}
        <div className="c">ontentM
          <h2 className="textM">Ownership</h2>
          <div className="checkbox1">
            <div class="check">
              <input
                className="radio2"
                type="checkbox"
                name="gender"
                value="A"
              />
              <label class="check-label" for="A">
                Leased
              </label>
            </div>
            <div class="check">
              <input
                className="radio2"
                type="checkbox"
                name="gender"
                value="B"
                checked
              />
              <label class="check-label" for="B">
                Owner
              </label>
            </div>
          </div>
        </div>
      </div>
    );
  }
  const placeholder = [
    "Male",
    "Brand",
    "Year ofv Manufacture",
    "Engine Number",
    "Chasis Number",
    "Color",
    "Registration Number",
    "Assign to PSO",
  ];
  return (
    <>
      <Navbar />
      <div className="container-p">
        <div className="box-p">
          <Input placeholder={placeholder} />
          <div className="buttons">
            <button type="button" class="btn btn-outline-secondary">
              Clear
            </button>
            <button type="button" class="btn btn-outline-success">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default motor;
