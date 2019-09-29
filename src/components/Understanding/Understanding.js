import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Understanding extends Component {

    state = {
        understanding: '',
        button: true
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value,
            button: false
        })
    }

    handleClick = (event) => {
        this.props.dispatch({type: 'SET_UNDERSTANDING', payload: this.state.understanding})
        console.log('From understanding: ', this.state.understanding)
    }

    render() {
        return (
            <Router>
            <h2>How well do you understand today's material?</h2>
            <h3>(1 is "I'm so lost!" and 5 is "I'm an expert!")</h3>
            <h3>REQUIRED</h3>
            <div>
                <input className="radioInput" type="radio" name="understanding" value="1" onChange={(event) => this.handleChange(event)} /> 1
                <input className="radioInput" type="radio" name="understanding" value="2" onChange={(event) => this.handleChange(event)} /> 2
                <input className="radioInput" type="radio" name="understanding" value="3" onChange={(event) => this.handleChange(event)} /> 3
                <input className="radioInput" type="radio" name="understanding" value="4" onChange={(event) => this.handleChange(event)} /> 4
                <input className="radioInput" type="radio" name="understanding" value="5" onChange={(event) => this.handleChange(event)} /> 5<br/><br/>
            </div>
            <br/>
            <Link to="/3"><button onClick={this.handleClick} disabled={this.state.button}>Next</button></Link>
            </Router>
        );
    }
}
//Link disables user from advancing to the next page without clicking a value
//When value is clicked, the event triggers the handleChange function, which changes 'button' in state...
//...This sets the 'understanding' value in state, which will be sent to 'SET_UNDERSTANDING' in the Redux Store's feedbackReducer...
//...This allows user to advance to the next (Supported.js)

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);