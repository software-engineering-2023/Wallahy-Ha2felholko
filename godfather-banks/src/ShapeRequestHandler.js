import React from 'react';
import './Admintest.css'; // Import the admin.css file


const ShapeRequestHandler = ({ selectedRequest }) => {
    const requestInfo = {
      'Stolen Card': 'This card has been stolen for over 10 days. Please report the issue further.',
      // Add more request information as needed
    };
  
    const additionalInfo = requestInfo[selectedRequest];
  
    return (
      <div className="shape-request-handler">
        <h2>Selected Request</h2>
        {selectedRequest ? (
          <>
            <p>{selectedRequest}</p>
            <p>{additionalInfo}</p>
          </>
        ) : (
          <p>No request selected</p>
        )}
      </div>
    );
  };
  
  export default ShapeRequestHandler;