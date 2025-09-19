import React from "react";
import "./Error.css";
import { useNavigate } from "react-router-dom";

const ErrorPage = () => {
  const navigate = useNavigate();
  return (
    <div
      className="body"
      style={{
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
        paddingTop: "40px",
      }}
    >
      <div
        style={{
          background: "#ffeaea",
          padding: "40px",
          borderRadius: "16px",
          boxShadow: "0 2px 12px rgba(211,47,47,0.09)",
          minWidth: "400px",
          textAlign: "center",
          maxWidth: "500px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ color: "#d32f2f", marginBottom: "18px" }}>
          404 - Page Not Found
        </h1>
        <p style={{ marginBottom: "18px" }}>
          The page you are looking for does not exist.
        </p>
        <button
          onClick={() => navigate(-1)}
          style={{
            padding: "10px 24px",
            borderRadius: "6px",
            border: "none",
            background: "#d32f2f",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            marginBottom: "10px",
            boxShadow: "0 1px 4px rgba(211,47,47,0.08)",
          }}
        >
          Go Back
        </button>
        <br />
        <button
          onClick={() => navigate("/")}
          style={{
            padding: "8px 20px",
            borderRadius: "6px",
            border: "none",
            background: "#007bff",
            color: "white",
            cursor: "pointer",
            fontWeight: "bold",
            marginTop: "8px",
            boxShadow: "0 1px 4px rgba(0,123,255,0.08)",
          }}
        >
          Home Page
        </button>
      </div>
    </div>
  );
};

export default ErrorPage;
