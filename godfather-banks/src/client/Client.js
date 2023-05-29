import './Client.css';

import creditCardIcon from '../img/credit-card-icon.png';
import loansIcon from '../img/loans-icon.png';
import transactionsIcon from '../img/transaction-icon.png';
import transfersIcon from '../img/transfers-icon.png';
import billsIcon from '../img/bills-icon.png';

import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import IssueReport from './IssueReport';
import CloseAccountButton from './CloseAccountButton';

const Client = () => {

  const history = useHistory();

  const handleClick = (url) => {
   history.push(url);
  };
    
  
    return (
        <>
            <h1 className="clientTitle">Welcome Back, Mohamed !</h1>
            <h1 className="clientBalance">EGP 52,550</h1>
            <p className="clientBalanceLabel"> Account Balance</p>
            <hr className="balanceLine"/>
            <div className="clientCards">
                <button className="clientCardButton" onClick={() => handleClick('/client/credit')}><img src={creditCardIcon}/><br/>Credit Cards</button>
                <button className="clientCardButton" onClick={() => handleClick('/client/loan')}><img src={loansIcon}/><br/>Loans</button>
                <button className="clientCardButton"  onClick={() => handleClick('/client/trans')}><img src={transactionsIcon}/><br/>Transactions</button>
                <button className="clientCardButton" onClick={() => handleClick('/client/Transfers')} ><img src={transfersIcon}/><br/>Transfers</button>
                <button className="clientCardButton" onClick={() => handleClick('/client/bills')}><img src={billsIcon}/><br/>Bills</button>
            </div>
            <div className="report-container">  
            <CloseAccountButton/>
            <IssueReport/>
            </div>
        </>
    );
  };
  
  export default Client;