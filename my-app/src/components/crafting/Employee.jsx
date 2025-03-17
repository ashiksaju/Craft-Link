import React from "react";
import { Link } from "react-router-dom";

const jobs = [
  { id: 1, title: "Catering", location: "ATLAS-Angamaly", salary: "$700/day" },
  { id: 2, title: "Security", location: "St Thomas Shrine-Malayattor", salary: "$10000/month" },
  { id: 3, title: "Beach Cleaning", location: "Cherai-Paravoor", salary: "$600/day" },
  { id: 4, title: "Electrician", location:"Geotech-Mattor-Kalady", salary: "$1800/month" },
  { id: 5, title: "Delivery Personnel", location: "BurgerInn-Mattor-Kalady", salary: "$800/day" },
  { id: 6, title: "Maths Tutor", location: "Excellent-Neeleswaram-Kalady", salary: "$2500/month" },
  { id: 7, title: "Kitchen Helper", location: "Seattle", salary: "$1500/month" },
  { id: 8, title: "Uber Driver", location: "Perumbavoor", salary: "$20000/month" },
  { id: 9, title: "House Cleaning", location: "Villa 816-Aluva", salary: "$2000/month" },
  { id: 10, title: "Catering Assistant", location: "Dallas", salary: "$1000/day" }
];

const Employee = () => {
  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">AVAILABLE JOBS</h2>
      <div className="row">
        {jobs.map((job) => (
          <div key={job.id} className="col-md-4 mb-4">
            <div className="card shadow-sm p-3">
              <div className="card-body">
                <h5 className="card-title">{job.title}</h5>
                <p className="card-text"><strong>Location:</strong> {job.location}</p>
                <p className="card-text"><strong>Salary:</strong> {job.salary}</p>
                <Link to={`/apply/${job.id}`} className="btn btn-primary">
                  Apply
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Employee;
