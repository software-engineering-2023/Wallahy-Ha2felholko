import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CloseAccountButton.css'; // CSS styles

const CloseAccountButton = () => {
  const history = useHistory();
  const [showForm, setShowForm] = useState(false);
  const [reason, setReason] = useState('');
  const [help, setHelp] = useState('');

  const handleAccountClosure = () => {
    // Add your account closure logic here
    // You can use the `reason` and `help` variables for further processing
    // Redirect to "/" after account closure
    history.push('/');
  };

  const toggleFormVisibility = () => {
    setShowForm(!showForm);
  };

  const handleReasonChange = (e) => {
    setReason(e.target.value);
  };

  const handleHelpChange = (e) => {
    setHelp(e.target.value);
  };

  const handleCancel = () => {
    setShowForm(false);
  };

  return (
    <div>
      <button className="close-account-button" onClick={toggleFormVisibility}>
        Close Account
      </button>
      {showForm && (
        <div className="form-overlay">
          <div className="form-container">
            <label htmlFor="reason">Reason for Leaving:</label>
            <textarea
              id="reason"
              value={reason}
              onChange={handleReasonChange}
              placeholder="Please provide a reason for leaving"
            />

            <label htmlFor="help">How can we help you?</label>
            <textarea
              id="help"
              value={help}
              onChange={handleHelpChange}
              placeholder="Let us know how we can assist you"
            />

            <div>
              <button className="confirm-close-button" onClick={handleAccountClosure}>
                Confirm Close Account
              </button>
              <button className="cancel-button" onClick={handleCancel}>
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CloseAccountButton;
