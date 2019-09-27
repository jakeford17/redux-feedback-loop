import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Route, Link} from 'react-router-dom';

class Understanding extends Component {

    state = {
        understanding: '1'
    }

    handleChange = (event) => {
        this.setState({
            understanding: event.target.value
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
            <div>
            <select onChange={this.handleChange} value={this.state.understanding}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
            </select>
            </div>
            <br/>
            <Link to="/3"><button onClick={this.handleClick}>Next</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Understanding);