import './Banker.css';
import logo from './nobg-logo.png';

function Banker() {
    return (
      <div className="Banker">
         <header className="header">
          <nav className="navigation">
           <div className="logo">
            <img src={logo} alt="Godfather Bank Logo" />
            <h1>Godfather Banks</h1>
            </div>
            <div className="control">
              <ul>
                <li><a href="/" className="active">Home</a></li>
              </ul>
            </div>
            <div className="user-area">
              <button className="register-button">Logout</button>
            </div>
          </nav>
        </header>
      </div>
    );
}
  
export default Banker;