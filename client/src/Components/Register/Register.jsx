import React, { useState } from "react";
import "./Register.css";
import video from "../Assets/Login/lamp.mp4";
import logo from "../Assets/Login/wow-logo.png";
import { Link } from "react-router-dom";
import { FaUserShield } from "react-icons/fa";
import { MdMarkEmailRead } from "react-icons/md";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import axios from "axios";

function Register() {
  const [email, setEmail] = useState("");
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const createUser = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/register",
        {
          email: email, // Use lowercase "email"
          username: userName, // Use lowercase "username"
          password: password, // Use lowercase "password"
        },
        {
          timeout: 10000, // Set the timeout to 10 seconds (adjust as needed)
        }
      );
      console.log("User added");
    } catch (error) {
      console.error("Axios error:", error);
      console.error("Error stack:", error.stack);
      console.error("Error code:", error.code);
    }
  };

  return (
    <div className="registerPage flex">
      <div className="container flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create and Sell Extraordinary Products</h2>
            {/* <p>Adopt new technologies!</p> */}
          </div>
          <div className="footerDiv flex">
            <span className="text">Have an account?</span>
            <Link to={"/"}>
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="Logo Image" />
            <h3>Let Us Know You!</h3>
          </div>
          <form action="" className="form grid">
            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdMarkEmailRead className="icon" />
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  onChange={(event) => {
                    setEmail(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  placeholder="Enter Username"
                  onChange={(event) => {
                    setUserName(event.target.value);
                  }}
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  placeholder="Enter Password"
                  onChange={(event) => {
                    setPassword(event.target.value);
                  }}
                />
              </div>
            </div>

            <button type="submit" className="btn flex" onClick={createUser}>
              <span>Register</span>
              <AiOutlineSwapRight className="icon" />
            </button>

            <span className="forgotPassword">
              Forgot your password? <a href="">Click Here</a>
            </span>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Register;
