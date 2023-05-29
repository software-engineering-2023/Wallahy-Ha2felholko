import './Home.css';
import logo from '../img/nobg-logo.png';

import {Link} from 'react-router-dom';

function Home() {
    return (
      <div className="Home">
         <header className="home-header">
          <nav className="home-navigation">
           <div className="home-logo">
            <img src={logo} alt="Godfather Bank Logo" />
            <h1>Godfather Banks</h1>
            </div>
            <ul>
              <li><a href="/" className="active">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact us</a></li>
            </ul>
            <div className="home-user-area">
              <Link to ='/login'><button className="home-login-button">Login</button></Link>
              <Link to ='/register'><button className="home-register-button">Register</button></Link>
            </div>
          </nav>
        </header>
        <main className="home-content">
          <div className="home-hero-section">
            <h2>Welcome To Godfather Banks</h2>
            <p>
              TRUST YOU MUST
            </p>
          </div>
          <div className="home-features-section">
            <div className="home-feature-card">
              <div className="homefeature-icon">
                <i className="home-fas fa-wallet"></i>
              </div>
              <h3>Personal Banking</h3>
              <p>Manage your finances with ease and security.</p>
            </div>
            <div className="home-feature-card">
              <div className="home-feature-icon">
                <i className="home-fas fa-money-check-alt"></i>
              </div>
              <h3>Loans and Mortgages</h3>
              <p>Get competitive rates on loans and mortgages.</p>
            </div>
            <div className="home-feature-card">
              <div className="home-feature-icon">
                <i className="home-fas fa-credit-card"></i>
              </div>
              <h3>Credit Cards</h3>
              <p>Enjoy exclusive rewards with our credit cards.</p>
            </div>

          </div>
          <div className="home-learn-more-container">
              <button className="home-learn-more-button">Learn More</button>
            </div>
        </main>
      </div>
    );
  }
  
  export default Home;