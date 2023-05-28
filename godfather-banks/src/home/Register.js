import './Register.css';
import logo from '../img/nobg-logo.png';
import { Link,useHistory } from 'react-router-dom';
import React, { useState } from 'react';


const Register = () => {
    const history = useHistory();
    const [stage, setStage] = useState(1);
    const [personalInfo, setPersonalInfo] = useState({
    name: '',
    nationality: '',
    id: '',
    email: '',
    phone: '',
  });
  const [accountInfo, setAccountInfo] = useState({
    username: '',
    password: '',
    confirmPassword: '',
    accountNumber: '',
    creditNumber: '',
  });

  const handlePersonalInfoChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleAccountInfoChange = (e) => {
    const { name, value } = e.target;
    setAccountInfo((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleNextStage = () => {
    setStage((prevStage) => prevStage + 1);
  };

  const handlePreviousStage = () => {
    setStage((prevStage) => prevStage - 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    history.push('/confirmation');
  };

  return (
    <div className="registration-page">
      <header className="registration-header">
        <nav className="registration-navigation">
          <div className="registration-logo">
            <img src={logo} alt="Godfather Bank Logo" />
            <h1>Godfather Banks</h1>
            </div>
            <div className="registration-creatingaccount">
            <h2>Registering for an account</h2>
            </div>
            <Link to ='/'><button className="register-home-button">Home</button></Link>
        </nav>
      </header>
      <main className="registration-content">
        <div className="registration-form">
          {stage === 1 && (
            <div className="registration-stage">
              <h2>Personal Information</h2>
              <form onSubmit={handleNextStage}>
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={personalInfo.name}
                  onChange={handlePersonalInfoChange}
                  required
                />

                <label htmlFor="nationality">Nationality</label>
                <input
                  type="text"
                  id="nationality"
                  name="nationality"
                  value={personalInfo.nationality}
                  onChange={handlePersonalInfoChange}
                  required
                />

                <label htmlFor="id">National/Passport ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={personalInfo.id}
                  onChange={handlePersonalInfoChange}
                  required
                />

                <label htmlFor="email">Email Address</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={personalInfo.email}
                  onChange={handlePersonalInfoChange}
                  required
                />

                <label htmlFor="phone">Phone Number</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={personalInfo.phone}
                  onChange={handlePersonalInfoChange}
                  required
                />

                <div className="registration-navigation-buttons">
                <li class="no-account-link"><a href="/registerBankAccount">No Bank Account? Create Now</a></li>
                  <button type="submit" className="next-button">
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          {stage === 2 && (
            <div className="registration-stage">
              <h2>Account Information</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="username">Username</label>
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={accountInfo.username}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={accountInfo.password}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="confirm-password">Confirm Password</label>
                <input
                  type="password"
                  id="confirm-password"
                  name="confirmPassword"
                  value={accountInfo.confirmPassword}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="account-number">Bank Account Number</label>
                <input
                  type="text"
                  id="account-number"
                  name="accountNumber"
                  value={accountInfo.accountNumber}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="credit-number">Credit Card Number</label>
                <input
                  type="text"
                  id="credit-number"
                  name="creditNumber"
                  value={accountInfo.creditNumber}
                  onChange={handleAccountInfoChange}
                  required
                />

                <div className="registration-navigation-buttons">
                <li class="no-account-link"><a href="/registerBankAccount">No Bank Account? Create Now</a></li>
                  <button type="button" className="previous-button" onClick={handlePreviousStage}>
                    Previous
                  </button>
                  <button type="submit" className="register-button">
                    Register
                  </button>
                </div>
              </form>
            </div>
          )}
          

          <div className="registration-progress">
            <div className={`progress-bar stage-${stage}`}></div>
            <div className="progress-steps">
              <div className={`progress-step ${stage == 1 ? 'active' : ''}`}>
                <span>1</span>
                <p>Personal Info</p>
              </div>
              <div className={`progress-step ${stage == 2 ? 'active' : ''}`}>
                <span>2</span>
                <p>Account Info</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Register;
