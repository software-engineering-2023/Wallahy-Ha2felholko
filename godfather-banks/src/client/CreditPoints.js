import React, { useState } from 'react';
import './CreditPoints.css';

const CreditPoints = () => {
  const [redeemItem, setRedeemItem] = useState('');
  const [pointsAvailable, setPointsAvailable] = useState(500);
  const [confirmationMessage, setConfirmationMessage] = useState('');
  

  const handleRedeemItemChange = (event) => {
    setRedeemItem(event.target.value);
  };

  const handleRedeemClick = () => {
    let pointsCost = 0;
    let message = '';

    switch (redeemItem) {
      case 'cashback':
        pointsCost = 200;
        message = 'You have redeemed EGP 100 CashBack.';
        break;
      case 'internet':
        pointsCost = 300;
        message = 'You have redeemed Monthly Internet Package.';
        break;
      default:
        pointsCost = 0;
        message = '';
    }

    if (pointsAvailable >= pointsCost) {
      setPointsAvailable(pointsAvailable - pointsCost);
      setConfirmationMessage(message);
    }
  };

  return (
    <div className="credit-points">
      <h2>Credit Points</h2>
      <p>Points Available: {pointsAvailable}</p>
      <div className="redeem-form">
        <label>Select Redeemable Item:</label>
        <select value={redeemItem} onChange={handleRedeemItemChange}>
          <option value="">Select</option>
          <option value="cashback">EGP 100 CashBack</option>
          <option value="internet">Monthly Internet Package</option>
        </select>
        <button disabled={!redeemItem} onClick={handleRedeemClick}>
          Redeem
        </button>
      </div>
      {confirmationMessage && (
        <p className="redeem-confirmation-message">{confirmationMessage}</p>
      )}
    </div>
  );
};

export default CreditPoints;
