import React from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";


function Signup() {
  return (
    <div className="outmost">
      <div className="outer">
        <div className="left">
          <h1>Hello!</h1>
          <p>Welcome  to thoughts</p>
          <Link to="/login"  className="linker" >Already have an account?</Link>
        </div>
        <div className="right">
          <div className="rimain">
            <div className="head">
              <h2><pre>      Create new account</pre></h2>
              <span className="line"></span>
            </div>
            <div className="inpts">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
              <input type="password" placeholder="Confirm-Password" />
            </div>
            <button className="logn">Sign-Up</button>
            <p className="or"> or</p>

            <div className="btns">
              <div className="gog">
                <i>
                  <GoogleIcon />
                </i>
              </div>
              <div className="gog">
                <i>
                  <XIcon />
                </i>
              </div>
              <div className="gog">
                <i>
                  <AppleIcon />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
