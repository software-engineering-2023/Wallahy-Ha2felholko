import React, { useState } from 'react';
import './CreditCardTransactions.css';

const CreditCardTransactions = () => {
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Dummy transaction data
  const transactions = [
    { id: 1, date: '2023-05-01', amount: 100.0 },
    { id: 2, date: '2023-05-02', amount: 75.0 },
    { id: 3, date: '2023-05-03', amount: 50.0 },
    { id: 4, date: '2023-05-04', amount: 120.0 },
    { id: 5, date: '2023-05-05', amount: 200.0 },
    { id: 6, date: '2023-05-12', amount: 1150.0 },
    { id: 7, date: '2023-05-10', amount: 969.0 },
    { id: 8, date: '2023-05-18', amount: 250.0 },
  ];

  const handleTransactionClick = (transaction) => {
    setSelectedTransaction(transaction);
  };

  const handleClosePopup = () => {
    setSelectedTransaction(null);
  };

  return (
    <div className="credit-card-transactions">
      <div className="transaction-list">
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="transaction"
            onClick={() => handleTransactionClick(transaction)}
          >
            <div className="transaction-info">
              <span>Date: {transaction.date}</span>
              <span>Amount: EGP {transaction.amount}</span>
            </div>
          </div>
        ))}
      </div>
      {selectedTransaction && (
        <div className="transaction-popup">
          <div className="popup-content">
            <h3>Transaction Details</h3>
            <p>Date: {selectedTransaction.date}</p>
            <p>Amount: EGP {selectedTransaction.amount}</p>
            <button onClick={handleClosePopup}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreditCardTransactions;
