import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './screens/Home';
import LiveCasino from './screens/LiveCasino';
import SportsEsports from './screens/SportsEsports';

class App extends Component {
  render() {
    return (
      <>
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/live-casino" component={LiveCasino} />
            <Route path="/sports-esports" component={SportsEsports} />
          </Switch>
        </Router>
      </>
    );
  }
}

export default App;
