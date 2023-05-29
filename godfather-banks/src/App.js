import Header from './fixed/Header';

import Home from './home/Home';
import Banker from './banker/Banker';
import Login from  './home/Login';
import Admintest from './admin/Admintest';
import Register from './home/Register';
import RegisterBank from './home/RegisterBankAccount';
import ConfirmationBank from './home/ConfirmationBank';
import Confirmation from './home/Confirmation';
import Client from './client/Client';
import Bills from './client/Bills';
import BillPayment from './client/BillPayment';
import BillReminderButton from './client/BillReminder';
import Loan from './client/Loan';


import Footer from './fixed/Footer';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreditCard from './client/CreditCard';
import Trans from './client/Trans';
import Transfers from './client/Transfers';

 
function App() {
  return (
    <>
    <Router>
    <div className="App">
       <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/confirmation">
              <Confirmation />
            </Route>
            <Route exact path="/confirmationBank">
              <ConfirmationBank />
            </Route>
            <Route exact path="/admin">
              <Header/>
              <Admintest />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/registerBankAccount">
              <RegisterBank />
            </Route>
            <Route exact path="/banker">
              <Header/>
              <Banker />
            </Route>
            <Route exact path="/client">
              <Header/>
              <Client />
            </Route>
            <Route exact path="/client/bills">
              <Header/>
              <Bills/>
            </Route>
            <Route exact path="/client/bills/pay">
              <Header/>
              <BillPayment/>
            </Route>
            <Route exact path="/client/bills/set">
              <Header/>
              <BillReminderButton/>
            </Route>
            <Route exact path="/client/loan">
              <Header/>
              <Loan/>
            </Route>
            <Route exact path="/client/Transfers">
              <Header/>
              <Transfers/>
            </Route>
            <Route exact path="/client/trans">
              <Header/>
              <Trans/>
            </Route>
            <Route exact path="/client/credit">
              <Header/>
              <CreditCard/>
            </Route>
          </Switch>
       </div>
    </div>
    </Router>
    <Footer/>
    </>
  );
}

export default App;
