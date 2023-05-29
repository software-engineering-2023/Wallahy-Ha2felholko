import './Banker.css';
import React, { useState } from 'react';

function Banker() {
  const [infoVisible, setInfoVisible] = useState(false);
  const [infoVisible2, setInfoVisible2] = useState(false);
  const [selectedButton, setSelectedButton] = useState(null);
  const [selectedRequest, setSelectedRequest] = useState(null);
  const [selectedNotif, setSelectedNotif] = useState(null);
  const [readRequests, setReadRequests] = useState([]);
  const [readNotifications, setReadNotifications] = useState([]);
  const [requests, setRequests] = useState(["The user requested a new bank account.",
  "The user requested a new loan. Reason of the loan: new house.",
  "The user requested a new credit card issuance.",
  "User requested a new bank account.",
  "User requested a new loan. Reason of the loan: new house.",
  "User requested a new credit card issuance.",
  "The user request a new bank account.",
  "The user request a new loan. Reason of the loan: new house.",
  "The user request a new credit card issuance.",
  "The user requested new bank account.",
  "The user requested new loan. Reason of the loan: new house.",
  "The user requested new credit card issuance.",
  "The user requested a new bank account",
  "The user requested a new loan. Reason of the loan: new house",
  "The user requested a new credit card issuance",
  "The user requested a bank account.",
  "The user requested a loan. Reason of the loan: new house",
  "The user requested a credit card issuance.",,])
  const [notifications, setNotifications] = useState([
    "Dear Marwan, Welcome to our prestigious banking institution! We are thrilled to have you as part of our team. If you have any questions or need assistance, feel free to reach out to our HR department.",
    "Dear Marwan, We are pleased to inform you that our banking system will undergo a scheduled upgrade this weekend. Some services may be temporarily unavailable during this time. We appreciate your cooperation.",
    "Dear Marwan, Just a friendly reminder that the annual compliance training is due by the end of the week. Please ensure you complete the training module to stay up to date with regulatory requirements.",
    "Dear Marwan, We are excited to announce the launch of a new financial product. Please familiarize yourself with the product details, as clients may have inquiries. Training sessions will be scheduled to provide more information.",
    "Dear Marwan, We have an important team meeting scheduled for tomorrow at 10:00 AM in the conference room. Your presence is required, and we look forward to your active participation.",
    "Dear Marwan, As we approach the holiday season, please note that our offices will be closed on [specific dates]. We wish you a joyful holiday season and look forward to your continued dedication in the new year.",
    "Dear Marwan, It's time to celebrate your hard work and dedication! Join us for our annual employee appreciation event on [date] at [venue]. Enjoy an evening of entertainment, networking, and recognition.",
    "Dear Marwan, This is a reminder that your performance evaluation is scheduled for next week. Please review your goals and achievements beforehand to facilitate a productive discussion.",
    "Dear Marwan, We are pleased to invite you to a customer service training workshop next week. This workshop aims to enhance your skills in providing exceptional service to our valued clients. Please confirm your attendance.",
    "Dear Marwan, We are organizing a charity drive in support of [cause]. Your participation and contribution would make a significant difference. Stay tuned for more details on how you can get involved.",
    "Dear Marwan, We would like to inform you about an update to our internal policies. Please review the revised policy document available in the shared drive and familiarize yourself with the changes.",
    "Dear Marwan, An exclusive training opportunity has arisen in the area of [subject]. This program aims to enhance your professional development. If you are interested, please contact the HR department for further details.",
    "Dear Marwan, As a reminder, the team-building activity is scheduled for this Friday. We encourage your active participation to foster teamwork and strengthen professional relationships. Don't forget to RSVP.",
    "Dear Marwan, After 5 years of dedicated service, our esteemed colleague Mohamed Abdelwahab has decided to retire. We invite you to join us in celebrating their achievements and bid them farewell during the retirement gathering.",
    "Dear Marwan, We have an important budget planning meeting scheduled for next week. Your insights and input are valuable for developing strategic financial plans. Please come prepared with your department's budget proposals.",
    "Dear Marwan, Protecting our customers from fraud is a top priority. We have scheduled a mandatory fraud awareness training session for all employees. Your participation is vital in maintaining a secure banking environment.",
    "Dear Marwan, We are pleased to inform you about an update to our employee benefits package. Please review the revised benefits guide to understand the new offerings and take advantage of the available resources.",
    "Dear Marwan, As part of our commitment to ensuring the safety of our employees and clients, an emergency response drill has been scheduled for [date]. Familiarize yourself with the emergency procedures and be prepared to participate.",
  ]);

  const handleDeleteClick = () => {
    if (selectedNotif) {
      setNotifications((prevNotifs) => {
        const updatedNotifs = [...prevNotifs];
        const index = updatedNotifs.indexOf(selectedNotif);
        if (index !== -1) {
          updatedNotifs.splice(index, 1);
        }
        return updatedNotifs;
      });
      setSelectedNotif(null);
    }
  };

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

  const handleInfoClose3 = () => {
    setInfoVisible2(false);
  }

  const handleButtonClick3 = () => {
    setInfoVisible2(true);
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
                <h2>Request from marwan.elsayed@student.guc.edu.eg:</h2>
                <p1>{selectedRequest}</p1>
                <h6>Sent: Saturday, May 27, 2023 11:36 AM</h6>
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
            <h3>Hold Up</h3>
            <p>Are you sure you want to reject?</p>
            <button className="CancelButton" onClick={handleInfoClose}>
              Cancel
            </button>
            <button className="RejectConfirmButton" onClick={handleInfoClose2}>
              Reject
            </button>
          </div>
          )}
          {infoVisible2 && (
                <div className="info-tab2">
                  <h3>Client's Info</h3>
                  <p>• Full Name: Marwan Yehia Elsayed Abdelhamid</p>
                  <p>• Nationality: Egyptian</p>
                  <p>• Date Of Birth: 08/06/2002</p>
                  <p>• Gender: Male</p>
                  <p>• National/Passport ID: XXXXXXXX</p>
                  <p>• Phone Number: 01066292912</p>
                  <p>• Employment Status: Employed</p>
                  <p>• Source Of Funds: Job</p>
                  <p>• Type Of Account: Credit</p>
                  <button className="CancelButton" onClick={handleInfoClose3}>
                    Cancel
                  </button>
                </div>
                )}
          <a className="UserInfoButton" onClick={handleButtonClick3}>Click here to view client's info</a>
              </div>
            ) : (
              <p>Select a request to display</p>
            )
            ) : (
              selectedNotif ? (
                <div className="SelectedNotif">
                  <h2>Notification from nada.labib@guc.edu.eg:</h2>
                  <p1>{selectedNotif}</p1>
                  <h6>Sent: Saturday, May 27, 2023 11:36 AM</h6>
                  <a className="UserInfoButton" onClick={handleDeleteClick}>Click here to dismiss</a>
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