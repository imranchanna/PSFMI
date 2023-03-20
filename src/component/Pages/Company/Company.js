import React from "react";
import "./Company.css";


import Attach from "../../../Assets/images/Attach.png";
import Table from "../../../Assets/images/Table.png";
import Navbar from "../Navbar/Navbar";
function Company() {
  function Select({ text }) {
    console.log(text);
    if (text === text3)
      return (
        <select
          onChange={handleChange}
          className="NIN1 text-secondary"
          name="fruits"
          id="fruit-select"
        >
          {text3.map((option, title) => {
            return (
              <option class="text-light" key={title} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      );
  }
  function Input({ placeholder }) {
    console.log(placeholder);
    if (placeholder === placeholder)
      return (
        <div className="gapp">
          {placeholder.map((title) => {
            return (
              <input className="NIN1" key={title} placeholder={title}></input>
            );
          })}
        </div>
      );
    if (placeholder === placeholder1)
      return (
        <div className="gapp">
          {placeholder1.map((title) => {
            return (
              <input className="NIN1" key={title} placeholder={title}></input>
            );
          })}
        </div>
      );
    if (placeholder === placeholder2)
      return (
        <div className="gapp">
          {placeholder2.map((title) => {
            return (
              <input className="NIN1" key={title} placeholder={title}></input>
            );
          })}
        </div>
      );
  }
  const placeholder = [
    "Company Name",
    "Company TIN",
    "Incorporation Certificate Number",
  ];
  const placeholder1 = [
    "LC1",
    "Subcounty",
    "District",
    "PLot Number",
    "Street",
  ];
  const placeholder2 = ["Name", "Position", "Telephone", "Email"];
  const text3 = [
    { value: "Status", text: "Status" },
    { value: "Licensed", text: "Licensed" },
    { value: "Pending", text: "Pending " },
    { value: "Blacklisted", text: "Blacklisted" },
    { value: "Un-liscensed", text: "Un-liscensed" },
    { value: "De-registered", text: "De-registered" },
  ];

  const handleChange = (event) => {
    console.log(event.target.value);
  };

  return (
    <>
      <Navbar />
      <div className="container-p">
        <div className="box-p">
          <div className="forms3">
            <Input placeholder={placeholder} />
            <div className="select">
              <Select text={text3} />
              <button className="button1"  data-bs-toggle="modal"
            data-bs-target="#exampleModal">Assign Shareholders/Directors</button>
            </div>
            <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-xl modal-dialog-centered">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-body">
                <img className="Table" src={Table} alt="pokemon"></img>
              </div>
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
        </div>
            <div className="ContentC2">
              <h2 className="textC2">License Category</h2>
              <div className="checkbox">
                <div class="check">
                  <input
                    className="radio2"
                    type="checkbox"
                    name="gender"
                    value="A"
                  />
                  <label class="check-label" for="A">
                    A
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
                    B
                  </label>
                </div>
                <div class="check">
                  <input
                    className="radio2"
                    type="checkbox"
                    name="gender"
                    value="C"
                  />
                  <label class="check-label" for="C">
                    C
                  </label>
                </div>
                <div class="check">
                  <input
                    className="radio2"
                    type="checkbox"
                    name="gender"
                    value="D"
                  />
                  <label class="check-label" for="C">
                    D
                  </label>
                </div>
                <div class="check">
                  <input
                    className="radio2"
                    type="checkbox"
                    name="gender"
                    value="E"
                  />
                  <label class="check-label" for="D">
                    E
                  </label>
                </div>
              </div>
            </div>
          </div>
          <div className="contentC2">
            <h2 className="textC2">Address of Head office</h2>
            <Input placeholder={placeholder1} />
          </div>
          <div className="contentC2">
            <h2 className="textC2">Address of Branch office</h2>
            <Input placeholder={placeholder1} />
          </div>
          <div className="contentC3">
            <h2 className="textC2">Primary Contact Person</h2>
            <Input placeholder={placeholder2} />
            <h2 className="textC2">Secondary Contact Person</h2>
            <Input placeholder={placeholder2} />
          </div>
          <div className="contentC4">
            <h2 className="textC1">Attachments</h2>
            <div className="contextC2">
              <p>1. Certificate of Incorporation</p>
              <img className="Attach" src={Attach} alt="pokemon"></img>
            </div>
            <div className="contextC2">
              <p>2. VAT Registration Certificate</p>
              <img className="Attach" src={Attach} alt="pokemon"></img>
            </div>
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
      </div>
    </>
  );
}
export default Company;
