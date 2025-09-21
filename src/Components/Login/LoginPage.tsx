import React from "react";
import "./Login.css";
import image from "../../assets/signup.png";
import { useNavigate } from "react-router-dom";
import { getUsers, setActiveUser } from "../../utils/localStorage";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    username: "",
    password: "",
  });
  const [error, setError] = React.useState("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleLogin = () => {
    setError("");
    if (!formData.username || !formData.password) {
      setError("Please fill in all fields");
      return;
    }
    const users = getUsers();
    console.log("Users in localStorage:", users);
    const user = users.find(
      (u: any) =>
        u.username === formData.username && u.password === formData.password
    );
    if (!user) {
      setError("Invalid username or password");
      return;
    }
    setActiveUser(user);
    navigate("/HomePage");
  };

  return (
    <>
      <div className="signin-wrapper">
        <div className="sign-side">
          <h1>Log  In</h1>
          <p>Don't have a account? <Link to="/SignupPage"><span className="login-option">Create an accout</span></Link></p>
          <form>
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
          {error && (
            <>
              <p style={{ color: "red" }}>{error}</p>
            </>
          )}
          <button onClick={handleLogin}>Login</button>
        </div>
        <div className="image-side">
          <img src={image} alt="" className="image" />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
