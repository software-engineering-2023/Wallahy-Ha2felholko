import React, { useState } from 'react';
import './Trans.css';

function Trans() {
  const [selectedNotif, setSelectedNotif] = useState(null);
  const [readNotifications, setReadNotifications] = useState([]);
  const [notifications, setNotifications] = useState([
    "Money credited to your account from a recent deposit of $500.",
    "Money debited from your account for a transaction at XYZ Store amounting to $50.",
    "Money credited to your savings account as monthly interest of $25.",
    "Money debited from your account for an upcoming credit card payment of $200.",
    "Money credited to your account from a successful loan application of $1000.",
    "Money debited from your account for an ATM withdrawal of $100.",
    "Money debited from your account for a bill payment to ABC Utility Company amounting to $50.",
    "Money credited to your account from a refund of $20.",
    "Money credited to your account from a recent deposit of $300.",
    "Money debited from your account for a transaction at ABC Supermarket amounting to $75.",
    "Money credited to your savings account as monthly interest of $30.",
    "Money debited from your account for an upcoming credit card payment of $150.",
    "Money credited to your account from a successful loan application of $2000.",
    "Money debited from your account for an online purchase amounting to $50.",
    "Money debited from your account for a bill payment to XYZ Internet Provider amounting to $60.",
    "Money credited to your account from a refund of $10.",
    "Money credited to your account from a recent deposit of $1000.",
    "Money debited from your account for a transaction at PQR Electronics amounting to $500.",
    "Money credited to your savings account as monthly interest of $50.",
    "Money debited from your account for an upcoming credit card payment of $300."
  ]);

  const handleClick2 = (notifications) => {
    setSelectedNotif(notifications);
    if (!readNotifications.includes(notifications)) {
      setReadNotifications([...readNotifications, notifications]);
    }
  };

    return (
      <div className="Banker">
        <div className="body">
          <div className="List">
            <div className="RequestList">
              {notifications.map((notifications, index) => (
                <a
                  key={index}
                  className={`Notifications ${selectedNotif === notifications ? "selected" : ""} ${readNotifications.includes(notifications) ? 'read' : ''}`}
                  onClick={() => handleClick2(notifications)}
                >
                  {notifications}
                </a>
            ))}
            </div>
          </div>
        <div className="RemainingRectangle">
              {selectedNotif ? (
                <div className="SelectedNotif">
                  <h2>Transaction:</h2>
                  <p1>{selectedNotif}</p1>
                  <h6>Sent: Saturday, May 27, 2023 11:36 AM</h6>
                  <a className="UserInfoButton">Click here for more info</a>
                </div>
            ) : (
              <p>Select a transaction to display</p>
            )}
        </div>
      </div>
      </div>
    );
};

export default Trans;