import { useState } from "react";
import "./App.css";
import { LoginPage } from "./Components/Login/LoginPage";
import { LandingPage } from "./Components/Landing/LandingPage";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "./Components/Signup/SignupPage";

function App() {
  return (
    <>
      <Routes>
        <Route index element={<LandingPage />} />
        <Route path="SignupPage" element={<SignupPage />} />
        <Route path="LoginPage" element={<LoginPage />} />
      </Routes>
    </>
  );
}

export default App;
