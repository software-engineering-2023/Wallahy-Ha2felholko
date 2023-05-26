
import Home from './Home';
import Banker from './Banker';

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
