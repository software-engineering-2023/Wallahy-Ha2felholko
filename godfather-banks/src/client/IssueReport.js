import React, { useState } from 'react';
import './IssueReport.css'; // Import the CSS file for styling

const IssueReport = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [issueDescription, setIssueDescription] = useState('');
  const [issueType, setIssueType] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const toggleForm = () => {
    if (isSubmitted) {
      setIsOpen(false);
      setIsSubmitted(false);
    } else {
      setIsOpen(!isOpen);
    }
  };

  const handleDescriptionChange = event => {
    setIssueDescription(event.target.value);
  };

  const handleTypeChange = event => {
    setIssueType(event.target.value);
  };

  const submitForm = event => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="issue-report">
      <button className="report-button" onClick={toggleForm}>
        Report Issue
      </button>
      {isOpen && (
        <div className="form-overlay">
          <div className="form-container">
            <h2>Report Issue</h2>
            {isSubmitted ? (
              <div className="confirmation-message">
                <p>Issue submitted successfully!</p>
                <button className="exit-button" onClick={toggleForm}>
                  Back
                </button>
              </div>
            ) : (
              <form onSubmit={submitForm}>
                <label htmlFor="type">Issue Type:</label>
                <select className="report-select" id="type" name="type" value={issueType} onChange={handleTypeChange} required>
                  <option value="">Select an option</option>
                  <option value="system">System Issue</option>
                  <option value="creditCard">Credit Card Issue</option>
                  <option value="other">Other</option>
                </select>
                <label htmlFor="description">Issue Description:</label>
                <textarea
                  id="description"
                  name="description"
                  value={issueDescription}
                  onChange={handleDescriptionChange}
                  placeholder="Please describe the issue..."
                  rows={5}
                  required
                ></textarea>
                <div className="form-buttons">
                  <button type="submit">Submit</button>
                  <button type="button" onClick={toggleForm}>Cancel</button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default IssueReport;
