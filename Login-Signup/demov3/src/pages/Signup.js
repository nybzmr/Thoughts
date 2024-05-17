import React, { useState } from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";
// import axios from 'axios';

function Signup() {
  // State variables to store email, password, and confirm password
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email , password , confirmPassword)
    // Check if password and confirm password match
    // if (password !== confirmPassword) {
    //   alert("Passwords do not match");
    //   return;
    // }

    // try {
      // Make an HTTP POST request to your backend API
    //   const response = await axios.post('your-backend-url/signup', {
    //     email,
    //     password
    //   });

      // Handle response from the server, like showing a success message or redirecting
    //   console.log(response.data);
    // } catch (error) {
      // Handle error, like showing an error message to the user
    //   console.error('Error:', error);
    // }
  };

  return (
    <div className="outmost">
      <div className="outer">
        <div className="left">
          <h1>Hello!</h1>
          <p>Welcome to Thoughts</p>
          <Link to="/login" className="linker">Already have an account?</Link>
        </div>
        <div className="right">
          <div className="rimain">
            <div className="head">
              <h2><pre>Create new account</pre></h2>
              <span className="line"></span>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="inpts">
                <input
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <input
                  type="password"
                  placeholder="Confirm-Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <button className="logn" type="submit">Sign-Up</button>
            </form>
            <p className="or"> or use</p>
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