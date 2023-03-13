import React from "react";
import frame1 from "./images/Frame1.png"
import frame2 from "./images/Frame2.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";
import { FaEnvelope, FaLock, FaEye } from "react-icons/fa";
function Login() {
  const navigate = useNavigate("");
  return (
    <>
      <div className="login">
        <img className="frame1" src={frame1} alt="pokemon"></img>
        <div className="container">
          <p className="para">
            Private Security and Firearms Management Information System
          </p>
          <div className="box">
            <h1 className="signin">Sign In</h1>
            <div className="box-2">
              <div className="email">
                <span className="icon1">
                  <FaEnvelope />
                </span>
                <input
                  className="input"
                  type="email"
                  placeholder="Enter Address"
                ></input>
              </div>
              <div className="password">
                <span className="icon1">
                  <FaLock />
                </span>
                <input
                  className="input"
                  type="password"
                  placeholder="Password"
                ></input>
                <span className="icon1">
                  <FaEye />
                </span>
              </div>
              <button
                onClick={() => navigate("/personalprofile")}
                type="submit"
                className="btn1"
              >
                Sign In
              </button>
              <div class="text-center">
                <p>
                  Reset Password |{" "}
                  <a onClick={() => navigate("/Forget Password")} href="#">
                    Forgot Password
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
        <img className="frame2" src={frame2} alt="pokemon"></img>
      </div>
    </>
  );
}

export default Login;
