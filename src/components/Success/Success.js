import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';


class Success extends Component {

    handleClick = (event) => {
        console.log("SUBMIT CLICKED");
    }

    render() {
        return (
            <Router>
            <h1>THANKS FOR YOUR FEEDBACK!</h1>
            <Link to="/"><button onClick={this.handleClick}>SUBMIT!</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Success);