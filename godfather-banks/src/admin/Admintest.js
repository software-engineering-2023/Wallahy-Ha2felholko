import React from 'react';
import './Admintest.css';
import { useState } from 'react';

function Admintest() {
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [announcementText, setAnnouncementText] = useState('');
const [loading, setLoading] = useState(false);
const [announcementSent, setAnnouncementSent] = useState(false);

  const handleSendAnnouncement = () => {
    setSelectedRequest(null);
  };

const handleAnnouncementChange = (event) => {
    setAnnouncementText(event.target.value);
  };

  const handleAnnouncementSubmit = () => {
    setLoading(true); // Set loading state to true

     // Simulating a 1-second loading delay
     setTimeout(() => {
      setLoading(false);
      setAnnouncementSent(true);

      // Reset the announcement text after sending
      setAnnouncementText('');

      setTimeout(() => {
        setAnnouncementSent(false);
      }, 4000);
    }, 1000);
  };
 
  const [requests, setRequests] = useState([
    {
      name: "Card Theft",
      description: " ",
      styleClass: "stolen-card",
      additionalContent: (
        <div className="testing">
          <h1> Request: Card Theft

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>By clicking proceed, the following request will be handled appropriately, make sure to review all the information above</p>
          
          
          <div className="ButtonContainer">
        <button
          className="button-arounder proceed-button"
          onClick={() => handleRequestHandled("Card Theft")}
        >
          Proceed
        </button>
      </div>
          
        </div>
      ),
      
    },
    {
      name: "Hacked Bank Account",
      description: " ",
      styleClass: "hacked-bank-account",
      additionalContent: (
        <div className="testing">
          <h1> Request: Hacked Banked Account

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>By clicking proceed, the following request will be handled appropriately, make sure to review all the information above</p>
          <div className='button1'>
          <button
          className="button-arounder proceed-button"
          onClick={() => handleRequestHandled("Hacked Bank Account")}
        >
          Proceed
        </button> 
        </div>
          
        </div>
      ),
    },
    {
      name: "Damaged Card",
      description: " ",
      styleClass: "damaged-card",
      additionalContent: (
        <div className="testing">
          <h1> Request: Damaged Card

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>By clicking proceed, the following request will be handled appropriately, make sure to review all the information above</p>
          <div className='button1'>
          <button
          className="button-arounder proceed-button"
          onClick={() => handleRequestHandled("Damaged Card")}
        >
          Proceed
        </button> 
        </div>
          
        </div>
      ),
      
    },
    {
      name: "Technical Issue",
      description: " ",
      styleClass: "technical-issue",
      additionalContent: (
        <div className="testing">
          <h1> Request: Technical Issue

          </h1>
          <h5>
              Account ID:
            
          </h5>
          <h5> Account Name:</h5>
          <h5> Date: </h5>
          

          <p>By clicking proceed, the following request will be handled appropriately, make sure to review all the information above</p>
          <div className='button1'>
          <button
          className="button-arounder proceed-button"
          onClick={() => handleRequestHandled("Technical Issue")}
        >
          Proceed
        </button> 
        </div>
          
        </div>
      ),
    },
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
          

          <p>By clicking proceed, the following request will be handled appropriately, make sure to review all the information above</p>
          
          <div className="ButtonContainer">
        <button
          className="button-arounder proceed-button"
          onClick={() => handleRequestHandled("Stolen Card")}
        >
          Proceed
        </button>
      </div>
          
        </div>
      ),
      
    }
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
    setRequests(prevRequests => prevRequests.filter(request => request.name !== requestName));
    setSelectedRequest(null);
  };
  
  

    

    return (
      <div className="Admintest">
        
        <div className="body">
          <div className="List">
          <div className="button-groupali">
          <button
            className={selectedButton === 'button1' ? 'selected' : ''}
            onClick={() => handleButtonClick('button1')}
          >
            Requests
          </button>
          <button
              className={selectedButton === "button2" ? "selected" : ""}
              onClick={() => handleButtonClick("button2")}
            >
              Send Announcement
            </button>
          </div>
          <div className="RequestList">
            {selectedButton === 'button1' &&
              requests.map((request, index) => (
                <a
                  key={index}
                  className={`Requests ${selectedRequest === request ? 'selected' : ''}`}
                  onClick={() => handleClick(request.name)}
                >
                  {request.name}
                </a>
              ))}
          </div>
        </div>
        <div className="RemainingRectangle">
        {selectedButton === 'button1' && selectedRequest ? (
        <div className="SelectedRequest">
          
          <div className={`RequestInfo ${selectedRequest.styleClass}`}>
            {selectedRequest.description}
          </div>
          
          {selectedRequest.additionalContent}
        </div>
        ) : selectedButton === 'button2' ? (
          <div className="AnnouncementContainer">
        <textarea
        className="AnnouncementTextarea"
        value={announcementText}
        onChange={handleAnnouncementChange}
       placeholder="Enter your announcement here..."
      />
       <button
          className={`button-arounder ${loading ? 'loading' : ''} SubmitButtonn`}
          onClick={handleAnnouncementSubmit}
          disabled={loading}
        >
          {loading ? 'Loading...' : 'Submit'}
        </button>
  {announcementSent && (
     <div className="AnnouncementSentMessage">
    <p>The announcement has been sent.</p>
    </div>
  )}
</div>
        ) : (
          <p>Select from the panel to display</p>
        )}
      </div>
      </div>
        
      </div>
    );
}
export default Admintest;