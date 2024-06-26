import React ,{useState} from "react";
import "./Signup.css";
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import GoogleIcon from "@mui/icons-material/Google";
import XIcon from "@mui/icons-material/X";
import AppleIcon from "@mui/icons-material/Apple";
import { toast } from 'react-toastify';


function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(email , password)
    
    try {
      const response = await axios.post('http://localhost:8085/Thoughts/login', {
        email,
        password
      });

      if (response.data.success) {
        toast.success('Login Successful!');

        navigate('/');
      } 
      else {
        toast.error('Login Failed. Please check your credentials.');
      }
    } 
    catch (error) {
      toast.error('An error occurred during login.');
      console.log('Login error:', error);
    }
    
  };
  return (
    <div className="outmost">
      <div className="outer">
        <div className="left">
          <h1>Thoughts</h1>
          <p>Welcome back</p>
          <Link to="/signup" className="linker">New to Thoughts?</Link>
        </div>
        <div className="right">
          <div className="rimain">
            <div className="head">
              <h2><pre>Login to your account</pre></h2>
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
              </div>
              <span className="forp">Forgot Password</span>
              <button type="submit" className="logn">Login</button>
            </form>
            <p className="or">or login with</p>

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
