import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';
import axios from 'axios';

class Review extends Component {

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
            <>
            <Router>
            <h1>Review Feedback</h1>
            <h3>How I feel today on a scale from 1-5:</h3> {this.props.reduxStore.feedbackReducer[0]}<br/>
            <h3>How I understand today's material on a scale from 1-5:</h3> {this.props.reduxStore.feedbackReducer[1]}<br/>
            <h3>How supported I feel on a scale from 1-5:</h3> {this.props.reduxStore.feedbackReducer[2]}<br/>
            <h3>Additional comments:</h3>
            <p>{this.props.reduxStore.feedbackReducer[3]}</p>
            <br/>
            <Link to="/success"><button onClick={this.handleClick}>SUBMIT!</button></Link>
            </Router>
            </>
        );
    }
}
//This page grabs values from the Redux Store (state array index values in the feedback reducer) and displays them on the DOM
//Once reviewed, user can click "Submit", which takes them to Success.js...
//...This also triggers the handleClick function, which makes an axios POST to send feedback to the database...
//...It also clears the state array in the feedback reducer after the POST is made to reset the fields

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Review);