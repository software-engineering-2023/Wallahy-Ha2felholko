import React, { useState } from 'react';
import './CreditCard.css';
import CreditCardTransactions from './CreditCardTransactions';
import PayCreditBill from './PayCreditBill';
import CreditPoints from './CreditPoints';
import CreditCardApplication from './CreditCardApplication';

const CreditCard = () => {

    const [selectedCard, setSelectedCard] = useState('');

    const handleCardChange = (event) => {
        setSelectedCard(event.target.value);
    };

    return (
        <>
            <div className='topBgad'>
                <h1 className="creditHeader">Credit Cards</h1>
                <div className="topContainer">
                    <select className="cardSelect" value={selectedCard} onChange={handleCardChange}>
                        <option value="platinum">My Platinum Card</option>
                        <option value="trust">My TrustMust Card</option>
                    </select>
                    <CreditCardApplication className='creditApplicationButton'/>
                </div>
            </div>
            <div key={selectedCard} className="creditParentContainer">
                <div className='creditTransactions creditFlexItem'>
                    <h3 className="creditSubHead">Transactions</h3>
                    <CreditCardTransactions className="creditTransactionsComp"/>
                </div>
                <div className='creditPayBill creditFlexItem'>
                    <h3 className="creditSubHead">Credit Bill</h3>
                    <PayCreditBill/>
                </div>
                <div className='creditPoints creditFlexItem'>
                    <h3 className="creditSubHead">Credit Points</h3>
                    <CreditPoints className="testy"/>
                </div>
            </div>
        </>
    );
};

export default CreditCard;
