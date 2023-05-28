import React from 'react';
import logo from '../img/nobg-logo.png';
import greenCheck from '../img/greenCheck.png';
import './Confirmation.css';
import { Link } from 'react-router-dom';

const Confirmation = () => {
  return (
    <div className="confirmation-page">
      <header className="confirmation-registration-header">
        <nav className="confirmation-registration-navigation">
          <div className="confirmation-registration-logo">
            <img src={logo} alt="Godfather Bank Logo" />
            <h1>Godfather Banks</h1>
          </div>
          <Link to ='/'><button className="Confirmation-home-button">Home</button></Link>
        </nav>
      </header>

      <main className="confirmation-content">
        <div className="confirmation-message">
          <img src={greenCheck} alt="Green Check" />
          <h2>You have been registered successfully!</h2>
          <p>We will verify the provided information and activate your account, then promptly contact you to confirm the activation process.</p>
        </div>
      </main>

      <footer className="registration-footer">
        <p>&copy; 2023 Godfather Bank. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Confirmation;
