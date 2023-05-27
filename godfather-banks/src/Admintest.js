import React from 'react';
import './Admintest.css';
import logo from './nobg-logo.png';
import { useState } from 'react';

function Admintest() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  

  const handleButtonClick = (button) => {
      setSelectedButton(button);
      setSelectedRequest(null);
  };

  const handleClick = (request) => {
    // Find the selected request object by its name
    const selectedRequestObj = requests.find((r) => r.name === request);
    setSelectedRequest(selectedRequestObj);
  };

  

    const requests = [
      {
        name: "Stolen Card",
        description: "Please help with my stolen card issue.",
      },
      {
        name: "Hacked Bank Account",
        description: "My bank account got hacked. Need assistance.",
      },
      // Add more request objects with different details
    
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
         
          </div>
          <div className="RequestList">
            {selectedButton === 'button1' &&
              requests.map((request, index) => (
                <a
                  key={index}
                  className="Requests"
                  onClick={() => handleClick(request.name)}
                >
                  {request.name}
                </a>
              ))}
          </div>
        </div>
        <div className="RemainingRectangle">
        {selectedRequest ? (
              <div className="SelectedRequest">
                <h2>Request from *ADD USERNAME HERRRRRRRRRRRRE*:</h2>
                <div className='RequestInfo>'> 
                {selectedRequest.description} 
                <div class="buttons-container">
  <button className="button-arounder">Procced</button>
</div>
                </div>
                
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
export default Admintest;