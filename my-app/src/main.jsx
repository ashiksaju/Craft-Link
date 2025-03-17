import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import Login from "./components/pages/Login";
import Signup from "./components/pages/Signup";
import Home from "./components/crafting/home";
import RecruiterForm from "./components/crafting/RecruiterForm";
import Employee from "./components/crafting/Employee";
import ApplyForm from "./components/crafting/ApplyForm";

import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        <Route path="/recruiter" element={<RecruiterForm />} />
        <Route path="/employee" element={<Employee />} />
        <Route path="/apply/:id" element={<ApplyForm />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
