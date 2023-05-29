import './Header.css';
import logo from '../img//nobg-logo.png';
import {Link} from 'react-router-dom';
import NotificationDropdown from './NotificationDropdown';
import { useHistory } from 'react-router-dom';



function Header() {

  const history = useHistory();

    return (
        <header className="home-header">
        <nav className="home-navigation">
         <div className="home-logo">
          <img src={logo} alt="Godfather Bank Logo" />
          <h1>Godfather Banks</h1>
          </div>
          <div className="home-user-area">
            <NotificationDropdown/>
            <Link to ='/login'><button className="home-login-button">Logout</button></Link>
          </div>
        </nav>
      </header>
        
    );
  }
  
  export default Header;