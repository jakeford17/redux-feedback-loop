import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Supported extends Component {
    state = {
        support: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value,
            button: false
        })
    }

    handleClick = (event) => {
        this.props.dispatch({type: 'SET_SUPPORTED', payload: this.state.support})
        console.log('From support: ', this.state.support)
    }

    render() {
        return (
            <Router>
            <h2>How was your instructor support today?</h2>
            <h3>(1 is "I might as well just learn this on my own" and 5 is "I couldn't be more supported")</h3>
            <h3>REQUIRED</h3>
            <div>
                <input className="radioInput" type="radio" name="supported" value="1" onChange={(event) => this.handleChange(event)} /> 1
                <input className="radioInput" type="radio" name="supported" value="2" onChange={(event) => this.handleChange(event)} /> 2
                <input className="radioInput" type="radio" name="supported" value="3" onChange={(event) => this.handleChange(event)} /> 3
                <input className="radioInput" type="radio" name="supported" value="4" onChange={(event) => this.handleChange(event)} /> 4
                <input className="radioInput" type="radio" name="supported" value="5" onChange={(event) => this.handleChange(event)} /> 5<br/><br/>
            </div>
            <br/>
            <Link to="/4"><button onClick={this.handleClick} disabled={this.state.button}>Next</button></Link>
            </Router>
        );
    }
}
//Link disables user from advancing to the next page without clicking a value
//When value is clicked, the event triggers the handleChange function, which changes 'button' in state...
//...This sets the 'support' value in state, which will be sent to 'SET_SUPPORTED' in the Redux Store's feedbackReducer...
//...This allows user to advance to the next (Comments.js)

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Supported);