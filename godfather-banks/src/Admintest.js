import React from 'react';
import './Admintest.css';
import logo from './nobg-logo.png';
import { useState, useEffect } from 'react';

function Admintest() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  


  
  const [requests, setRequests] = useState([
    {
      name: "Stolen Card",
      description: " ",
      styleClass: "stolen-card",
      additionalContent: (
        <div className="testing">
          <h1> Request: Stolen Card

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>Clicking the proceed button once you verified all the info so the request is handeled</p>
          <div className='button1'>
          <button className="button-arounder" onClick={() => handleRequestHandled("Stolen Card")}>Proceed</button> 
        </div>
          
        </div>
      ),
      
    },
    {
      name: "Hacked Bank Account",
      description: "My bank account got hacked. Need assistance.",
      styleClass: "hacked-bank-account",
      additionalContent: (
        <div className="testing">
          <h1> Request: Stolen Card

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>Clicking the proceed button once you verified all the info so the request is handeled</p>
          <div className='button1'>
          <button className="button-arounder" onClick={() => handleRequestHandled("Hacked Bank Account")}>Proceed</button> 
        </div>
          
        </div>
      ),
    },
    {
      name: "Damaged Card",
      description: "Please help with my stolen card issue.",
      styleClass: "damaged-card",
      additionalContent: (
        <div className="testing">
          <h1> Request: Stolen Card

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>Clicking the proceed button once you verified all the info so the request is handeled</p>
          <div className='button1'>
          <button className="button-arounder" onClick={() => handleRequestHandled("Damaged Card")}>Proceed</button> 
        </div>
          
        </div>
      ),
      
    },
    {
      name: "Technical Issue",
      description: "Please help with my stolen card issue.",
      styleClass: "technical-issue",
      additionalContent: (
        <div className="testing">
          <h1> Request: Stolen Card

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>Clicking the proceed button once you verified all the info so the request is handeled</p>
          <div className='button1'>
          <button className="button-arounder" onClick={() => handleRequestHandled("Technical Issue")}>Proceed</button> 
        </div>
          
        </div>
      ),
    },
    // Add more request objects with different details
  ]);

  

  const handleButtonClick = (button) => {
    setSelectedButton(button);
    setSelectedRequest(null);
  };

  const handleClick = (request) => {
    const selectedRequestObj = requests.find((r) => r.name === request);
    setSelectedRequest(selectedRequestObj);
  };

  const handleRequestHandled = (requestName) => {
    const updatedRequests = requests.filter((request) => request.name !== requestName);
    setRequests(updatedRequests);
    setSelectedRequest(null);
  };
  
  

    

    return (
      <div className="Admintest">
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
          
          <div className={`RequestInfo ${selectedRequest.styleClass}`}>
            {selectedRequest.description}
          </div>
          
          <h6>*ADD TIME SENT HERETESTTTTTTTTTT*</h6>
          {selectedRequest.additionalContent}
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