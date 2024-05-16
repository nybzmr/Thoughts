import React from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";

function Login() {
  return (
    <div className="outmost">
      <div className="outer">
        <div className="left">
          <h1>Hello!</h1>
          <p>Welcome back to Thoughts</p>
          <Link to="/signup" className="linker">No account?</Link>
        </div>
        <div className="right">
          <div className="rimain">
            <div className="head">
              <h2><pre>    Login to your account</pre></h2>
              <span className="line"></span>
            </div>
            <div className="inpts">
              <input type="email" placeholder="Email" />
              <input type="password" placeholder="Password" />
            </div>
            <span className="forp">Forgot Password?</span>
            <button className="logn">Login</button>
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

export default Login;
