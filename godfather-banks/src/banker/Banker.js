import './Banker.css';
import React, { useState } from 'react';

function Banker() {
  const [infoVisible, setInfoVisible] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedNotif, setSelectedNotif] = useState(null);
  const [readRequests, setReadRequests] = useState([]);
  const [readNotifications, setReadNotifications] = useState([]);
  const [requests, setRequests] = useState(["Request 1",
  "Request 2",
  "Request 3",
  "Request 44444444444444444444444444444444444444444444444444 with some extra text to overflow",
  "Request 5",
  "Have a nice day!",
  "Have a nice day!!",
  "Have a nice day!!!",
  "Have a nice day!!!!",
  "Have a nice day!!!!!",
  "Have a nice day!!!!!!",
  "Have a nice day!!!!!!!",
  "Have a nice day!!!!!!!!",
  "Have a nice day!!!!!!!!!",
  "Have a nice day!!!!!!!!!!",
  "Have a nice day!!!!!!!!!!!",
  "Have a nice day!!!!!!!!!!!!",])

  const handleAccept = () => {
    if (selectedRequest) {
      setRequests((prevRequests) => {
        const updatedRequests = [...prevRequests];
        const index = updatedRequests.indexOf(selectedRequest);
        if (index !== -1) {
          updatedRequests.splice(index, 1);
        }
        return updatedRequests;
      });
      setSelectedRequest(null);
    }
  };

  const handleButtonClick2 = () => {
    setInfoVisible(true);
  };

  const handleInfoClose = () => {
    setInfoVisible(false);
  }

  const handleInfoClose2 = () => {
    setInfoVisible(false);
    if (selectedRequest) {
      setRequests((prevRequests) => {
        const updatedRequests = [...prevRequests];
        const index = updatedRequests.indexOf(selectedRequest);
        if (index !== -1) {
          updatedRequests.splice(index, 1);
        }
        return updatedRequests;
      });
      setSelectedRequest(null);
    }
  };

  const handleButtonClick = (button) => {
      setSelectedButton(button);
      setSelectedRequest(null);
      setSelectedNotif(null);
  };

  const handleClick = (requests) => {
    setSelectedRequest(requests);
    if (!readRequests.includes(requests)) {
      setReadRequests([...readRequests, requests]);
    }
  };

  const handleClick2 = (notifications) => {
    setSelectedNotif(notifications);
    if (!readNotifications.includes(notifications)) {
      setReadNotifications([...readNotifications, notifications]);
    }
  };

    

    const notifications = [
      "Notification 1",
      "Notification 2",
      "Notification 3",
      "Notification 44444444444444444444444444444444444444444444444444 switch back to requests :)",
      "Notification 5",
      "Einen schönen Tag noch!",
      "Einen schönen Tag noch!!",
      "Einen schönen Tag noch!!!",
      "Einen schönen Tag noch!!!!",
      "Einen schönen Tag noch!!!!!",
      "Einen schönen Tag noch!!!!!!",
      "Einen schönen Tag noch!!!!!!!",
      "Einen schönen Tag noch!!!!!!!!",
      "Einen schönen Tag noch!!!!!!!!!",
      "Einen schönen Tag noch!!!!!!!!!!",
      "Einen schönen Tag noch!!!!!!!!!!!",
      "Einen schönen Tag noch!!!!!!!!!!!!",
      "Einen schönen Tag noch!!!!!!!!!!!!!",
    ];

    return (
      <div className="Banker">
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
                  className={`Requests ${selectedRequest === requests ? "selected" : ""} ${readRequests.includes(requests) ? 'read' : ''}`}
                  onClick={() => handleClick(requests)}
                >
                  {requests}
                </a>
              ))
            ) : (
              notifications.map((notifications, index) => (
                <a
                  key={index}
                  className={`Notifications ${selectedNotif === notifications ? "selected" : ""} ${readNotifications.includes(notifications) ? 'read' : ''}`}
                  onClick={() => handleClick2(notifications)}
                >
                  {notifications}
                </a>
            )))
              }
            </div>
          </div>
        <div className="RemainingRectangle">
        {selectedButton === 'button1' ?
        (selectedRequest ? (
              <div className="SelectedRequest">
                <h2>Request from *ADD USERNAME HERE*:</h2>
                <p1>{selectedRequest}</p1>
                <h6>*ADD TIME SENT HERE*</h6>
                <div className="AccRejButtons">
          <button 
          className="AcceptButton"
          onClick={handleAccept}
          >
            Accept
          </button>
          <button
            className="RejectButton"
            onClick={handleButtonClick2}
          >
            Reject
          </button>
        </div>
        {infoVisible && (
          <div className="info-tab">
            <h3>Info</h3>
            <p>Are you sure you want to reject?</p>
            <button className="CancelButton" onClick={handleInfoClose}>
              Cancel
            </button>
            <button className="RejectConfirmButton" onClick={handleInfoClose2}>
              Reject
            </button>
          </div>
          )}
              </div>
            ) : (
              <p>Select a request to display</p>
            )
            ) : (
              selectedNotif ? (
                <div className="SelectedNotif">
                  <h2>Notification from *ADD SOURCE IF AVAILABLE*:</h2>
                  <p1>{selectedNotif}</p1>
                  <h6>*ADD TIME SENT HERE*</h6>
                </div>
            ) : (
              <p>Select a notification to display</p>
            )
            )}
        </div>
      </div>
      </div>
    );
}
  
export default Banker;