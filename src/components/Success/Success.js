import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';


class Success extends Component {

    render() {
        return (
            <Router>
            <h1>THANKS FOR YOUR FEEDBACK!</h1>
            <Link to="/"><button>Add More Feedback!</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})
//This page confirms to the user that their feedback was submitted them and also allows them to go home and submit more feedback

export default connect(mapStateToProps)(Success);