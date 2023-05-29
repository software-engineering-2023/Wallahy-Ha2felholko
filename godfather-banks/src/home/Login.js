import React, { useState } from 'react';
import './Login.css';
import logo from '../img/nobg-logo.png';
import {Link,useHistory} from 'react-router-dom';

function Login  ()  {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
    if (!username || !password) {
        setErrorMessage('Please fill in the required fields');
    }
    else if(username=='admin'){
      history.push('/admin');

    }
    else if(username=='banker'){
      history.push('/banker');
    }
    else if(username=='client'||username=="mohamed"){
      history.push('/client');
    }
    else{
      setErrorMessage('Incorrect username');
    }
  
  };


  return (
    <div className="login-page">
      <header className="login-header">
        <nav className="login-navigation">
          <div className="login-logo">
          <img src={logo} alt="Godfather Bank Logo" />
          <h1>Godfather Banks</h1>
          </div>
          <Link to ='/'><button className="login-home-button">Home</button></Link>
        </nav>
      </header>
      <main className="login-content">
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className={errorMessage && !username ? 'error' : ''}
            />

            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className={errorMessage && !password ? 'error' : ''}
            />

            {errorMessage && ((!username || !password)|| username!='admin' ||username!='client'||username!='banker')&& (
              <p className="error-message">{errorMessage}</p>
            )}

            <button className="login2-button" type="submit">
              Login
            </button>
              
              <li><a href="/register">No Account? Create Now</a></li>
              <li><a href="/forgot-password">Forgot Password?</a></li>
          </form>
        </div>
      </main>
    </div>
  );
};

export default Login;
