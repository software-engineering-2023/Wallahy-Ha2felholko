
import Home from './Home';
<<<<<<< HEAD
import Banker from './Banker';
=======
import Login from  './Login';
>>>>>>> ea20d464023a5a31ea5aa30ddc0a28e25d02577b

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
<<<<<<< HEAD
            <Route exact path="/Banker">
              <Banker />
=======
            <Route exact path="/login">
              <Login />
>>>>>>> ea20d464023a5a31ea5aa30ddc0a28e25d02577b
            </Route>
          </Switch>
       </div>
    </div>
    </Router>
  );
}

export default App;
