import React, { useState } from 'react';
import './Loan.css';

const Loan = () => {
  const [loanInfo, setLoanInfo] = useState({
    loanType: '',
    amount: '',
    reason: '',
    duration: '',
    submitted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setLoanInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the loan information (e.g., submit to server, display confirmation)
    setLoanInfo((prevState) => ({
      ...prevState,
      submitted: true,
    }));

    // Reset form after 2 seconds
    setTimeout(() => {
      setLoanInfo({
        loanType: '',
        amount: '',
        reason: '',
        duration: '',
        submitted: false,
      });
    }, 2000);
  };

  return (
    <div className="loan-page">
      <div className="loan-form">
        <h2>Loan Application</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="loanType">Loan Type:</label>
            <select
              id="loanType"
              name="loanType"
              value={loanInfo.loanType}
              onChange={handleInputChange}
              required
            >
              <option value="">Select Loan Type</option>
              <option value="car">Car Loan</option>
              <option value="personal">Personal Loan</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="amount">Loan Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={loanInfo.amount}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="reason">Reason:</label>
            <input
              type="text"
              id="reason"
              name="reason"
              value={loanInfo.reason}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="duration">Loan Duration:</label>
            <input
              type="text"
              id="duration"
              name="duration"
              value={loanInfo.duration}
              onChange={handleInputChange}
              required
            />
          </div>

          <button type="submit" className="loan-submit-button">Submit</button>
          {loanInfo.submitted && <p className="loan-confirmation">Loan requested successfully!</p>}
        </form>
      </div>
    </div>
  );
};

export default Loan;
