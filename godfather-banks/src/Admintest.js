import { useState } from 'react';
import './Admintest.css';
import Shape from './shape'; // Import the Shape component
import ShapeRequestHandler from './ShapeRequestHandler';
import logo from './nobg-logo.png';

const Admintest = () => {
  const [selectedRequest, setSelectedRequest] = useState(null);

  return (
    <nav className="header">
      <div className="navigation">
        <div className="logo">
          <img src={logo} alt="Logo" />
          <h1>THE TEST</h1>
        </div>
        <ul>
          <li>
            <a href="/">home</a>
          </li>
        </ul>

        <Shape
          selectedRequest={selectedRequest}
          setSelectedRequest={setSelectedRequest}
        />
        <ShapeRequestHandler selectedRequest={selectedRequest} />
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

    </nav>
  );
};

export default Admintest;

