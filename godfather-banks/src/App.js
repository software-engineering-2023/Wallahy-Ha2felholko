
import Home from './Home';
import Banker from './Banker';
import Login from  './Login';
import Register from './Register';

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
            <Route exact path="/register">
              <Register />
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
