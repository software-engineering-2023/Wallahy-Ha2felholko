import React, { useState } from 'react';
import './CreditCardApplication.css';

const CreditCardApplication = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [creditCardType, setCreditCardType] = useState('');
  const [confirmationMessage, setConfirmationMessage] = useState('');

  const handleButtonClick = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
    setName('');
    setEmail('');
    setCreditCardType('');
    setConfirmationMessage('');
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setConfirmationMessage('Credit card application submitted successfully.');
  };

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleCreditCardTypeChange = (event) => {
    setCreditCardType(event.target.value);
  };

  return (
    <div className="credit-card-application">
      <button className="application-button" onClick={handleButtonClick}>
        Apply for Credit Card
      </button>
      {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <h2>Credit Card Application</h2>
            <form onSubmit={handleFormSubmit}>
              <label>
                Desired Credit Limit:
                <input type="text" value={name} onChange={handleNameChange} />
              </label>
              <label>
                Contact Email For Further Inquiries:
                <input type="email" value={email} onChange={handleEmailChange} />
              </label>
              <label>
                Credit Card Type:
                <select value={creditCardType} onChange={handleCreditCardTypeChange}>
                  <option value="">Select</option>
                  <option value="platinum">Platinum</option>
                  <option value="trustmust">TrustMust</option>
                </select>
              </label>
              <button type="submit">Submit</button>
              <button type="button" onClick={handleClose}>
                Close
              </button>
            </form>
            {confirmationMessage && <p className="confirmation-message">{confirmationMessage}</p>}
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCardApplication;
