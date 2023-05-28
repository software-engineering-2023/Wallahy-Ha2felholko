
import Home from './Home';
import Banker from './Banker';
import Login from  './Login';
import Admintest from './Admintest';
import Register from './Register';
import RegisterBank from './RegisterBankAccount';
import ConfirmationBank from './ConfirmationBank';
import Confirmation from './Confirmation';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
 
function App() {
  return (
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
              <Admintest />
            </Route>
            <Route exact path="/register">
              <Register />
            </Route>
            <Route exact path="/registerBankAccount">
              <RegisterBank />
            </Route>
            <Route exact path="/Banker">
              <Banker />
            </Route>
          </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
