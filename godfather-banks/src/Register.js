import './Register.css';
import logo from './nobg-logo.png';
import { Link } from 'react-router-dom';
import React, { useState } from 'react';


const Register = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({
      fullName: '',
      email: '',
      password: '',
      address: '',
      phoneNumber: '',
      accountNumber: '',
      creditCardNumber: '',
    });
  
    const handleNextStep = () => {
      setStep((prevStep) => prevStep + 1);
    };
  
    const handlePreviousStep = () => {
      setStep((prevStep) => prevStep - 1);
    };
  
    const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic
    };
  
    return (
      <div className="registration-page">
        <h1 className="registration-heading">Create an Account</h1>
  
        <form className="registration-form" onSubmit={handleSubmit}>
          {step === 1 && (
            <div className="registration-step">
              <h2>Personal Information</h2>
              <input
                type="text"
                name="fullName"
                placeholder="Full Name"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
                required
              />
              <button type="button" onClick={handleNextStep}>
                Next
              </button>
            </div>
          )}
  
          {step === 2 && (
            <div className="registration-step">
              <h2>Contact Information</h2>
              <input
                type="text"
                name="address"
                placeholder="Address"
                value={formData.address}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Phone Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                required
              />
              <button type="button" onClick={handlePreviousStep}>
                Previous
              </button>
              <button type="button" onClick={handleNextStep}>
                Next
              </button>
            </div>
          )}
  
          {step === 3 && (
            <div className="registration-step">
              <h2>Bank Information</h2>
              <input
                type="text"
                name="accountNumber"
                placeholder="Account Number"
                value={formData.accountNumber}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="creditCardNumber"
                placeholder="Credit Card Number"
                value={formData.creditCardNumber}
                onChange={handleChange}
                required
              />
              <button type="button" onClick={handlePreviousStep}>
                Previous
              </button>
              <button type="submit">Register</button>
            </div>
          )}
        </form>
      </div>
    );
  };

export default Register;
