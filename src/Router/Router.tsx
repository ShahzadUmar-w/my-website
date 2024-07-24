/* eslint-disable prettier/prettier */
import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import Login from "../Screens/Login/Page/Login";
import Home from "../Screens/Home/Main/Home";
import Signup from "../Screens/Login/Page/SignUp";

const RouterApp: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default RouterApp;
