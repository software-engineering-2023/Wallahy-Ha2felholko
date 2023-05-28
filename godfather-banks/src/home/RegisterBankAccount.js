import './RegisterBankAccount.css';
import logo from '../img/nobg-logo.png';
import { Link,useHistory } from 'react-router-dom';
import React, { useState } from 'react';


const RegisterBankAccount = () => {
    const history = useHistory();
    const [stage, setStage] = useState(1);
    const [personalInfo, setPersonalInfo] = useState({
    name: '',
    nationality: '',
    dob: '',
    email: '',
    phone: '',
  });
  const [accountInfo, setAccountInfo] = useState({
    gender: '',
    id: '',
    employment: '',
    sourceoffunds: '',
    toa: '',
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
    history.push('/confirmationBank');
  };

  return (
    <div className="registrationbank-page">
      <header className="registrationbank-header">
        <nav className="registrationbank-navigation">
          <div className="registrationbank-logo">
            <img src={logo} alt="Godfather Bank Logo" />
            <h1>Godfather Banks</h1>
            </div>
            <div className="registrationbank-creatingaccount">
            <h2>Registering for Banking account</h2>
            </div>
            <Link to ='/'><button className="registerbank-home-button">Home</button></Link>
        </nav>
      </header>
      <main className="registrationbank-content">
        <div className="registrationbank-form">
          {stage === 1 && (
            <div className="registrationbank-stage">
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

                <label htmlFor="dob">Date of birth</label>
                <input
                  type="text"
                  id="dob"
                  name="dob"
                  value={personalInfo.dob}
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

                <div className="registrationbank-navigation-buttons">
                  <button type="submit" className="next-button">
                    Next
                  </button>
                </div>
              </form>
            </div>
          )}

          {stage === 2 && (
            <div className="registrationbank-stage">
              <h2>Personal Information</h2>
              <form onSubmit={handleSubmit}>
                <label htmlFor="gender">Gender</label>
                <input
                  type="text"
                  id="gender"
                  name="gender"
                  value={accountInfo.gender}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="id">National/Passport ID</label>
                <input
                  type="text"
                  id="id"
                  name="id"
                  value={accountInfo.id}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="employment">Employment status</label>
                <input
                  type="text"
                  id="employment"
                  name="employment"
                  value={accountInfo.employment}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="sourceoffunds">Source of funds</label>
                <input
                  type="text"
                  id="sourceoffunds"
                  name="sourceoffunds"
                  value={accountInfo.sourceoffunds}
                  onChange={handleAccountInfoChange}
                  required
                />

                <label htmlFor="toa">Type of account</label>
                <input
                  type="text"
                  id="toa"
                  name="toa"
                  value={accountInfo.toa}
                  onChange={handleAccountInfoChange}
                  required
                />

                <div className="registrationbank-navigation-buttons">
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
          

          <div className="registrationbank-progress">
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

export default RegisterBankAccount;
