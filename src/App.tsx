import { useState } from "react";
import "./App.css";
import { LoginPage } from "./Components/Login/LoginPage";
import { LandingPage } from "./Components/Landing/LandingPage";
import { Route, Routes } from "react-router-dom";
import { SignupPage } from "./Components/Signup/SignupPage";
import { HomePage } from "./Components/Home/HomePage";
import DetailsPage from "./Components/Details/DetailsPage";
import ErrorPage from "./Components/Error/ErrorPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/SignupPage" element={<SignupPage />} />
        <Route path="/LoginPage" element={<LoginPage />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/DetailsPage" element={<DetailsPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </>
  );
}

export default App;
