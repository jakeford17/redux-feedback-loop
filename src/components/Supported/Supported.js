import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class Supported extends Component {
    state = {
        support: '1'
    }

    handleChange = (event) => {
        this.setState({
            support: event.target.value
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
            <div>
            <select onChange={this.handleChange} value={this.state.feeling}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>
            <br/>
            <Link to="/4"><button onClick={this.handleClick}>Next</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Supported);