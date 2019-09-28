import React, { Component } from 'react';
import { connect } from 'react-redux';
import {HashRouter as Router, Link} from 'react-router-dom';

class Feeling extends Component {

    state = {
        feeling: '1'
    }

    handleChange = (event) => {
        this.setState({
            feeling: event.target.value
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
            <Link to="/2"><button onClick={this.handleClick}>Next</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Feeling);