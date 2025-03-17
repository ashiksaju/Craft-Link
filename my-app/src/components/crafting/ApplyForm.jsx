import React, { useState } from "react";
import { useParams,useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ApplyForm = () => {
  const { id } = useParams(); 
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    interest: "",
  });
  const [errors, setErrors] = useState({}); 

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" }); 
  };

  
  const validatePhoneNumber = (phone) => {
    const phoneRegex = /^[0-9]{10}$/; 
    return phoneRegex.test(phone);
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let newErrors = {};

    
    if (!validatePhoneNumber(formData.phone)) {
      newErrors.phone = "Phone number must be exactly 10 digits and contain only numbers.";
    }

    // If there are validation errors, update state and prevent form submission
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Show success toast notification
    toast.success("Application form submitted successfully!", {
      position: "top-center",
      autoClose: 3000, // Closes after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      onClose: () => navigate("/employee")
    });

    // Clear form after submission
    setFormData({ fullName: "", email: "", phone: "", interest: "" });
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Apply for Job</h2>

      <ToastContainer />

      <form className="mt-4" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            name="fullName"
            className="form-control"
            placeholder="Enter your name"
            value={formData.fullName}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Phone Number</label>
          <input
            type="tel"
            name="phone"
            className={`form-control ${errors.phone ? "is-invalid" : ""}`}
            placeholder="Enter your phone number"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          {errors.phone && <div className="invalid-feedback">{errors.phone}</div>}
        </div>
        <div className="mb-3">
          <label className="form-label">Why are you interested?</label>
          <textarea
            name="interest"
            className="form-control"
            rows="3"
            placeholder="Write a short response"
            value={formData.interest}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-success">SUBMIT</button>
      </form>
    </div>
  );
};

export default ApplyForm;
