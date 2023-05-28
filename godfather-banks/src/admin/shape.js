import React, { useState } from 'react';
import './Admintest.css';

const Shape = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const requests = ['Stolen Card', 'Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5', 'Test 6', 'Test 7', 'Test 8', 'Test 9']; // Example requests data
  

  const handleButtonClick = (request) => {
    setSelectedRequest(request);
  };

  return (
    <div className="oblong-shape">
      <h2>Requests</h2>
      <div className="request-list">
        <ul className='Buttons-list'>

        {requests.map((request, index) => (
            <li key={index}>
              <button onClick={() => handleButtonClick(request)}>{request}</button>
            </li>
          ))}

        </ul>

      </div>
      {selectedRequest && (
        <div className="shape-request-handler">
          <h2>Request Details</h2>
         
        </div>
      )}
    </div>
  );
};

export default Shape;