import React, { useState } from 'react';
import './BillReminder.css';

const BillReminderButton = () => {
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [selectedBill, setSelectedBill] = useState('');
  const [selectedFrequency, setSelectedFrequency] = useState('');

  const handleBillChange = (event) => {
    setSelectedBill(event.target.value);
  };

  const handleFrequencyChange = (event) => {
    setSelectedFrequency(event.target.value);
  };

  const handleReminderSet = () => {
    // Code to handle setting the bill reminder goes here
    setConfirmationVisible(true);

    setTimeout(() => {
      setConfirmationVisible(false);
    }, 1000);
  };

  return (
    <div className="bill-reminder-container">
      <div className="bill-prompt">
          <label htmlFor="billSelect">Select a bill:</label>
          <select id="billSelect" value={selectedBill} onChange={handleBillChange}>
            <option value="">-- Select a bill --</option>
            <option value="electricity">Electricity</option>
            <option value="water">Water</option>
            <option value="internet">Internet</option>
            {/* Add more bill options here */}
          </select>

          <label htmlFor="frequencySelect">Select frequency:</label>
          <select id="frequencySelect" value={selectedFrequency} onChange={handleFrequencyChange}>
            <option value="">-- Select a frequency --</option>
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
            {/* Add more frequency options here */}
          </select>

          <button className="setReminderButton" onClick={handleReminderSet}>Set Reminder</button>
        </div>

      {confirmationVisible && <p className="confirmation-message">Reminder set successfully!</p>}
    </div>
  );
};

export default BillReminderButton;
