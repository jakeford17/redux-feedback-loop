import React, { Component } from 'react';
import {HashRouter as Router, Link} from 'react-router-dom';
//Did not need Redux on this page

class Home extends Component {

    render() {
        return (
            <Router>
            <h2>Ready for Feedback?</h2>
            <Link to="/1"><button onClick={this.handleClick}>LET'S GO!</button></Link>
            </Router>
        );
    }
}
//On click of button, user will be directed to the beginning of the survery (Feeling.js)

export default Home;