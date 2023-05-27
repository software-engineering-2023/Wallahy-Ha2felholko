import './Banker.css';
import logo from './nobg-logo.png';
import React, { useState } from 'react';

function Banker() {
  const [selectedButton, setSelectedButton] = useState(null);

  const handleButtonClick = (button) => {
      setSelectedButton(button);
  };
    const messages = [
      "Hello",
      "How are you?",
      "I'm doing great!",
      "This is a sample messageeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeee KALAM KETEEERRRRR",
      "React is awesome!",
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

    const handleClick = (message) => {
      console.log(`Clicked message: ${message}`);
    };

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
                <li><a href="/" className="active">Home</a></li>
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
        <div className="body-n-footer">
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
              {messages.map((message, index) => (
                <a
                  key={index}
                  className="Requests"
                  onClick={() => handleClick(message)}
                >
                  {message}
                </a>
              ))}
            </div>
          </div>
        <div className="RemainingRectangle">
          HERE TO DISPLAY THE FULL MESSAGE
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
      </div>
    );
}
  
export default Banker;