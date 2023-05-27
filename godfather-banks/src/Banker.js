import './Banker.css';
import logo from './nobg-logo.png';
import React, { useState } from 'react';

function Banker() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedNotif, setSelectedNotif] = useState(null);

  const handleButtonClick = (button) => {
      setSelectedButton(button);
      setSelectedRequest(null);
  };

  const handleClick = (requests) => {
    setSelectedRequest(requests);
  };

  const handleClick2 = (notifications) => {
    setSelectedNotif(notifications);
  };

    const requests = [
      "Request 1",
      "Request 2",
      "Request 3",
      "Request 44444444444444444444444444444444444444444444444444 with some extra text to overflow",
      "Request 5",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
      "Have a nice day!",
    ];

    const notifications = [
      "notification 1",
      "notification 2",
      "notification 3",
      "notification 44444444444444444444444444444444444444444444444444 i see u switched :)",
      "notification 5",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!",
    ];

    return (
      <div className="Banker">
         <header className="header">
          <nav className="navigation">
           <div className="logo">
            <img src={logo} alt="Godfather Bank Logo" />
            <h1>Godfather Banks</h1>
            </div>
            <div className="control">
              <ul>
                <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
                <li><a href="/contact">Contact</a></li>
              </ul>
            </div>
            <div className="user-area">
              <button className="logout-button">Logout</button>
            </div>
          </nav>
        </header>
        <div className="body">
          <div className="List">
          <div className="button-group">
          <button
            className={selectedButton === 'button1' ? 'selected' : ''}
            onClick={() => handleButtonClick('button1')}
          >
            Requests
          </button>
          <button
            className={selectedButton === 'button2' ? 'selected' : ''}
            onClick={() => handleButtonClick('button2')}
          >
            Notifications
          </button>
          </div>
            <div className="RequestList">
              {selectedButton === 'button1' ? (
              requests.map((requests, index) => (
                <a
                  key={index}
                  className="Requests"
                  onClick={() => handleClick(requests)}
                >
                  {requests}
                </a>
              ))
            ) : (
              notifications.map((notification, index) => (
                <a
                  key={index}
                  className="Notifications"
                  onClick={() => handleClick2(notification)}
                >
                  {notification}
                </a>
            )))
              }
            </div>
            
          </div>
        <div className="RemainingRectangle">
        {selectedRequest ? (
              <div className="SelectedRequest">
                <h2>Request from *ADD USERNAME HERE*:</h2>
                <p1>{selectedRequest}</p1>
                <h6>*ADD TIME SENT HERE*</h6>
              </div>
            ) : (
              <p>Select from the panel to display</p>
            )}
        </div>
      </div>
        <footer className="footer">
          <div className="footer-content">
            <p>&copy; 2023 Godfather Banks. All rights reserved.</p>
            <ul>
              <li><a href="/privacy">Privacy Policy</a></li>
              <li><a href="/terms">Terms of Service</a></li>
            </ul>
          </div>
        </footer>
      </div>
    );
}
  
export default Banker;