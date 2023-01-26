import React from "react";
import { Route, Routes } from "react-router-dom";
import LoginPage from "../pages/Login/LoginPage";
import RegistrationForm from "../pages/Registration/RegistrationForm";
import SignIn from "../component/SignIn/SignIn";
import Home from "../pages/Home/Home";
import ProfilePage from '../pages/ProfilePage/ProfilePage'
import OtherProfile from '../pages/OtherProfile/OtherProfile'

export default function Routing() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<RegistrationForm />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/otherprofile" element={<OtherProfile />} />
      </Routes>
    </>
  );
}
