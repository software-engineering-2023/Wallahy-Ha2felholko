import React, { useState } from 'react';
import './Transfers.css';

const Transfers = () => {
  const [TransfersInfo, setTransfersInfo] = useState({
    amount: '',
    TransferTo: '',
    Message:'',
    TransferType:'',
    submitted: false,
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setTransfersInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform any necessary actions with the loan information (e.g., submit to server, display confirmation)
    setTransfersInfo((prevState) => ({
      ...prevState,
      submitted: true,
    }));

    // Reset form after 2 seconds
    setTimeout(() => {
        setTransfersInfo({
        amount: '',
        TransferTo: '',
        Message:'',
        TransferType:'',
        submitted: false,
      });
    }, 2000);
  };

  return (
    <div className="Transfers-page">
      <div className="Transfers-form">
        <h2>Transfers Application</h2>
        <form onSubmit={handleSubmit}>


          <div className="form-group-Transfers">

          <label htmlFor="TransferType">Transfer Type:</label>
            <select
              id="TransferType"
              name="TransferType"
              value={TransfersInfo.TransferType}
              onChange={handleInputChange}
              required
            >\
              <option value="car">Select Transfer Type </option>
              <option value="car">Internal </option>
              <option value="personal">Domestic </option>
              <option value="personal">International </option>
              
            </select>


           
          

            <label htmlFor="TransferTo">Account Number:</label>
            <input
              type="text"
              id="TransferTo"
              name="TransferTo"
              value={TransfersInfo.TransferTo}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="amount">Transfer Amount:</label>
            <input
              type="text"
              id="amount"
              name="amount"
              value={TransfersInfo.amount}
              onChange={handleInputChange}
              required
            />

            <label htmlFor="TransferTo">Message:</label>
            <input
              type="text"
              id="Message"
              name="Message"
              value={TransfersInfo.Message}
              onChange={handleInputChange}
              required
            />
            


          </div>

          <button type="submit" className="Transfers-button">Submit</button>
          {TransfersInfo.submitted && <p className="Transfers-confirmation">Transfer has been done successfully</p>}
        </form>
      </div>
    </div>
  );
};

export default Transfers;
