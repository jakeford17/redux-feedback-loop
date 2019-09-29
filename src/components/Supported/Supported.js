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
            <div>
                <input type="radio" name="supported" value="1" onChange={(event) => this.handleChange(event)} />1<br/>
                <input type="radio" name="supported" value="2" onChange={(event) => this.handleChange(event)} />2<br/>
                <input type="radio" name="supported" value="3" onChange={(event) => this.handleChange(event)} />3<br/>
                <input type="radio" name="supported" value="4" onChange={(event) => this.handleChange(event)} />4<br/>
                <input type="radio" name="supported" value="5" onChange={(event) => this.handleChange(event)} />5<br/>
            </div>
            <br/>
            <Link to="/4"><button onClick={this.handleClick} disabled={this.state.button}>Next</button></Link>
            </Router>
        );
    }
}

const mapStateToProps = (reduxStore) => ({
    reduxStore
})

export default connect(mapStateToProps)(Supported);