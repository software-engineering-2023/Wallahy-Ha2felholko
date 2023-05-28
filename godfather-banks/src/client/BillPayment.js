import React, { useState } from 'react';
import './BillPayment.css';
import BillReminderButton from './BillReminder';

const BillPayment = () => {
  const [selectedBill, setSelectedBill] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [paymentProcessing, setPaymentProcessing] = useState(false);
  const [paymentSuccess, setPaymentSuccess] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState('Credit Card');

  const billData = [
    { id: 1, name: 'Electricity Bill', price:"EGP 996" },
    { id: 2, name: 'Water Bill', price: "EGP 56" },
    { id: 3, name: 'Internet Bill', price: "EGP 1200" },
    // Add more bills as needed
  ];

  const handleBillSelect = (bill) => {
    setSelectedBill(bill);
    setShowConfirmation(false);
    setPaymentSuccess(false);
  };

  const handlePayment = () => {
    setPaymentProcessing(true);

    // Simulating successful payment
    setTimeout(() => {
      setPaymentProcessing(false);
      setPaymentSuccess(true);
      setShowConfirmation(true);
    }, 1500);
  };

  const handleConfirmationBack = () => {
    setShowConfirmation(false);
    setPaymentSuccess(false);
  };

  const handleBack = () => {
    setSelectedBill(null);
    setShowConfirmation(false);
    setPaymentSuccess(false);
  };

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  if (showConfirmation) {
    return (
      <div className="payment-container">
        <h2>Confirmation</h2>
        {paymentProcessing ? (
          <p className="confirmation-message">Processing payment...</p>
        ) : (
          <>
            {paymentSuccess ? (
              <p className="confirmation-message success">Payment was successful!</p>
            ) : (
              <p className="confirmation-message">Do you want to proceed with the payment?</p>
            )}
          </>
        )}
        {paymentSuccess ? (
          <>
            <button className="back-btn" onClick={handleBack}>Back</button>
          </>
        ) : (
          <>
            <div className="payment-method">
              <label htmlFor="payment-method">Payment Method:</label>
              <select id="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
                <option value="Credit Card">Credit Card</option>
                <option value="Bank Transfer">Bank Transfer</option>
                <option value="PayPal">PayPal</option>
              </select>
            </div>
            <button className="pay-btn" onClick={handlePayment} disabled={paymentProcessing}>
              {paymentProcessing ? 'Processing...' : 'Pay Now'}
            </button>
            <button className="back-btn" onClick={handleConfirmationBack}>Back</button>
          </>
        )}
      </div>
    );
  }

  if (selectedBill) {
    return (
      <div className="payment-container">
        <h2>Payment Details</h2>
        <p>Selected Bill: {selectedBill.name}</p>
        <p>Price: {selectedBill.price}</p>
        <div className="payment-method">
          <label htmlFor="payment-method">Payment Method:</label>
          <select id="payment-method" value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="Credit Card">Credit Card</option>
            <option value="Bank Transfer">Bank Transfer</option>
            <option value="PayPal">PayPal</option>
          </select>
        </div>
        <button className="pay-btn" onClick={handlePayment} disabled={paymentProcessing}>
          {paymentProcessing ? 'Processing...' : 'Proceed to Payment'}
        </button>
        <button className="back-btn" onClick={handleBack}>Back</button>
      </div>
    );
  }

  return (
    <div className="payment-container">
      <h2>Pick a Bill</h2>
      {billData.map((bill) => (
        <div key={bill.id} className="bill-item">
          <p>{bill.name}</p>
          <p>Price: {bill.price}</p>
          <button className="pay-btn" onClick={() => handleBillSelect(bill)}>Pay Now</button>
        </div>
      ))}
    </div>
  
  );
};

export default BillPayment;
