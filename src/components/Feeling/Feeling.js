import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Feeling extends Component {

    state = {
        feeling: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value,
            button: false
        })
    }

    handleClick = (event) => {
        this.props.dispatch({type: 'SET_FEELINGS', payload: this.state.feeling})
        console.log('From feeling: ', this.state.feeling)
    }

    render() {
        return (
            <Router>
            <h2>How are you feeling today?</h2>
            <h3>(1 is terrible and 5 is awesome)</h3>
            <h3>REQUIRED</h3>
            <div>
                <input className="radioInput" type="radio" name="feeling" value="1" onChange={(event) => this.handleChange(event)} /> 1
                <input className="radioInput" type="radio" name="feeling" value="2" onChange={(event) => this.handleChange(event)} /> 2
                <input className="radioInput" type="radio" name="feeling" value="3" onChange={(event) => this.handleChange(event)} /> 3
                <input className="radioInput" type="radio" name="feeling" value="4" onChange={(event) => this.handleChange(event)} /> 4
                <input className="radioInput" type="radio" name="feeling" value="5" onChange={(event) => this.handleChange(event)} /> 5<br/><br/>
            </div>
            <br/>
            <Link to="/2"><button onClick={this.handleClick} disabled={this.state.button}>Next</button></Link>
            </Router>
        );
    }
}
//Link disables user from advancing to the next page without clicking a value
//When value is clicked, the event triggers the handleChange function, which changes 'button' in state...
//...This sets the 'feeling' value in state, which will be sent to 'SET_FEELINGS' in the Redux Store's feedbackReducer...
//...This allows user to advance to the next (Understanding.js)

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling);