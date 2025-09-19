import React from "react";
import "./Signup.css";
import sign from "../../assets/signup.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { saveUser, getUserByEmail } from "../../utils/localStorage";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    setError("");
    if (!formData.email || !formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }
    // Save user to localStorage
    if (getUserByEmail(formData.email)) {
      setError("User with this email already exists");
      return;
    }
    saveUser(formData);
    navigate("/LoginPage");
  };

  return (
    <>
      <div className="signup-wrapper">
        <div className="left-side">
          <h1>Sign Up</h1>
          <p>
            Already have an account?{" "}
            <Link to="/LoginPage">
              <span className="login-option">Login</span>
            </Link>
          </p>
          <form>
            <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email here..."
              value={formData.email}
              onChange={handleInputChange}
            />
            <label htmlFor="username">Username:</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username here..."
              value={formData.username}
              onChange={handleInputChange}
            />
            <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password here..."
              value={formData.password}
              onChange={handleInputChange}
            />
          </form>
          {error && <p style={{ color: "red" }}>{error}</p>}
          <button onClick={handleSignup}>Signup</button>
        </div>
        <div className="right-side">
          <img src={sign} alt="" className="image" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
