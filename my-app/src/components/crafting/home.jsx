import React from "react";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-light">
      <h1 className="mb-4"> CRAFT LINK</h1>
      <div className="d-flex flex-column gap-3">
      <Link to="/recruiter" className="btn btn-danger btn-lg w-100">Recruiter</Link>
      <Link to="/employee" className="btn btn-info btn-lg w-100">Employee</Link>
      </div>
    </div>
  );
}

export default Home;
