import './Client.css';
import logo from './nobg-logo.png';
import {Link} from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';

const Client = () => {
    
  
    return (
        <>
            <div className="clientCards">
                <button>Credit Cards</button>
                <button>Loans</button>
                <button>Transactions</button>
                <button>Transfers</button>
                <button>Bills</button>
            </div>
        </>
    );
  };
  
  export default Client;