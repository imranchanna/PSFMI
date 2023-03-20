import React from "react";
import { useNavigate } from "react-router-dom";
import {
  FaEnvelope,
  FaLock,
  FaIdBadge,
  FaPhoneAlt,
  FaIdCard,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { BsPersonFill } from "react-icons/bs";
import "./Signup.css";
function Signup() {
  const navigate = useNavigate("");
  return (
    <>
      <div className="login">
        <div className="container-signup">
          <div className="box-signup">
            <h1 className="signin">Sign Up</h1>
            <div className="box-2">
              <div className="email">
                <span className="icon1">
                  <FaIdBadge />
                </span>
                <input
                  className="input"
                  type="text"
                  placeholder="Full Name"
                ></input>
              </div>
              <div className="password">
                <span className="icon1">
                  <GoLocation />
                </span>
                <input
                  className="input"
                  type="text"
                  placeholder="Address"
                ></input>
              </div>
              <div className="email">
                <span className="icon1">
                  <FaPhoneAlt />
                </span>
                <input
                  className="input"
                  type="text"
                  placeholder="Contact Number"
                ></input>
              </div>
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
              <div className="email">
                <span className="icon1">
                  <BsPersonFill />
                </span>
                <select
                  className="input text-secondary"
                  name="pets"
                  id="pet-select"
                >
                  <option class="text-secondary" value="">
                    Role
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
                  <option class="text-secondary" value="parrot">
                    Parrot
                  </option>
                  <option class="text-secondary" value="spider">
                    Spider
                  </option>
                  <option class="text-secondary" value="goldfish">
                    Goldfish
                  </option>
                </select>
              </div>
              <div className="password">
                <span className="icon1">
                  <FaLock />
                </span>
                <input
                  className="input"
                  type="password"
                  placeholder="NIN"
                ></input>
              </div>
              <div className="password">
                <span className="icon1">
                  <FaIdCard />
                </span>
                <input
                  className="input"
                  type="text"
                  placeholder="Default Password"
                ></input>
              </div>
              <button  onClick={() => navigate("/login")}
              type="submit" className="btn1">
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Signup;
