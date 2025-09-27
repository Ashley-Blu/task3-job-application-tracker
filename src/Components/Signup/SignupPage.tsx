import React from "react";
import "./Signup.css";
import sign from "../../assets/signup.png";
import { useNavigate, Link } from "react-router-dom";
import { saveUser, getUserByEmail } from "../../utils/localStorage";
import toast, { Toaster } from "react-hot-toast";

export const SignupPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = React.useState({
    email: "",
    username: "",
    password: "",
  });
  const [loading, setLoading] = React.useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSignup = () => {
    setLoading(true);

    setTimeout(() => {
      if (!formData.email || !formData.username || !formData.password) {
        toast.error("⚠️ Please fill in all fields");
        setLoading(false);
        return;
      }

      if (formData.password.length < 6) {
        toast.error("🔑 Password must be at least 6 characters");
        setLoading(false);
        return;
      }

      if (getUserByEmail(formData.email)) {
        toast.error("📧 User with this email already exists");
        setLoading(false);
        return;
      }

      saveUser(formData);
      toast.success("🎉 Signup successful! Redirecting...");

      setLoading(false);
      setTimeout(() => navigate("/LoginPage"), 1500);
    }, 1000);
  };

  return (
    <>
      {/* Global Toaster (top-level) */}
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            border: "1px solid #333",
            padding: "12px",
            color: "#fff",
            background: "#ef6960",
          },
        }}
      />

      <div className="signup-wrapper">
        <div className="left-side">
          <h1>Sign Up</h1>
          <p>
            Already have an account?{" "}
            <Link to="/LoginPage">
              <span className="login-option">Sign In</span>
            </Link>
          </p>

          <form>
            <label>Email:</label>
            <input
              name="email"
              type="email"
              placeholder="Enter your email..."
              value={formData.email}
              onChange={handleInputChange}
            />
            <label>Username:</label>
            <input
              name="username"
              type="text"
              placeholder="Enter your username..."
              value={formData.username}
              onChange={handleInputChange}
            />
            <label>Password:</label>
            <input
              name="password"
              type="password"
              placeholder="Enter your password..."
              value={formData.password}
              onChange={handleInputChange}
            />
          </form>

          {loading && <p style={{ color: "#ef6960" }}>Signing up...</p>}

          <button onClick={handleSignup} style={{ color: "white" }}>
            Sign Up
          </button>
        </div>

        <div className="right-side">
          <img src={sign} alt="" className="image" />
        </div>
      </div>
    </>
  );
};

export default SignupPage;
