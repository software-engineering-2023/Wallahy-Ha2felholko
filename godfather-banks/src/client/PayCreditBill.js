import React, { useState } from 'react';
import './PayCreditBill.css';

const PayCreditBill = () => {
  const [paymentMethod, setPaymentMethod] = useState('');
  const [amountDue, setAmountDue] = useState(10000);
  const [isPaid, setIsPaid] = useState(false);

  const handlePaymentMethodChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handlePayClick = () => {
    setIsPaid(true);
  };

  const renderPaymentForm = () => {
    return (
      <div className="payment-form">
        <h2>Pay Credit Bill</h2>
        <p>Amount Due: EGP {amountDue}</p>
        <div>
          <label>Select Payment Method:</label>
          <select required value={paymentMethod} onChange={handlePaymentMethodChange}>
            <option value="">Select</option>
            <option value="bank">Bank Account</option>
            <option value="paypal">PayPal</option>
          </select>
        </div>
        <button disabled={!paymentMethod} onClick={handlePayClick}>
          Pay
        </button>
      </div>
    );
  };

  const renderConfirmation = () => {
    return (
      <div className="confirmation">
        <h2>Payment Confirmation</h2>
        <p>Payment of EGP {amountDue} successfully made via {paymentMethod}.</p>
        <p>You're all good for this month !</p>
      </div>
    );
  };

  return (
    <div className="pay-credit-bill">
      {isPaid ? renderConfirmation() : renderPaymentForm()}
    </div>
  );
};

export default PayCreditBill;
