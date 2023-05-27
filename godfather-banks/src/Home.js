import './Home.css';
import logo from './nobg-logo.png';

import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
         <header className="header">
          <nav className="navigation">
           <div className="logo">
            <img src={logo} alt="Godfather Bank Logo" />
            <h1>Godfather Banks</h1>
            </div>
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
            <div className="user-area">
              <Link to ='/login'><button className="login-button">Login</button></Link>
              <button className="register-button">Register</button>
            </div>
          </nav>
        </header>
        <main className="content">
          <div className="hero-section">
            <h2>Welcome to Godfather Banks</h2>
            <p>
              TRUST YOU MUST
            </p>
          </div>
          <div className="features-section">
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-wallet"></i>
              </div>
              <h3>Personal Banking</h3>
              <p>Manage your finances with ease and security.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-money-check-alt"></i>
              </div>
              <h3>Loans and Mortgages</h3>
              <p>Get competitive rates on loans and mortgages.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">
                <i className="fas fa-credit-card"></i>
              </div>
              <h3>Credit Cards</h3>
              <p>Enjoy exclusive rewards with our credit cards.</p>
            </div>

          </div>
          <div className="learn-more-container">
              <button className="learn-more-button">Learn More</button>
            </div>
        </main>
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
  
  export default Home;