import React from "react";
import Navbar from "./Navbar";

function Incident() {
  function Textarea({ placeholder }) {
    console.log(placeholder);
    if (placeholder === placeholder2)
      return (
        <div className="contentF2">
          <textarea className="NIN2" placeholder={placeholder2}></textarea>
        </div>
      );
    if (placeholder === placeholder3)
      return (
        <div className="contentF2">
          <textarea className="NIN2" placeholder={placeholder3}></textarea>
        </div>
      );
  }
  function Input({ placeholder }) {
    console.log(placeholder);
    return (
      <div className="gapp">
        {placeholder1.map((title) => {
          return (
            <input className="NIN1" key={title} placeholder={title}></input>
          );
        })}
      </div>
    );
  }
  const placeholder1 = [
    "Date Incident occurred",
    "Place of incident",
    "Reported by name",
    "Reported tel contact",
    "Police reference number ",
  ];
  const placeholder2 = ["Suspects (add names & or descriptions)"];
  const placeholder3 = [
    "Details of whoever is updating the record and the comments",
  ];
  return (
    <>
      <Navbar />
      <div className="container-p">
        <div className="box-p">
          <Input placeholder={placeholder1} />
          <Textarea placeholder={placeholder2} />
          <h2 className="text">Case Details</h2>
          <div className="contentF2">
            <input type="date" className="NIN1" placeholder="Date of birth" />
          </div>
          <Textarea placeholder={placeholder3} />
          <div className="contentF2">
            <select className="NIN1 text-secondary" name="pets" id="pet-select">
              <option class="text-secondary" value="Status">
                Status
              </option>
              <option class="text-secondary" value="dog">
                Dog
              </option>
              <option class="text-secondary" value="cat">
                Cat
              </option>
              <option class="text-secondary" value="hamster">
                Hamster
              </option>
            </select>
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
    </>
  );
}

export default Incident;
