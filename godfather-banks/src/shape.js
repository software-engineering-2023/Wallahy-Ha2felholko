import React, { useState } from 'react';
import './Admintest';

const Shape = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  const requests = ['Stolen Card']; // Example requests data

  const handleRequestHover = (request) => {
    setSelectedRequest(request);
  };

  return (
    <div className="oblong-shape">
      <h2>Requests</h2>
      <div className="request-list">
        <ul>
          {requests.map((request, index) => (
            <li
              key={index}
              onMouseEnter={() => handleRequestHover(request)}
              onMouseLeave={() => handleRequestHover(null)}
            >
              {request}
            </li>
          ))}
        </ul>
      </div>
      {selectedRequest && (
        <div className="shape-request-handler">
          <h2>Request Details</h2>
          <p>{selectedRequest}</p>
        </div>
      )}
    </div>
  );
};

export default Shape;