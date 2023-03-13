import React from "react";
import {
  FaEnvelope,
  FaLock,
  FaIdBadge,
  FaIdCard,
} from "react-icons/fa";

function Signup() {
  return (
    <>
      <div className="login">
        <div className="container-signup">
          <div className="box-signup">
            <h1 className="signin">Forgot Password</h1>
            <div className="box-2">
              <div className="email">
                <span className="icon1">
                  <FaEnvelope />
                </span>
                <input
                  className="input"
                  type="text"
                  placeholder="Email Id"
                ></input>
              </div>
              <div className="email">
                <span className="icon1">
                  <FaIdCard />
                </span>
                <input
                  className="input"
                  type="text"
                  placeholder="UPF Identifier"
                ></input>
              </div>
              <div className="password">
                <span className="icon1">
                  <FaIdBadge />
                </span>
                <input className="input" type="text" placeholder="NIN"></input>
              </div>
              <div className="password">
                <span className="icon1">
                  <FaLock />
                </span>
                <input
                  className="input"
                  type="password"
                  placeholder="New Password"
                ></input>
              </div>
              <div className="password">
                <span className="icon1">
                  <FaLock />
                </span>
                <input
                  className="input"
                  type="password"
                  placeholder="Confirm Password"
                ></input>
              </div>
              <button type="submit" className="btn1">
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
