import './Client.css';

import creditCardIcon from '../img/credit-card-icon.png';
import loansIcon from '../img/loans-icon.png';
import transactionsIcon from '../img/transaction-icon.png';
import transfersIcon from '../img/transfers-icon.png';
import billsIcon from '../img/bills-icon.png';

import {Link} from 'react-router-dom';
import Footer from '../fixed/Footer.js';
import Header from '../fixed/Header.js';
import NotificationDropdown from '../fixed/NotificationDropdown';
import IssueReport from './IssueReport';

const Client = () => {
    
  
    return (
        <>
            <h1 className="clientTitle">Welcome Back, Mohamed !</h1>
            <h1 className="clientBalance">EGP 52,550</h1>
            <p className="clientBalanceLabel"> Account Balance</p>
            <hr className="balanceLine"/>
            <div className="clientCards">
                <button><img src={creditCardIcon}/><br/>Credit Cards</button>
                <button><img src={loansIcon}/><br/>Loans</button>
                <button><img src={transactionsIcon}/><br/>Transactions</button>
                <button><img src={transfersIcon}/><br/>Transfers</button>
                <button><img src={billsIcon}/><br/>Bills</button>
            </div>
            <div className="report-container">  
                <div className='reportButton'><IssueReport/></div>
            </div>
            
        </>
    );
  };
  
  export default Client;