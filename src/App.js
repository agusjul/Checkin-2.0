import React from 'react';
import Homepage from './compoents/home/homepage';
import Warningpage from './compoents/reject/reject';
import Validationpage from './compoents/validate/validationpage';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

class App extends React.Component {
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/reject">
            <Warningpage/>
          </Route>
          <Route path="/validate">
            <Validationpage/>
          </Route>
          <Route path="/">
            <Homepage/>
          </Route>
        </Switch>
      </Router>
      
    )
  }
}

export default App;
