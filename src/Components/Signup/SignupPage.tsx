import React from "react"; import "./Signup.css"; import sign from "../../assets/signup.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const SignupPage = () => {

const navigate = useNavigate();

  return (
    <>
      <div className="signup-wrapper">
        <div className="left-side">
            <h1>Sign Up</h1>
            <p>Already have an account? <Link to="/LoginPage"><span className="login-option">Login</span></Link></p>
            <form>
                <label htmlFor="email">Email:</label>
                <input type="email" placeholder="Enter your email here..."/>
                <label htmlFor="username">Username:</label>
                <input type="text" placeholder="Enter your username here..."/>
                <label htmlFor="password">Password:</label>
                <input type="password" placeholder="Enter your password here..."/>
            </form>
            
            <button onClick={() => {
              navigate("/LoginPage")
            }}>
              Signup</button>
        </div>
        <div className="right-side">
          <img src={sign} alt="" className="image" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
