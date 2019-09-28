import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

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

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Home);