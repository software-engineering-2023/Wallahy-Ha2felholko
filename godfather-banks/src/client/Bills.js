import './Bills.css';

import creditCardIcon from '../img/credit-card-icon.png';
import loansIcon from '../img/loans-icon.png';
import transactionsIcon from '../img/transaction-icon.png';
import transfersIcon from '../img/transfers-icon.png';
import billsIcon from '../img/bills-icon.png';

import { useHistory } from 'react-router-dom';


const Bills = () => {

    const history = useHistory();

  const handleClick = (url) => {
   history.push(url);
  };
  
    
  
    return (
        <>
            <div className='payBillContainer' > 
            < button onClick={() => handleClick('/client/bills/pay')}  className="clientCardButton2">Pay Bill</button>
             < button  onClick={() => handleClick('/client/bills/set')}className="clientCardButton2">Set A Reminder</button> </div>
        </>
    );
  };
  
  export default Bills;