import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';
import axios from 'axios'


class Success extends Component {

    handleClick = (event) => {
        console.log("SUBMIT CLICKED");
        let feedBackData = this.props.reduxStore.feedbackReducer
        axios.post('/feedback', feedBackData)
        .then((response) => {
            console.log("response", response);
        }).catch(error => {
            console.log("error: ", error);
        })
        this.props.dispatch({type: 'CLEAR'})
    }

    render() {
        return (
            <Router>
            <h1>THANKS FOR YOUR FEEDBACK!</h1>
            <Link to="/"><button onClick={this.handleClick}>Add More Feedback!</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Success);