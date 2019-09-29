import React, { Component } from 'react';
import './App.css';
import {HashRouter as Router, Route} from 'react-router-dom';
import Home from '../Home/Home';
import Feeling from '../Feeling/Feeling';
import Understanding from '../Understanding/Understanding';
import Supported from '../Supported/Supported';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Success from '../Success/Success';
import Admin from '../Admin/Admin';
// import { connect } from 'react-redux';
//Redux not used in this component

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">FEEDBACK</h1>
          <h2><strong>Don't forget it!</strong></h2>
        </header>
        <br/>
        <Route path="/" exact component={Home} />
        <Route path="/1" component={Feeling}/>
        <Route path="/2" component={Understanding}/>
        <Route path="/3" component={Supported} />
        <Route path="/4" component={Comments} />
        <Route path="/review" component={Review} />
        <Route path="/success" component={Success} />
        <Route path="/admin" component={Admin} />
      </div>
      </Router>
    );
  }
}

export default App;
