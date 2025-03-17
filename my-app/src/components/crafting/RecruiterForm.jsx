import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function RecruiterForm() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    jobTitle: "",
    companyName: "",
    jobDescription: "",
    location: "",
    jobType: "Full-Time",
    salary: "",
    skills: "",
    experience: "",
    deadline: "",
    email: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Job Posted:", formData);
    alert("Job Posted Successfully!");
    navigate("/home");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Post a Job</h2>
      <form onSubmit={handleSubmit} className="shadow p-4 bg-light rounded">
        <div className="mb-3">
          <label className="form-label">Job Title</label>
          <input
            type="text"
            className="form-control"
            name="jobTitle"
            value={formData.jobTitle}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Company Name</label>
          <input
            type="text"
            className="form-control"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Description</label>
          <textarea
            className="form-control"
            name="jobDescription"
            rows="3"
            value={formData.jobDescription}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Location</label>
          <input
            type="text"
            className="form-control"
            name="location"
            value={formData.location}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Job Type</label>
          <select className="form-control" name="jobType" value={formData.jobType} onChange={handleChange}>
            <option>Full-Time</option>
            <option>Part-Time</option>
            <option>Weekly</option>
            <option>Contract</option>
          </select>
        </div>

        <div className="mb-3">
          <label className="form-label">Salary Range</label>
          <input
            type="text"
            className="form-control"
            name="salary"
            value={formData.salary}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Required Skills</label>
          <input
            type="text"
            className="form-control"
            name="skills"
            placeholder="E.g., JavaScript, Python"
            value={formData.skills}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Experience Level</label>
          <input
            type="text"
            className="form-control"
            name="experience"
            placeholder="E.g., 2+ years"
            value={formData.experience}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Application Deadline</label>
          <input
            type="date"
            className="form-control"
            name="deadline"
            value={formData.deadline}
            onChange={handleChange}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Contact Email</label>
          <input
            type="email"
            className="form-control"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">SUBMIT</button>
      </form>
    </div>
  );
}

export default RecruiterForm;
