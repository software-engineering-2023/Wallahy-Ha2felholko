
import Home from './Home';
import Login from  './Login';

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
          </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
