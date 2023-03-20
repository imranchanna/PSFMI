import React from "react";
import Navbar from "../Navbar/Navbar";
import "./Registration.css";
import Document from "../../../Assets/images/Document.png";
import Download from "../../../Assets/images/Download.png";
import Share from "../../../Assets/images/Share.png";
import Magnify from "../../../Assets/images/Magnify.png";

function Registration() {
  function Input({ placeholder }) {
    console.log(placeholder);
    return (
      <>
        <div className="form-reg">
          {placeholder1.map((title) => {
            return (
              <input className="NIN1" key={title} placeholder={title}></input>
            );
          })}
          <div
            className="imgR"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
          >
            <img className="Magnify" src={Magnify} alt="pokemon"></img>
            <div className="textR">
              <div className="font1">Click here to view</div>
              <div> Preview</div>
            </div>
          </div>
        </div>
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog">
            <div class="modal-content">
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
              <div class="modal-body">
                <img src={Document} alt="pokemon"></img>
              </div>
              <div class="footer">
                <img src={Download} alt="pokemon"></img>
                <img src={Share} alt="pokemon"></img>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
  const placeholder1 = ["Name", "NIN", "Pin"];

  return (
    <>
      <Navbar />
      <div className="container-p">
        <div className="box-pR">
          <Input placeholder={placeholder1} />
        </div>
      </div>
    </>
  );
}

export default Registration;
