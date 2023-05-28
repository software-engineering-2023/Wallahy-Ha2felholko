import './Client.css';

import creditCardIcon from './credit-card-icon.png';
import loansIcon from './loans-icon.png';
import transactionsIcon from './transaction-icon.png';
import transfersIcon from './transfers-icon.png';
import billsIcon from './bills-icon.png';

import {Link} from 'react-router-dom';
import Footer from './Footer.js';
import Header from './Header.js';

const Client = () => {
    
  
    return (
        <>
            <div className="clientCards">
                <button><img src={creditCardIcon}/><br/>Credit Cards</button>
                <button><img src={loansIcon}/><br/>Loans</button>
                <button><img src={transactionsIcon}/><br/>Transactions</button>
                <button><img src={transfersIcon}/><br/>Transfers</button>
                <button><img src={billsIcon}/><br/>Bills</button>
            </div>
        </>
    );
  };
  
  export default Client;