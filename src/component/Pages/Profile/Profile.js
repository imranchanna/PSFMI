import React from "react";
import "../Profile/Profile.css";

import ProfileImage from "../../../Assets/images/Profile.png";
import thumb from "../../../Assets/images/Thumb.png";
import Attach from "../../../Assets/images/Attach.png";
import Navbar from "../Navbar/Navbar";
import { useNavigate } from "react-router-dom";
function Profile() {
  const navigate = useNavigate("");
  function Books({ name, name1, name2 }) {
    console.log(name);
    return (
      <div className="content-p">
        <div className="context-p3">
          <h2 className="text1">
            {name}
            {name1}
            {name2}
          </h2>
          <div class="form-check">
            <label class="form-check-label" for="yes">
              Yes
            </label>
            <input className="radio" type="radio" name="gender" value="M" />
          </div>
          <div class="form-check">
            <label class="form-check-label" for="no">
              No
            </label>
            <input
              className="radio"
              type="radio"
              name="gender"
              value="F"
              checked
            />
          </div>
        </div>
      </div>
    );
  }
  function Select({ text }) {
    console.log(text);
    if (text === text1)
      return (
        <select
          onChange={handleChange}
          className="NIN1 text-secondary"
          name="fruits"
          id="fruit-select"
        >
          {text1.map((option, title) => {
            return (
              <option class="text-light" key={title} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      );
    if (text === text2)
      return (
        <select
          onChange={handleChange}
          className="NIN1 text-secondary"
          name="fruits"
          id="fruit-select"
        >
          {text2.map((option, title) => {
            return (
              <option class="text-light" key={title} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      );
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
    if (text === text4)
      return (
        <select
          onChange={handleChange}
          className="NIN1 text-secondary"
          name="fruits"
          id="fruit-select"
        >
          {text4.map((option, title) => {
            return (
              <option class="text-light" key={title} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      );
    if (text === text5)
      return (
        <select
          onChange={handleChange}
          className="NIN1 text-secondary"
          name="fruits"
          id="fruit-select"
        >
          {text5.map((option, title) => {
            return (
              <option class="text-light" key={title} value={option.value}>
                {option.text}
              </option>
            );
          })}
        </select>
      );
  }
  const handleChange = (event) => {
    console.log(event.target.value);
  };

  const text1 = [
    { value: "Director", text: "Director" },
    { value: "Shareholder", text: "Shareholder" },
    { value: "Civilian", text: "Civilian " },
    { value: "Unarmed Guard", text: "Unarmed Guard" },
    { value: "Armed Guard", text: "Armed Guard" },
    { value: "Closed Protection Officer", text: "Closed Protection Officer" },
    { value: "Unarmed Guard", text: "Unarmed Guard" },
    { value: "Private Investigator", text: "Private Investigator" },
  ];
  const text2 = [
    { value: "Assign to PSO", text: "Assign to PSO" },
    { value: "Hues of Blues", text: "Hues of Blues" },
    { value: "Green Team", text: "Green Team " },
    { value: "Blessed Rest", text: "Blessed Rest" },
    { value: "THe Home Dome", text: "THe Home Dome" },
    { value: "Peak Performance", text: "Peak Performance" },
  ];
  const text3 = [
    { value: "Status", text: "Status" },
    { value: "cleared", text: "cleared" },
    { value: "pending clearence", text: "pending clearence " },
    { value: "unassigned", text: "unassigned" },
    { value: "under investigation", text: "under investigation" },
    { value: "dismissed", text: "dismissed" },
    { value: "Deceased", text: "Deceased" },
    { value: "voluntarily left", text: "voluntarily left" },
  ];
  const text4 = [
    { value: "Gender", text: "Gender" },
    { value: "Male", text: "Male" },
    { value: "Female", text: "Female " },
  ];
  const text5 = [
    { value: "UCE", text: "UCE" },
    { value: "UACE", text: "UACE" },
    { value: "DIPLOMA", text: "DIPLOMA " },
    { value: "DEGREE", text: "DEGREE" },
    { value: "MASTERS", text: "MASTERS" },
    { value: "PHD", text: "PHD" },
  ];
  function Input({ placeholder, placeholder1 }) {
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
    if (placeholder === placeholder3)
      return (
        <div className="gapp">
          {placeholder3.map((title) => {
            return (
              <input className="NIN1" key={title} placeholder={title}></input>
            );
          })}
        </div>
      );
  }
  const placeholder = [
    "First Name",
    "Other Name",
    "Surname",
    "Tel",
    "Current Place of Residence(Spouse)",
  ];
  const placeholder1 = ["First Name", "Other Name", "Surname", "Tel"];
  const placeholder2 = [
    "First Name",
    "Other Name",
    "Surname",
    "Tel",
    "Date of Birth",
    "Gender",
  ];
  const placeholder3 = [
    "First Name",
    "Other Name",
    "Surname",
    "Next of Kin",
    "Relationship",
    "Place of Residence",
  ];
  const name = ["Marital status"];
  const name1 = ["Father Alive"];
  const name2 = ["Mother Alive"];
  return (
    <>
      <Navbar />
      <div className="container-p">
        <div className="box-p">
          <div className="context-p">
            <div className="content-p">
              <div className="context-p2">
              <div className="Do">
                <h2 className="textp">Do you have NIN</h2>
                </div>
                <div class="form-check">
                  <label class="form-check-label" for="yes">
                    Yes
                  </label>
                  <input
                    className="radio1"
                    type="radio"
                    name="gender"
                    value="M"
                  />
                  <label class="form-check-label" for="no">
                    No
                  </label>
                  <input
                    className="radio1"
                    type="radio"
                    name="gender"
                    value="F"
                    checked
                  />
                </div>

                <input type="text" className="NIN" placeholder="Enter NIN" />
               
              </div>
              <div className="imgg">
              <img className="thumb" src={thumb} alt="pokemon"></img>
              </div>
            </div>
            <img className="ProfileImage" src={ProfileImage} alt="pokemon"></img>
          </div>
          <p className="text22">
            (This is to be verified in real time against the National Identity
            Card database – incase someone lost their National ID, we should be
            able to use their thumbprint for the verification)
          </p>
          <div className="form">
            <Select text={text1} />
            <Select text={text2} />
            <Select text={text3} />
            <input type="text" className="NIN1" placeholder="First Name" />
            <input type="text" className="NIN1" placeholder="Surname" />
            <input
              type="text"
              className="NIN1"
              placeholder="Other Name(Optional)"
            />
            <input type="text" className="NIN1" placeholder="Tel" />
            <input type="date" className="NIN1" placeholder="Date of birth" />
            <Select text={text4} />
            <input type="text" className="NIN1" placeholder="Tribe" />
            <input type="text" className="NIN1" placeholder="Nationality" />
            <input type="text" className="NIN1" placeholder="Village" />
            <input type="text" className="NIN1" placeholder="Sub Country" />
            <input type="text" className="NIN1" placeholder="District" />
            <Select text={text5} />
          </div>
          <div className="context-3">
            <h2 className="text1">Previous Employment</h2>
            <div className="form-2">
              <input type="text" className="NIN1" placeholder="Employer" />
              <input
                type="text"
                className="NIN1"
                placeholder="Place of Employment"
              />
              <div className="date">
                <input type="date" className="date1" placeholder="Category" />
                <input type="date" className="date1" placeholder="Category" />
              </div>
            </div>
          </div>
          <div className="context4">
            <Books name={name} />
            <Input placeholder={placeholder} />
          </div>
          <div className="context4">
            <Books name={name1} />
            <Input placeholder={placeholder1} />
          </div>
          
            <Books name={name2} />
            <div className="context-3">
            <h2 className="text1">Children's Details</h2>
            <Input placeholder={placeholder2} />
          </div>
          <div className="context-3">
            <h2 className="text1">Next of Kin(NOK)</h2>
            <Input placeholder={placeholder3} />
          </div>
          <div className="context-3">
            <h2 className="text1">Refrees(At least two)</h2>
            <div className="form-3">
              <input type="text" className="NIN1" placeholder="NIN" />
              <input type="text" className="NIN1" placeholder="First Name" />
              <input type="text" className="NIN1" placeholder="Surname" />
              <input type="text" className="NIN1" placeholder="Telephone" />
              <div className="file">
                <p className="para2">
                  Attach scanned copies of reference letters
                </p>
                <img className="Attach" src={Attach} alt="pokemon"></img>
              </div>
            </div>
          </div>
          <div className="context5">
            <h1>Disclamer</h1>
            <p>
              I<input className="NIN1"></input>
              hereby declare that the information given above is true to the
              best of my knowledge. And pledge to face any legal action should
              the above be proven contrary.
            </p>
            <div className="Signature">
              <h2>Signature/thumb print</h2>
              <img src={thumb} alt="pokemon"></img>
            </div>
          </div>
          <div className="buttons">
            <button type="button" class="btn btn-outline-secondary">
              Clear
            </button>
            <button  onClick={() => navigate("/Company")} type="button" class="btn btn-outline-success">
              Save
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
